import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import isEmpty from "lodash/isEmpty";
import styles from "@styles/category.module.scss";
import classNames from "classnames";
import { categories } from "../../data/categories";

export default function CategoryList() {
  return (
    <div className={styles["category-list"]}>
      <ul className="list-style-none">
        {categories &&
          categories.map((item) => {
            if (item.isShow) {
              return (
                <li key={item.id} className={styles["category-item"]}>
                  <Link href="/shop">
                    <a className={styles['category-link']} data-cy="category-link">
                      <item.icon className={styles["icon"]} />
                      {item.name}
                      {!isEmpty(item.sub) ? (
                        <IoChevronForwardOutline className={styles["sub-menu-arrow"]} />
                      ) : null}
                    </a>
                  </Link>
                  {!isEmpty(item.sub) ? <SubCategory /> : null}
                </li>
              )
            }
          })}
      </ul>
    </div>
  );
}


export const SubCategory = () => {
  return (
    <div className={styles["sub-category-list"]}>
      <div className={styles["sub-category-block"]}>
        <div>
          <h3 className={styles["sub-cat-title"]}>smartphones</h3>
          <ul className="list-style-none">
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  iPhone 14 Pro
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Samsung Galaxy
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Realme Note
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Sony Xperia Series
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["category-img"]}>
          <img src="/images/iphone13pro.png" alt="category-img" />
        </div>
      </div>
      <div className={styles["sub-category-block"]}>
        <div>
          <h3 className={styles["sub-cat-title"]}>laptop</h3>
          <ul className="list-style-none">
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  iPhone 14 Pro
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Samsung Galaxy
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Realme Note
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Sony Xperia Series
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["category-img"]}>
          <img src="/images/macbook.jpg" alt="category-img" />
        </div>
      </div>
      <div className={styles["sub-category-block"]}>
        <div>
          <h3 className={styles["sub-cat-title"]}>headphone</h3>
          <ul className="list-style-none">
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  iPhone 14 Pro
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Samsung Galaxy
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Realme Note
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Sony Xperia Series
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["category-img"]}>
          <img src="/images/headphone.png" alt="category-img" />
        </div>
      </div>
      <div className={styles["sub-category-block"]}>
        <div>
          <h3 className={styles["sub-cat-title"]}>Xbox</h3>
          <ul className="list-style-none">
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  iPhone 14 Pro
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Samsung Galaxy
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Realme Note
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={classNames(styles["link"], "link-animated")}>
                  Sony Xperia Series
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["category-img"]}>
          <img src="/images/xbox.jpg" alt="category-img" />
        </div>
      </div>
    </div>
  );
}