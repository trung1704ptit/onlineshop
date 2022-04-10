import Link from "next/link";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, message } from "antd";
import { addToCart } from "@redux/actions/cart";
import styles from "../../styles/product.module.scss";

const key = "updatable";

export default function Product({ data, border = true, className="" }) {
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useState(() => {
    if (data && data.images) {
      setImgSrc(data.images[0]);
    }
  }, [data.images]);

  const onMouseEnter = () => {
    if (data && data.images) {
      if (data.images.length > 1) {
        setImgSrc(data.images[1]);
      }
    }
  };

  const onMouseOut = () => {
    if (data && data.images) {
      if (data.images.length > 1) {
        setImgSrc(data.images[0]);
      }
    }
  };

  const handleAddCart = () => {
    dispatch(addToCart(data));
    openMessage(data.title);
  };

  const openMessage = (title) => {
    message.loading({ content: `Adding ${title} to Cart`, key });
    setLoading(true);
    setTimeout(() => {
      message.success({ content: `Added ${title}  to Cart`, key, duration: 2 });
      setLoading(false);
    }, 800);
  };

  return (
    <div
      className={classNames(
        styles["product-item"],
        border ? "border" : "border-0",
        className
      )}
    >
      <Link href={`/product/${data.id}`}>
        <a>
          <figure>
            {data.oldPrice !== data.currentPrice ? (
              <span className={styles["label"]}>Sale!</span>
            ) : null}

            <img
              src={imgSrc}
              alt="product-img"
              onMouseEnter={onMouseEnter}
              onMouseOut={onMouseOut}
            />
          </figure>
        </a>
      </Link>

      <div className={styles["product-bottom"]}>
        <div>
          <div className={styles["product-category"]}>
            <Link href="#">{data.categories[0]}</Link>
          </div>
          <h3 className={styles["title"]}>
            <Link href={`/product/${data.id}`}>{data.title}</Link>
          </h3>
          <div className={styles["product-price"]}>
            <span className={styles["old-price"]}>${data.oldPrice}</span>
            <span className={styles["current-price"]}>
              ${data.currentPrice}
            </span>
          </div>
        </div>

        <Button
          size="large"
          disabled={loading}
          onClick={handleAddCart}
          shape="round"
          loading={loading}
          data-cy="add-to-cart"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
