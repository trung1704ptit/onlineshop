import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import cx from "classnames";
import dynamic from "next/dynamic";

import styles from "../../styles/header.module.scss";
import cartStyles from "@styles/cart.module.scss";
import { useSelector } from "react-redux";
import { Card, Dropdown } from "antd";

const EmptyCart = dynamic(() => import("./EmptyCart"));
const CartPreview = dynamic(() => import("./CartPreview"));

export default function DesktopCart() {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const DropdownContent = () => (
    <Card style={{ width: 400 }} className="p-4">
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
    </Card>
  );

  return (
    <div className="col-auto head-col d-flex">
      <div className={styles["header-module"]}>
        <Dropdown overlay={DropdownContent} placement="bottomRight">
          <div className={cartStyles["cart-dropdown"]}>
            <span className={styles["circle-item"]}>
              <BsCart2 />
              <span
                className={cartStyles["total-item"]}
                data-cy="desktop-cart-total"
              >
                {total}
              </span>
            </span>

            <div className={cartStyles["cart-total-cost"]}>
              <span className={cartStyles["cart-total-text"]}>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
