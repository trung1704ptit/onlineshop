// import Link from "next/link";
import styles from "../../styles/header.module.scss";
// import cx from "classnames";
import { BsList, BsXLg } from "react-icons/bs";
import { useState } from "react";
// import dynamic from "next/dynamic";
import CollapseFullscreen from "../Collapse/CollapseFullscreen";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <BsList
          className={styles["search-icon"]}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <BsXLg
          onClick={() => setOpen(!open)}
          className={styles["search-icon"]}
        />
      )}
      <CollapseFullscreen active={open}>
        <div className={styles["empty-wrapper"]}>Menu</div>
      </CollapseFullscreen>
    </>
  );
}
