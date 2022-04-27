import { FILTER } from "@utils/constants";
import styles from "@styles/filter.module.scss";
import { Checkbox } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ColorFilter() {
  const router = useRouter();
  const [value, setValue] = useState([]);

  function onChange(checkedValues) {
    let colorList = "*";

    if (checkedValues.length > 0) {
      colorList = checkedValues;
    }
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      colors: colorList,
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  }

  useEffect(() => {
    if (router.query) {
      let colors = router.query.colors;
      if (colors && colors !== "*") {
        colors = colors.split(",");
        setValue(colors);
      } else {
        setValue([]);
      }
    }
  }, [router]);

  return (
    <div className={styles["color-options"]}>
      <Checkbox.Group
        options={FILTER.colors}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
