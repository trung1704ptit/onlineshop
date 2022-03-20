// import Link from "next/link";
import dynamic from "next/dynamic";
import { BsSuitHeart } from "react-icons/bs";
import styles from "../../styles/header.module.scss";
// import cx from "classnames";


const MyAccount = dynamic(() => import("./MyAccount"));
const Search = dynamic(() => import("./Search"));
const HeaderCart = dynamic(() => import("../Cart/HeaderCart"));

export default function Header() {
  return (
    <header className={styles["main-header"]}>
      <div className="pos-rel">
        <div className="container d-flex align-items-stretch">
          <Search />

          <div className="col-auto head-col d-flex">
            <HeaderCart />

            {/*  wishlist */}
            <div className={styles["header-module"]}>
              <div className={styles["wishlist"]}>
                <span className={styles["circle-item"]}>
                  <BsSuitHeart />
                </span>
              </div>
            </div>

            {/* my account */}
            <MyAccount />
          </div>
        </div>
      </div>
    </header>
  );
}
