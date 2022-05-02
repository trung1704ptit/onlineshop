import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Drawer } from "antd";
import styles from "@styles/header.module.scss";
import DesktopCategoryList from "./DesktopCategoryList";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <BsGrid3X3Gap
          className={styles["search-icon"]}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <AiOutlineClose
          onClick={() => setOpen(!open)}
          className={styles["search-icon"]}
        />
      )}
      <Drawer
        title="Category"
        placement="right"
        onClose={() => setOpen(!open)}
        visible={open}
        bodyStyle={{ padding: 0 }}
      >
        <DesktopCategoryList screen="mobile" />
      </Drawer>
    </>
  );
}
