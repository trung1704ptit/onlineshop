import CircleButton from "@components/Button/CircleButton";
import CategorySelectTree from "@components/CategorySelectTree";
import ColorOptions from "@components/ColorOptions";
import styles from "@styles/filter.module.scss";
import { Divider, Slider } from "antd";
import cx from "classnames";
import { Typography } from "antd";
import classNames from "classnames";

const { Title } = Typography;

export default function LeftFilter() {
  return (
    <div className={styles["left-filter"]}>
      <div className={classNames(styles["filter-item"], "d-none d-xl-block")}>
        <Title level={5}>Filters products</Title>
        <Divider />
      </div>

      <div className={styles["filter-item"]}>
        <h6 className={styles["title"]}>Filter by Categories</h6>
        <CategorySelectTree />
        <Divider />
      </div>

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
        <Divider />
      </div>

      <div className={styles["filter-item"]}>
        <h6 className={styles["title"]}>Filter by color</h6>
        <ColorOptions />
      </div>
    </div>
  );
}
