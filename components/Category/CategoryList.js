import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import isEmpty from "lodash/isEmpty";
import styles from "@styles/category.module.scss";
import classNames from "classnames";
import { categories } from "../../data/categories";
import { Col, Row } from "antd";

export default function CategoryList() {
  return (
    <div className={styles["category-list"]}>
      <ul className="list-style-none">
        {categories &&
          categories.map((item) => {
            if (item.isShow) {
              return (
                <li key={item.id} className={styles["category-item"]}>
                  <Link href={`/product-category/${item.slug}`}>
                    <a className={styles['category-link']} data-cy="category-link">
                      <item.icon className={styles["icon"]} />
                      {item.name}
                      {!isEmpty(item.sub) ? (
                        <IoChevronForwardOutline className={styles["sub-menu-arrow"]} />
                      ) : null}
                    </a>
                  </Link>
                  {!isEmpty(item.sub) ? <SubCategory data={item.sub} groupCategoryId={item.slug} /> : null}
                </li>
              )
            }
          })}
      </ul>
    </div>
  );
}


export const SubCategory = ({ data, groupCategoryId }) => {
  return (
    <div className={styles["sub-category-list"]}>
      <Row gutter={32} className="w-100">
        {data && data.map(item => {
          if (item.isShow) {
            return (
              <Col xs={24} lg={12}>
                <div className={styles["sub-category-block"]} key={item.id}>
                  <div>
                    <h3 className={styles["sub-cat-title"]}>{item.name}</h3>
                    <ul className="list-style-none">
                      {item.sub && item.sub.map(subItem => (
                        <li key={subItem.id}>
                          <Link href={`/product-category/${groupCategoryId}/${subItem.slug}`}>
                            <a className={classNames(styles["link"], "link-animated")}>
                              {subItem.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {item.image ? <div className={styles["category-img"]}>
                    <img src={item.image} alt="category-img" />
                  </div> : null}
                </div>
              </Col>
            )
          }
        }
        )}
      </Row>
    </div>
  );
}