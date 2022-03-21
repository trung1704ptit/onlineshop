import Link from "next/link";
import dynamic from "next/dynamic";
import { BsSuitHeart } from "react-icons/bs";
import styles from "../../styles/header.module.scss";

const MyAccount = dynamic(() => import("./MyAccount"));
const DesktopSearch = dynamic(() => import("../SearchBar/DesktopSearch"));
const DesktopCart = dynamic(() => import("../Cart/DesktopCart"));

export default function DesktopHeader() {
  return (
    <header className={styles["main-header"]}>
      <div className="pos-rel">
        <div className="container d-flex align-items-stretch">
          <div className={styles["header-logo"]}>
            <Link href="/">
              <img
                src="https://retailshop.liquid-themes.com/staging/wp-content/uploads/2020/06/hubmarket-logo-dark.svg"
                alt="logo"
              />
            </Link>
          </div>
          <DesktopSearch />

          <div className="col-auto head-col d-flex">
            <DesktopCart />

            {/*  wishlist */}
            <div className={styles["header-module"]}>
              <Link href="/wishlist">
                <div className={styles["wishlist"]}>
                  <span className={styles["circle-item"]}>
                    <BsSuitHeart />
                  </span>
                </div>
              </Link>
            </div>

            {/* my account */}
            <MyAccount />
          </div>
        </div>
      </div>
    </header>
  );
}
