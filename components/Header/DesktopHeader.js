import cx from "classnames";
import Logo from "@components/Logo";
import styles from "@styles/header.module.scss";
import HeaderCategories from "./HeaderCategories";
import MyAccount from "./MyAccount";
import DesktopSearch from "../SearchBar/DesktopSearch";
import DesktopCart from "../Cart/DesktopCart";
import HeaderWishlist from "./HeaderWishlist";

export default function DesktopHeader() {
  return (
    <header className={styles["main-header"]}>
      <div className={cx(styles["top-header"], "pos-rel")}>
        <div className="container d-flex align-items-stretch">
          <div className={styles["header-logo"]}>
            <Logo />
          </div>
          <DesktopSearch />

          <div className="col-auto head-col d-flex flex-fill justify-content-end">
            <DesktopCart />

            {/*  wishlist */}
            <div className={styles["header-module"]}>
              <HeaderWishlist />
            </div>

            {/* my account */}
            <MyAccount />
          </div>
        </div>
      </div>
      <HeaderCategories />
    </header>
  );
}
