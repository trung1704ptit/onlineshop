import CategorySelectTree from "@components/CategorySelectTree";
import styles from "@styles/filter.module.scss";
import { Divider } from "antd";
import { Typography } from "antd";
import classNames from "classnames";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";

const { Title } = Typography;

export default function LeftFilter({ noCategory = false }) {
  return (
    <div className={styles["left-filter"]}>
      <div className={classNames(styles["filter-item"], "d-none d-xl-block")}>
        <Title level={5}>Filters products</Title>
        <Divider />
      </div>

      {!noCategory && (
        <div className={styles["filter-item"]}>
          <h6 className={styles["title"]}>Filter by Categories</h6>
          <CategorySelectTree />
          <Divider />
        </div>
      )}

      <PriceFilter />

      <div className={styles["filter-item"]}>
        <h6 className={styles["title"]}>Filter by color</h6>
        <ColorFilter />
      </div>
    </div>
  );
}
