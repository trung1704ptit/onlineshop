import { Select } from "antd";
import styles from "@styles/filter.module.scss";
import { FILTER } from "utils/constants";
import { IoGridOutline, IoList } from "react-icons/io5";
import { Tooltip } from "antd";
import cx from "classnames";

const { Option } = Select;

export default function LeftFilter() {
  return (
    <div className={styles["top-filter"]}>
      <div>Showing 1-16 of 66 results</div>
      <div className={styles["right-side"]}>
        <div className={styles["filter-item"]}>
          <Select defaultValue="latest" bordered={false} style={{ width: 200 }}>
            {FILTER.sorting.map((item) => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </div>

        <div className={styles["filter-item"]}>
          <span className={styles["show-text"]}>Show:</span>
          <div className={styles["select-no-items"]}>
            <Select defaultValue="16" bordered={false}>
              {FILTER.showItems.map((item) => (
                <Option value={item.value} key={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>

        <div className={styles["filter-item"]}>
          <Tooltip title="Grid products">
            <IoGridOutline
              className={cx(styles["grid-icon"], "cursor-pointer")}
            />
          </Tooltip>

          <Tooltip title="List products">
            <IoList className={cx(styles["list-icon"], "cursor-pointer")} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
