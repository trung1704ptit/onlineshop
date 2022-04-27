import { useState } from "react";
import styles from "@styles/filter.module.scss";
import { Button, Divider, Slider } from "antd";
import cx from "classnames";
import { useRouter } from "next/router";

export default function PriceFilter() {
  const [state, setState] = useState([0, 5000]);
  const router =  useRouter();

  function onChange(value) {
    setState(value);
  }

  const handleSubmit = () => {
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      minPrice: state[0],
      maxPrice: state[1]
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  }

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
        onChange={onChange}
      />

      <div className={styles["text-price"]}>
        <span>
          <span className={styles["text"]}>Price: </span>${state[0]} - $
          {state[1]}
        </span>
        <Button type="round" onClick={handleSubmit}>Filter</Button>
      </div>
      <Divider />
    </div>
  );
}
