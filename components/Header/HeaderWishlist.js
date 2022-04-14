import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import styles from "../../styles/header.module.scss";
import cartStyles from "../../styles/cart.module.scss";

export default function HeaderWishlist() {
  const products = useSelector((state) => state.wishlist.products);

  return (
    <Link href="/wishlist">
      <a>
        <div className={styles["wishlist"]}>
          <span className={styles["circle-item"]}>
            <BsSuitHeart />
            <span className={cartStyles["total-item"]}>{products.length}</span>
          </span>
        </div>
      </a>
    </Link>
  );
}
