import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "@styles/product.module.scss";
import CircleButton from "../Button/CircleButton";
import Title from "antd/lib/typography/Title";

export default function ProductHeadCarousel({ imageUrl, title }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={styles["product-preview"]}
    >
      <div className={styles["caption"]}>
        <Title level={3}>{title}</Title>
        <CircleButton size="medium">
          Shop Now <MdKeyboardArrowRight />
        </CircleButton>
      </div>
    </div>
  );
}
