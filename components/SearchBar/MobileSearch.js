import Link from "next/link";
import styles from "../../styles/header.module.scss";
import cx from "classnames";
import { BsSearch, BsXLg } from "react-icons/bs";
import { useState } from "react";
import { Fade } from "react-bootstrap";

export default function MobileSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BsSearch
        className={styles["search-icon"]}
        onClick={() => setOpen(!open)}
      />

      <Fade in={open} timeout={400}>
        <div
          className={cx(styles["mobile-search-input"], open ? "d-flex" : "")}
        >
          <input placeholder="Search products..." type="text" />
          <button>
            <BsSearch />
          </button>
        </div>
      </Fade>
    </>
  );
}
