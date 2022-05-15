import styles from "@styles/category.module.scss";
import { categories } from "data/categories";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ screen }) {
  return (
    <div className={styles["category-list"]}>
      <ul className="list-style-none">
        {categories?.map((item) => {
          if (item.isShow) {
            return <CategoryItem screen={screen} item={item} />;
          }
        })}
      </ul>
    </div>
  );
}
