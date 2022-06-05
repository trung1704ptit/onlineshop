import styles from "@styles/category.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ screen }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      axios.get(`${process.env.API_ENDPOINT}/v1/categories`).then(res => {
        if (res.data) {
          setCategories(res.data);
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className={styles["category-list"]}>
      <ul className="list-style-none">
        {categories?.map((item) => {
          if (item.isShow) {
            return <CategoryItem screen={screen} item={item} key={item._id} />;
          }
        })}
      </ul>
    </div>
  );
}
