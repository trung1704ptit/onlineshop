import Link from "next/link";
import styles from "../../styles/product.module.scss";
import CircleButton from "../Button/CircleButton";
import { BsCartPlus } from "react-icons/bs";

export default function Product() {
  return (
    <Link href="#">
      <div className={styles["product-item"]}>
        <figure>
          <span className={styles["label"]}>Sale!</span>
          <img
            src="https://retailshop.liquid-themes.com/staging/wp-content/uploads/2020/05/prod-3@2x-300x208.jpg"
            alt="product-img"
          />
        </figure>
        <div className={styles["product-category"]}>
          <Link href="#">Clothing</Link>
        </div>
        <h3 className={styles["title"]}>GoPro Action Camera 32GB Waterproof</h3>
        <div className={styles["product-price"]}>
          <span className={styles["old-price"]}>$20.00</span>
          <span className={styles["current-price"]}>$18.00</span>
        </div>
        <CircleButton size="medium" style="transparent">
          Add to cart
        </CircleButton>
      </div>
    </Link>
  );
}
