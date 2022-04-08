import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsGrid3X3Gap } from 'react-icons/bs';
import styles from "@styles/header.module.scss";
import CollapseFullscreen from "../Collapse/CollapseFullscreen";
import CategoryList from "../Category/CategoryList";

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
      <CollapseFullscreen active={open}>
        <CategoryList />
      </CollapseFullscreen>
    </>
  );
}
