// import Link from "next/link";
import styles from "../../styles/header.module.scss";
import { BsCart2, BsXLg } from "react-icons/bs";
import { useState } from "react";
import dynamic from "next/dynamic";
import CollapseFullscreen from "../Collapse/CollapseFullscreen";

const EmptyCart = dynamic(() => import("./EmptyCart"));

export default function MobileCart() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <div onClick={() => setOpen(!open)}>
          <BsCart2 className={styles["search-icon"]} />
          <span className={styles["cart-total"]}>0</span>
        </div>
      ) : (
        <BsXLg
          onClick={() => setOpen(!open)}
          className={styles["search-icon"]}
        />
      )}
      <CollapseFullscreen active={open}>
        <div className={styles["empty-wrapper"]}>
          <EmptyCart />
        </div>
      </CollapseFullscreen>
    </>
  );
}
