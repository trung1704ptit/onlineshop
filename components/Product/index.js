import Link from "next/link";
import styles from "../../styles/product.module.scss";
import CircleButton from "../Button/CircleButton";
import classNames from "classnames";
import { useState } from "react";

export default function Product({ data, border = true }) {
  const [imgSrc, setImgSrc] = useState("");

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

  return (
    <div
      className={classNames(
        styles["product-item"],
        border ? "border" : "border-0"
      )}
    >
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

      <div className={styles["product-bottom"]}>
        <div>
          <div className={styles["product-category"]}>
            <Link href="#">{data.categories[0]}</Link>
          </div>
          <h3 className={styles["title"]}>{data.title}</h3>
          <div className={styles["product-price"]}>
            <span className={styles["old-price"]}>${data.oldPrice}</span>
            <span className={styles["current-price"]}>
              ${data.currentPrice}
            </span>
          </div>
        </div>

        <CircleButton size="medium" style="transparent">
          Add to cart
        </CircleButton>
      </div>
    </div>
  );
}
