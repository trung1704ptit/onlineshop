import cx from "classnames";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

import styles from "../../styles/header.module.scss";
import Section from "../Section";

export default function HeaderCategories() {
  return (
    <Section>
      <div className="d-flex align-items-stretch">
        <div className={styles["header-categories"]}>
          <div className={styles["left-side"]}>
            <div className={styles["toggle-categories"]}>
              All Categories <BsCart2 />
            </div>
          </div>
          <div className={styles["right-side"]}>
            <ul className="list-style-none">
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/shop">Hot Deals</Link>
                <span className={"link-badge orange"}>Sale</span>
              </li>
              <li>
                <Link href="/shop">Best Sellers</Link>
                {/* <span className={"link-badge red"}>Hot</span> */}
              </li>
              <li>
                <Link href="/shop">New Arrivals</Link>
                <span className={"link-badge green"}>New</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}