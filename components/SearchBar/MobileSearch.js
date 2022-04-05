import cx from "classnames";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

import styles from "../../styles/header.module.scss";

export default function MobileSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BsSearch
        className={styles["search-icon"]}
        onClick={() => setOpen(!open)}
      />

      <div className={cx(styles["mobile-search-input"], open ? "d-flex" : "d-none")}>
        <input placeholder="Search products..." type="text" />
        <button>
          <BsSearch />
        </button>
      </div>
    </>
  );
}
