import { useState } from "react";
import { BiGridAlt } from "react-icons/bi";
import { Drawer } from "antd";
import styles from "@styles/header.module.scss";
import CategoryList from "./CategoryList";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BiGridAlt
        className={styles["search-icon"]}
        onClick={() => setOpen(!open)}
      />

      <Drawer
        title="Category"
        placement="right"
        onClose={() => setOpen(!open)}
        visible={open}
        bodyStyle={{ padding: '8px' }}
      >
        <CategoryList screen="mobile" />
      </Drawer>
    </>
  );
}
