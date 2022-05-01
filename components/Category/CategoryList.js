import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import isEmpty from "lodash/isEmpty";
import styles from "@styles/category.module.scss";
import classNames from "classnames";
import { Col, Row } from "antd";
import { PRODUCT_CATEGORY_BASE } from "@utils/constants";
import { categories } from "data/categories";

export default function CategoryList() {
  return (
    <div className={styles["category-list"]}>
      <ul className="list-style-none">
        {categories &&
          categories.map((item) => {
            if (item.isShow) {
              return (
                <li key={item.id} className={styles["category-item"]}>
                  <a
                    href={`${PRODUCT_CATEGORY_BASE}/${item.slug}`}
                    className={styles["category-link"]}
                    data-cy="category-link"
                  >
                    <item.icon className={styles["icon"]} />
                    {item.name}
                    {!isEmpty(item.sub) ? (
                      <IoChevronForwardOutline
                        className={styles["sub-menu-arrow"]}
                      />
                    ) : null}
                  </a>

                  {!isEmpty(item.sub) ? (
                    <SubCategory data={item.sub} groupCategoryId={item.slug} />
                  ) : null}
                </li>
              );
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
        {data &&
          data.map((item) => {
            if (item.isShow) {
              return (
                <Col xs={24} lg={12} key={item.id}>
                  <div className={styles["sub-category-block"]}>
                    <div>
                      <h3 className={styles["sub-cat-title"]}>
                        <a
                          href={`${PRODUCT_CATEGORY_BASE}/${groupCategoryId}/${item.slug}`}
                        >
                          {item.name}
                        </a>
                      </h3>
                      <ul className="list-style-none">
                        {item.sub &&
                          item.sub.map((subItem) => (
                            <li key={subItem.id}>
                              <a
                                href={`${PRODUCT_CATEGORY_BASE}/${groupCategoryId}/${item.slug}/${subItem.slug}`}
                                className={classNames(
                                  styles["link"],
                                  "link-animated"
                                )}
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                    {item.image ? (
                      <div className={styles["category-img"]}>
                        <img src={item.image} alt="category-img" />
                      </div>
                    ) : null}
                  </div>
                </Col>
              );
            }
          })}
      </Row>
    </div>
  );
};
