import cx from "classnames";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

import styles from "@styles/header.module.scss";
import { Button, Drawer } from "antd";

export default function MobileSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BsSearch
        className={styles["search-icon"]}
        onClick={() => setOpen(!open)}
      />

      {/* <div className={cx(styles["mobile-search-input"], open ? "d-flex" : "d-none")}>
        <input placeholder="Search products..." type="text" />
        <button>
          <BsSearch />
        </button>
      </div> */}

      <Drawer
        title="Search products"
        placement={"left"}
        onClose={() => setOpen(!open)}
        visible={open}
        key={"left"}
      >
        <div className={styles["mobile-search-input"]}>
          <input placeholder="Search products..." type="text" />
          <Button type="primary" size="large" icon={<BsSearch />} />
        </div>
      </Drawer>
    </>
  );
}
