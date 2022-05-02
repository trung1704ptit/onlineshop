import cx from "classnames";
import dynamic from "next/dynamic";
import styles from "../../styles/header.module.scss";
import Logo from "@components/Logo";

const MobileSearch = dynamic(() => import("../SearchBar/MobileSearch"));
const MobileCart = dynamic(() => import("../Cart/MobileCart"));
const MobileCategoryList = dynamic(() => import("../Category/MobileCategoryList"));


export default function MobileHeader() {
  return (
    <header className={styles["main-mobile-header"]}>
      <div className={styles["mobile-header-item"]}>
        <div className={styles["left-item"]}>
          <MobileSearch />
        </div>
        <div className={cx(styles["left-item"], "pos-rel")}>
          <MobileCart />
        </div>
      </div>

      <div className={styles["mobile-header-item"]}>
        <Logo />
      </div>

      <div className={cx(styles["mobile-header-item"], styles["right-side"])}>
        <div className={styles["right-item"]}>
          <MobileCategoryList />
        </div>
      </div>
    </header>
  );
}
