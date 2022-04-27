import { FILTER } from "@utils/constants";
import styles from "@styles/filter.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";
import { useRouter } from "next/router";
import {
  filterProductByBrandId,
  filterProductByCategoryId,
  filterProductByGroupCategoryId,
} from "@utils/helper";
import { Checkbox } from "antd";
import { categories } from "data/categories";
import { products } from "data/products";

export default function ColorOptions() {
  const [activeList, setActiveList] = useState([]);
  const [colors, setColors] = useState([]);
  const router = useRouter();

  const handleClick = (color) => {
    let newList = [];

    if (activeList.includes(color)) {
      newList = activeList.filter((item) => item !== color);
    } else {
      newList = [...activeList, color];
    }

    setActiveList(newList);
  };

  const isActive = (color) => {
    return activeList.includes(color);
  };

  useEffect(() => {
    const { groupCategoryId, brandId, categoryId } = router.query;

    let colors = [];
    let filterProducts = [];

    if (categoryId) {
      filterProducts = filterProductByCategoryId(
        categoryId,
        categories,
        products
      );
    } else if (brandId) {
      filterProducts = filterProductByBrandId(brandId, categories, products);
    } else if (groupCategoryId) {
      filterProducts = filterProductByBrandId(
        groupCategoryId,
        categories,
        products
      );
    }

    for (let item of filterProducts) {
      const list = item.colors.map((c) => c.name);
      colors = [...colors, ...list];
    }
    colors = [...new Set(colors)].map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1)
    );
    setColors(colors);
  }, [router]);

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  return (
    <div className={styles["color-options"]}>
      <Checkbox.Group options={colors} onChange={onChange} />
    </div>
  );
}
