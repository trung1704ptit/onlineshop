import { Select } from "antd";
import styles from "@styles/filter.module.scss";
import { FILTER } from "utils/constants";
import { IoGridOutline, IoList } from "react-icons/io5";
import { Tooltip } from "antd";
import cx from "classnames";
import classNames from "classnames";

import { FiFilter } from "react-icons/fi";
import FilterOnMobile from "./FilterOnMobile";
import { useState } from "react";

const { Option } = Select;

export default function LeftFilter() {
  const [filterMobileOpen, setFilterMobleOpen] = useState(false);

  const handleOpenFilterOnMobile = () => {
    setFilterMobleOpen(true)
  }

  const handleCloseFilterOnMobile = () => {
    setFilterMobleOpen(false)
  }

  return (
    <div className={classNames(styles["top-filter"], "product-top-filter")}>
      <div className="d-none d-xl-flex">Showing 1-16 of 66 results</div>

      <div
        className="d-flex align-items-center d-xl-none"
        onClick={handleOpenFilterOnMobile}
      >
        <FiFilter /> <span className="ms-1">Filter products</span>
      </div>

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

        <div className={classNames(styles["filter-item"], "d-none d-xl-flex")}>
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

        <div className={classNames(styles["filter-item"], "d-none d-xl-flex")}>
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

      <FilterOnMobile
        open={filterMobileOpen}
        onClose={handleCloseFilterOnMobile}
      />
    </div>
  );
}
