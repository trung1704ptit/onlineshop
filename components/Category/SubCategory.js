import Link from "next/link";
import styles from "@styles/category.module.scss";
import classNames from "classnames";
import { PRODUCT_CATEGORY_BASE } from "@utils/constants";
import { Col, Row } from "antd";

export default function SubCategory({ data, groupCategoryId, screen }) {
  return (
    <div className={classNames(styles["sub-category-list"], styles[screen])}>
      <Row gutter={32} className="w-100">
        {data &&
          data.map((item) => {
            if (item.isShow) {
              return (
                <Col xs={24} lg={12} key={item._id}>
                  <div className={styles["sub-category-block"]}>
                    <div>
                      <h3 className={styles["sub-cat-title"]}>
                        <Link
                          href={`${PRODUCT_CATEGORY_BASE}/${groupCategoryId}/${item.slug}`}
                        >
                          <a>{item.name}</a>
                        </Link>
                      </h3>
                      <ul className="list-style-none">
                        {item.children &&
                          item.children.map((subItem) => (
                            <li key={subItem._id}>
                              <Link
                                href={`${PRODUCT_CATEGORY_BASE}/${groupCategoryId}/${item.slug}/${subItem.slug}`}
                              >
                                <a
                                  className={classNames(
                                    styles["link"],
                                    "link-animated"
                                  )}
                                >
                                  {subItem.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                    {item.thumbnail ? (
                      <div className={styles["category-img"]}>
                        <img src={item.thumbnail} alt="category-img" />
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
}
