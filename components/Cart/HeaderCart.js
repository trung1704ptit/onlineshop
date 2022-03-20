import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import cx from "classnames";

import styles from "../../styles/header.module.scss";

export default function HeaderCart() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="col-auto head-col d-flex"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* cart */}
      <div className={styles["header-module"]}>
        <div className={styles["cart-dropdown"]}>
          <span className={styles["circle-item"]}>
            <BsCart2 />
            <span className={styles["cart-total"]}>0</span>
          </span>
          <div className={styles["cart-total-cost"]}>
            <span className={styles["cart-total-text"]}>Total</span>
            <span>$0.00</span>
          </div>
          <div
            className={cx(
              "module-dropdown",
              "dropdown-fade-onhover",
              "right",
              active ? "active" : ""
            )}
          >
            <div className={styles["dropdown-menu-content"]}><h3>No products in the cart.</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
}
