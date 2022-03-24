import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import { BiFootball } from "react-icons/bi";
import { IoChevronForwardOutline } from "react-icons/io5";
import isEmpty from "lodash/isEmpty";
import styles from "../../styles/category.module.scss";
import { mockList } from "./mock";

export default function CategoryList() {
  return (
    <div className={styles["category-list"]}>
      <ul className="list-style-none">
        {mockList &&
          mockList.map((item) => (
            <li key={item.id}>
              <Link href="#">
                <a>
                  <item.icon size="25" className={styles["icon"]} />
                  {item.name}
                  {!isEmpty(item.sub) ? (
                    <div className={styles["sub-menu"]}>
                      <IoChevronForwardOutline />
                    </div>
                  ) : null}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
