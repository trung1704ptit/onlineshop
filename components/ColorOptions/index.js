import { FILTER } from "@utils/constants";
import styles from "@styles/filter.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";

const { colors } = FILTER;

export default function ColorOptions() {
  const [activeList, setActiveList] = useState([]);

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

  return (
    <div className={styles["color-options"]}>
      {colors.map((item) => (
        <div
          className={classNames(
            styles["color-item"],
            isActive(item) ? "active" : ""
          )}
          onClick={() => handleClick(item)}
          key={item}
        >
          <div
            style={{ background: item }}
            className={styles["color"]}
          >
            {isActive(item) ? <BsCheckLg /> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
