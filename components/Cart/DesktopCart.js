import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import cx from "classnames";
import dynamic from "next/dynamic";

import styles from "../../styles/header.module.scss";
import cartStyles from '@styles/cart.module.scss';
import { useSelector } from "react-redux";

const EmptyCart = dynamic(() => import("./EmptyCart"));
const CartPreview = dynamic(() => import("./CartPreview"));

export default function DesktopCart() {
  const [active, setActive] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const totalPrice = useSelector((state) => state.cart.totalPrice);


  return (
    <div
      className="col-auto head-col d-flex"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* cart */}
      <div className={styles["header-module"]}>
        <div className={cartStyles["cart-dropdown"]}>
          <span className={styles["circle-item"]}>
            <BsCart2 />
            <span className={cartStyles["cart-total"]}>{total}</span>
          </span>

          <div className={cartStyles["cart-total-cost"]}>
            <span className={cartStyles["cart-total-text"]}>Total</span>
            <span>${totalPrice}</span>
          </div>

          <div
            className={cx(
              "module-dropdown",
              "dropdown-fade-onhover",
              "right",
              active ? "active" : ""
            )}
          >
            <div className={cartStyles["dropdown-menu-content"]}>
              {total === 0 ? (
                <EmptyCart />
              ) : (
                <CartPreview products={products} totalPrice={totalPrice} />
              )}
            </div>
            <div className={cartStyles["cart-preview-bottom"]}>
              Free shipping for All Orders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
