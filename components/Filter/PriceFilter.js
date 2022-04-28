import { useEffect, useState } from "react";
import styles from "@styles/filter.module.scss";
import { Divider, Slider } from "antd";
import cx from "classnames";
import { useRouter } from "next/router";

const initialPrice = {
  min: 0,
  max: 5000,
};

export default function PriceFilter() {
  const [state, setState] = useState([initialPrice.min, initialPrice.max]);

  const router = useRouter();

  const onChange = (value) => {
    setState(value);
  };

  const onAfterChange = (value) => {
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

  useEffect(() => {
    const { query } = router;
    if (query && (query.minPrice || query.maxPrice)) {
      const { minPrice, maxPrice } = query;
      setState([
        parseFloat(minPrice) || initialPrice.min,
        parseFloat(maxPrice) || initialPrice.max,
      ]);
    }
  }, [router]);

  return (
    <div className={cx(styles["price-slider"], styles["filter-item"])}>
      <h6 className={styles["title"]}>Filter by price</h6>

      <Slider
        range
        value={[state[0], state[1]]}
        step={1}
        className="m-0"
        min={0}
        max={10000}
        onAfterChange={onAfterChange}
        onChange={onChange}
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
