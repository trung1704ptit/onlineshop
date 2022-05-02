import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import isEmpty from "lodash/isEmpty";
import styles from "@styles/category.module.scss";
import classNames from "classnames";
import { Col, Row } from "antd";
import { PRODUCT_CATEGORY_BASE } from "@utils/constants";
import { categories } from "data/categories";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function CategoryList({ screen }) {
  const [openSub, setOpenSub] = useState("");

  const handleOpenSubMenu = (e, id) => {
    e.preventDefault();
    if (id !== openSub) {
      setOpenSub(id);
    } else {
      setOpenSub("");
    }
  };

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
                        className={classNames(
                          styles["sub-menu-arrow"],
                          "hidden d-sm-block"
                        )}
                        onClick={(e) => handleOpenSubMenu(e, item.id)}
                      />
                    ) : null}
                    {!isEmpty(item.sub) ? (
                      <MdOutlineKeyboardArrowDown
                        className={classNames(
                          styles["sub-menu-arrow"],
                          "d-block d-sm-none fs-4"
                        )}
                        onClick={(e) => handleOpenSubMenu(e, item.id)}
                      />
                    ) : null}
                  </a>

                  {!isEmpty(item.sub) && screen !== "mobile" ? (
                    <SubCategory data={item.sub} groupCategoryId={item.slug} />
                  ) : null}

                  {!isEmpty(item.sub) && openSub === item.id ? (
                    <SubCategory
                      data={item.sub}
                      groupCategoryId={item.slug}
                      screen={screen}
                    />
                  ) : null}
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}

export const SubCategory = ({ data, groupCategoryId, screen }) => {
  return (
    <div className={classNames(styles["sub-category-list"], styles[screen])}>
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
