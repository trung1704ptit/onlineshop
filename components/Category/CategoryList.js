import { actionGetCategories } from "@redux/actions/category";
import styles from "@styles/category.module.scss";
import { Skeleton, Space } from "antd";
import axios from "axios";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ screen }) {
  const categories = useSelector((state) => state.category.categories);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(categories)) {
      try {
        setLoading(true);

        axios.get(`${process.env.API_ENDPOINT}/v1/categories`).then((res) => {
          if (res.data) {
            dispatch(actionGetCategories(res.data));
            setLoading(false);
          }
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [categories]);

  return (
    <div className={styles["category-list"]}>
      {loading ? (
        <>
          {Array(4)
            .fill()
            .map(() => (
              <Skeleton active={true} size="large" />
            ))}
        </>
      ) : (
        <ul className="list-style-none">
          {categories?.map((item) => {
            if (item.isShow) {
              return (
                <CategoryItem screen={screen} item={item} key={item._id} />
              );
            }
          })}
        </ul>
      )}
    </div>
  );
}
