import { actionGetCategories } from "@redux/actions/category";
import styles from "@styles/category.module.scss";
import axios from "axios";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ screen }) {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(categories)) {
      try {
        axios.get(`${process.env.API_ENDPOINT}/v1/categories`).then((res) => {
          if (res.data) {
            dispatch(actionGetCategories(res.data));
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [categories]);

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
