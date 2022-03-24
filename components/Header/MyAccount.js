import { useState } from "react";
import Link from "next/link";
import cx from "classnames";
import { RiArrowDownSLine } from "react-icons/ri";
import styles from "../../styles/header.module.scss";

export default function MyAccount() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles["header-module"]}>
      <div
        className={cx(styles["my-account"], "pos-rel")}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <span>My Account</span>
        <RiArrowDownSLine className={styles["downdown-icon"]} />
        <div
          className={cx(
            "module-dropdown",
            "dropdown-fade-onhover",
            "left",
            active ? "active" : ""
          )}
        >
          <div className={styles["dropdown-menu-content"]}>
            <ul className="list-style-none">
              <li>
                <Link href="/my-account" target="_blank">
                  <a className="link-animated">Signup</a>
                </Link>
              </li>
              <li>
                <Link href="/my-account" target="_blank">
                  <a className="link-animated">Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
