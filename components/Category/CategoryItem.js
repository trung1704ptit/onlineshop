import { IoChevronForwardOutline } from "react-icons/io5";
import isEmpty from "lodash/isEmpty";
import styles from "@styles/category.module.scss";
import classNames from "classnames";
import { PRODUCT_CATEGORY_BASE } from "@utils/constants";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SubCategory from "./SubCategory";
import Link from "next/link";

export default function CategoryItem({ screen, item }) {
  const [openSub, setOpenSub] = useState("");

  const handleOpenSubMenu = (e, id) => {
    e.preventDefault();
    if (id !== openSub) {
      setOpenSub(id);
    } else {
      setOpenSub("");
    }
  };

  const handleMouseEnter = () => {
    if (screen !== "mobile") {
      setOpenSub(item._id);
    }
  };

  const handleMouseLeave = () => {
    if (screen !== "mobile") {
      setOpenSub("");
    }
  };

  if (isEmpty(item.ancestors)) {
    return (
      <li
        className={styles["category-item"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <Link href={`${PRODUCT_CATEGORY_BASE}/${item.slug}`}>
          <a className={styles["category-link"]} data-cy="category-link">
            <img className={styles["icon"]} src={`${process.env.API_ENDPOINT}/${item.icon}`} width={20} height={20} />
            {item.name}
            {!isEmpty(item.children) ? (
              <IoChevronForwardOutline
                className={classNames(
                  styles["sub-menu-arrow"],
                  "d-none d-sm-block"
                )}
                onClick={(e) => handleOpenSubMenu(e, item._id)}
              />
            ) : null}
            {!isEmpty(item.children) ? (
              <MdOutlineKeyboardArrowDown
                className={classNames(
                  styles["sub-menu-arrow"],
                  "d-block d-sm-none fs-4"
                )}
                onClick={(e) => handleOpenSubMenu(e, item._id)}
              />
            ) : null}
          </a>
        </Link>

        {!isEmpty(item.children) && openSub === item._id ? (
          <SubCategory
            data={item.children}
            groupCategoryId={item.slug}
            screen={screen}
          />
        ) : null}
      </li>
    );
  }

  return null;
}
