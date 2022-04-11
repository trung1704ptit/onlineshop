import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "@styles/product.module.scss";
import CircleButton from "../Button/CircleButton";
import Title from "antd/lib/typography/Title";

export default function ProductHeadCarousel({ imageUrl }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={styles["product-preview"]}
    >
      <div className={styles["caption"]}>
        <Title level={3}>New Arrivals in Fashion.</Title>
        <CircleButton size="medium">
          Shop Women&apos;s <MdKeyboardArrowRight />
        </CircleButton>
      </div>
    </div>
  );
}
