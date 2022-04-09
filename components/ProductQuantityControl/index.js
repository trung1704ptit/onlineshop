import styles from "@styles/product.module.scss";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ProductQuantityControl({ quantity }) {
  const [value, setValue] = useState(quantity);

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDown = () => {
    if (value - 1 >= 0) {
      setValue(value - 1);
    }
  };

  const handlePlus = () => {
    setValue(value + 1);
  };

  return (
    <div className={styles["product-quantity-control"]}>
      <AiOutlineMinus onClick={handleDown} />
      <input type="number" value={value} onChange={handleChange} min="0" />
      <AiOutlinePlus onClick={handlePlus} />
    </div>
  );
}
