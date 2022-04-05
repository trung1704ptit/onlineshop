import CircleButton from "@components/Button/CircleButton";
import CategorySelectTree from "@components/CategorySelectTree";
import ColorOptions from "@components/ColorOptions";
import styles from "@styles/filter.module.scss";
import { Divider, Slider } from "antd";
import cx from "classnames";
import { Typography } from "antd";

const { Title } = Typography;

export default function LeftFilter() {
  return (
    <div className={styles["left-filter"]}>
      <div className={styles["filter-item"]}>
        <Title level={5}>Product Categories</Title>
      </div>

      <Divider />

      <CategorySelectTree />

      <Divider />

      <div className={cx(styles["price-slider"], styles["filter-item"])}>
        <h6 className={styles["title"]}>Filter by price</h6>

        <Slider defaultValue={50} style={{ margin: 0 }} />

        <div className={styles["text-price"]}>
          <span>
            <span className={styles["text"]}>Price: </span>$0 - $15,000
          </span>
          <CircleButton size="small" style="gray">
            Filter
          </CircleButton>
        </div>
      </div>

      <Divider />

      <div className={styles["filter-item"]}>
        <h6 className={styles["title"]}>Filter by color</h6>
        <ColorOptions />
      </div>

      <Divider />

      {/* Ads */}
      <div className={styles["filter-item"]}>
        <img src="/images/others/1.png" alt="banner" />
      </div>
    </div>
  );
}
