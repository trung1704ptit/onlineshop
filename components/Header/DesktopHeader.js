import Link from "next/link";
import dynamic from "next/dynamic";
import { BsSuitHeart } from "react-icons/bs";
import cx from "classnames";
import styles from "../../styles/header.module.scss";
import Logo from "@components/Logo";

const MyAccount = dynamic(() => import("./MyAccount"));
const DesktopSearch = dynamic(() => import("../SearchBar/DesktopSearch"));
const DesktopCart = dynamic(() => import("../Cart/DesktopCart"));
const HeaderCategories = dynamic(() => import("./HeaderCategories"));

export default function DesktopHeader() {
  return (
    <header className={styles["main-header"]}>
      <div className={cx(styles["top-header"], "pos-rel")}>
        <div className="container d-flex align-items-stretch">
          <div className={styles["header-logo"]}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <DesktopSearch />

          <div className="col-auto head-col d-flex flex-fill justify-content-end">
            <DesktopCart />

            {/*  wishlist */}
            <div className={styles["header-module"]}>
              <Link href="/wishlist">
                <a>
                  <div className={styles["wishlist"]}>
                    <span className={styles["circle-item"]}>
                      <BsSuitHeart />
                    </span>
                  </div>
                </a>
              </Link>
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
