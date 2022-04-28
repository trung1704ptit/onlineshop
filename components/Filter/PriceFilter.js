import { useState } from "react";
import styles from "@styles/filter.module.scss";
import { Divider, Slider } from "antd";
import cx from "classnames";
import { useRouter } from "next/router";

export default function PriceFilter() {
  const [state, setState] = useState([0, 5000]);
  const router = useRouter();

  const onAfterChange = (value) => {
    setState(value);
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      minPrice: value[0],
      maxPrice: value[1],
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  };

  return (
    <div className={cx(styles["price-slider"], styles["filter-item"])}>
      <h6 className={styles["title"]}>Filter by price</h6>

      <Slider
        range
        defaultValue={[state[0], state[1]]}
        step={1}
        className="m-0"
        min={0}
        max={10000}
        onAfterChange={onAfterChange}
      />

      <div className={styles["text-price"]}>
        <span>
          <span className={styles["text"]}>Price: </span>${state[0]} - $
          {state[1]}
        </span>
      </div>
      <Divider />
    </div>
  );
}
