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
      setOpenSub(item.id);
    }
  };

  const handleMouseLeave = () => {
    if (screen !== "mobile") {
      setOpenSub("");
    }
  };

  return (
    <li
      key={item.id}
      className={styles["category-item"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`${PRODUCT_CATEGORY_BASE}/${item.slug}`}>
        <a className={styles["category-link"]} data-cy="category-link">
          <item.icon className={styles["icon"]} />
          {item.name}
          {!isEmpty(item.sub) ? (
            <IoChevronForwardOutline
              className={classNames(
                styles["sub-menu-arrow"],
                "d-none d-sm-block"
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
      </Link>

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
