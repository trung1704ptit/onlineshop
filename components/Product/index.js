import Link from "next/link";
import styles from "../../styles/product.module.scss";
import CircleButton from "../Button/CircleButton";

export default function Product({ data }) {
  return (
    <div className={styles["product-item"]}>
      <figure>
        {data.oldPrice !== data.currentPrice ? (
          <span className={styles["label"]}>Sale!</span>
        ) : null}
        <img src={data.images[0]} alt="product-img" />
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
