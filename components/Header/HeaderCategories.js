import Link from "next/link";
import styles from "@styles/header.module.scss";
import Section from "../Section";
import Category from "@components/Category";

export default function HeaderCategories() {
  return (
    <Section>
      <div className="d-flex align-items-stretch">
        <div className={styles["header-categories"]}>
          <div className={styles["left-side"]}>
            <Category />
          </div>
          <div className={styles["right-side"]}>
            <ul className="list-style-none">
              <li>
                <Link href="/shop">
                  <a className={styles["link"]} data-cy="shop-link">
                    Shop
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className={styles["link"]} data-cy="hot-deals-link">
                    Hot Deals
                  </a>
                </Link>
                <span className={"link-badge orange"}>Sale</span>
              </li>
              <li>
                <Link href="/shop">
                  <a className={styles["link"]} data-cy="best-seller-link">
                    Best Sellers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className={styles["link"]} data-cy="new-arrivals-link">
                    New Arrivals
                  </a>
                </Link>
                <span className={"link-badge green"}>New</span>
              </li>
              <li>
                <Link href="/contact">
                  <a className={styles["link"]} data-cy="contact-link">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
