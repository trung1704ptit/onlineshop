import { useState } from "react";
import { Select } from "antd";
import styles from "@styles/filter.module.scss";
import { FILTER } from "utils/constants";
import { IoGridOutline, IoList } from "react-icons/io5";
import { Tooltip } from "antd";
import cx from "classnames";
import classNames from "classnames";
import { FiFilter } from "react-icons/fi";
import FilterOnMobile from "./FilterOnMobile";
import { useRouter } from "next/router";

const { Option } = Select;

export default function LeftFilter() {
  const [filterMobileOpen, setFilterMobleOpen] = useState(false);
  const router = useRouter();

  const handleOpenFilterOnMobile = () => {
    setFilterMobleOpen(true);
  };

  const handleCloseFilterOnMobile = () => {
    setFilterMobleOpen(false);
  };

  const handleChangeOrder = (value) => {
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      order_by: value,
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  };

  const handleChangePerPage = (value) => {
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      per_page: value,
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  };

  const showProductView = (shape) => {
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      product_view: shape,
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  };

  return (
    <div className={classNames(styles["top-filter"], "product-top-filter")}>
      <div className="d-none d-xl-flex"></div>

      <div
        className="d-flex align-items-center d-xl-none"
        onClick={handleOpenFilterOnMobile}
      >
        <FiFilter /> <span className="ms-1">Filter products</span>
      </div>

      <div className={styles["right-side"]}>
        <div className={styles["filter-item"]}>
          <Select
            defaultValue="latest"
            bordered={false}
            style={{ width: 200 }}
            onChange={handleChangeOrder}
          >
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
            <Select
              defaultValue="16"
              bordered={false}
              onChange={handleChangePerPage}
            >
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
              onClick={() => showProductView("grid")}
            />
          </Tooltip>

          <Tooltip title="List products">
            <IoList
              className={cx(styles["list-icon"], "cursor-pointer")}
              onClick={() => showProductView("list")}
            />
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
