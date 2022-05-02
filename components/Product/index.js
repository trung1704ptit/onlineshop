import Link from "next/link";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, message, Rate } from "antd";
import { addToCart } from "@redux/actions/cart";
import styles from "@styles/product.module.scss";
// import { getBrand } from "@utils/helper";
// import { brands } from "data/brands";

const key = "updatable";

export default function Product({
  data,
  border = true,
  className = "",
  view = "grid",
}) {
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useState(() => {
    if (data && data.images) {
      setImgSrc(data.images[0]);
    }
  }, [data.images]);

  // const onMouseEnter = () => {
  //   if (data && data.images) {
  //     if (data.images.length > 1) {
  //       setImgSrc(data.images[1]);
  //     }
  //   }
  // };

  // const onMouseOut = () => {
  //   if (data && data.images) {
  //     if (data.images.length > 1) {
  //       setImgSrc(data.images[0]);
  //     }
  //   }
  // };

  const handleAddCart = () => {
    dispatch(addToCart(data));
    openMessage(data.title);
  };

  const openMessage = (title) => {
    message.loading({ content: `Adding ${title} to Cart`, key });
    setLoading(true);
    setTimeout(() => {
      message.success({
        content: `Added ${title}  to Cart`,
        key,
        duration: 2,
      });
      setLoading(false);
    }, 800);
  };

  // const productBrands = getBrand(data.brands, brands)
  //   .map((item) => item.name)
  //   .join(", ");

  return (
    <div
      className={classNames(
        styles["product-item"],
        border ? "border" : "border-0",
        className,
        styles[view]
      )}
    >
      <Link href={`/product/${data.slug}`}>
        <a>
          <figure>
            {data.oldPrice !== data.currentPrice ? (
              <span className={styles["label"]}>Sale!</span>
            ) : null}

            <img src={data.images[0]} alt="product-img" />
          </figure>
        </a>
      </Link>

      <div className={styles["product-bottom"]}>
        <div>
          <h3 className={styles["title"]}>
            <Link href={`/product/${data.slug}`}>{data.title}</Link>
          </h3>
          {/* <div className={styles["product-brands"]}>{productBrands}</div> */}
          <div className={styles["product-price"]}>
            {data.oldPrice !== data.currentPrice ? (
              <>
                <span className={styles["old-price"]}>${data.oldPrice}</span>
                <span className={styles["current-price"]}>
                  ${data.currentPrice}
                </span>
              </>
            ) : (
              <span className={styles["current-price"]}>
                ${data.currentPrice}
              </span>
            )}
          </div>

          <Rate
            allowHalf
            defaultValue={data.rating}
            disabled={true}
            className={styles["product-rating"]}
          />
        </div>

        <Button
          size="large"
          disabled={loading || data.quantity === 0}
          onClick={handleAddCart}
          shape="round"
          loading={loading}
          data-cy="add-to-cart"
        >
          {data.quantity === 0 ? "Sold Out" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
}
