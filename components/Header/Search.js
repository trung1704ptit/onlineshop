import Link from "next/link";
import styles from "../../styles/header.module.scss";
import cx from "classnames";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div className={cx("col align-items-stretch", styles["head-col"])}>
      <div className={styles["header-logo"]}>
        <Link href="/">
          <img src="https://retailshop.liquid-themes.com/staging/wp-content/uploads/2020/06/hubmarket-logo-dark.svg" />
        </Link>
      </div>
      <div
        className={cx(styles["header-search-wrapper"], styles["header-module"])}
      >
        <div className={styles["header-search-product"]}>
          <input placeholder="Search products..." type="text" />
          <BsSearch className={styles["search-icon"]} />
        </div>
      </div>
    </div>
  );
}
