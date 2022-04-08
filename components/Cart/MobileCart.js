import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Drawer } from "antd";
import cartStyles from "@styles/cart.module.scss";
import styles from "@styles/header.module.scss";
import CartPreview from "./CartPreview";

const EmptyCart = dynamic(() => import("./EmptyCart"));

export default function MobileCart() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <BsCart2 className={styles["search-icon"]} />
        <span className={cartStyles["cart-total"]}>{total}</span>
      </div>

      <Drawer
        title="Cart"
        placement="right"
        onClose={() => setOpen(!open)}
        visible={open}
      >
        {total === 0 ? (
          <EmptyCart />
        ) : (
          <CartPreview products={products} totalPrice={totalPrice} />
        )}

        <div className={cartStyles["cart-preview-bottom"]}>
          Free shipping for All Orders
        </div>
      </Drawer>
    </>
  );
}
