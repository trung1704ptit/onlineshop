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
                <Link href="/shop">
                  <a className={styles["link"]}>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className={styles["link"]}>Hot Deals</a>
                </Link>
                <span className={"link-badge orange"}>Sale</span>
              </li>
              <li>
                <Link href="/shop">
                  <a className={styles["link"]}>Best Sellers</a>
                </Link>
                {/* <span className={"link-badge red"}>Hot</span> */}
              </li>
              <li>
                <Link href="/shop">
                  <a className={styles["link"]}>New Arrivals</a>
                </Link>
                <span className={"link-badge green"}>New</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}