import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "@styles/product.module.scss";
import CircleButton from "../Button/CircleButton";

export default function ProductPreview({ imageUrl }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={styles["product-preview"]}
    >
      <div className={styles["caption"]}>
        <h2>New Arrivals in Fashion.</h2>
        <CircleButton size="medium">
          Shop Women&apos;s <MdKeyboardArrowRight />
        </CircleButton>
      </div>
    </div>
  );
}
