import styles from "@styles/product.module.scss";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ProductQuantityControl({ quantity, onUpdateCart }) {
  const [value, setValue] = useState(quantity);

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  const handleChange = (e) => {
    setValue(e.target.value);
    onUpdateCart(e.target.value)
  };

  const onHandleMinus = () => {
    if (value - 1 >= 0) {
      setValue(value - 1);
      onUpdateCart(value - 1);
    }
  };

  const handlePlus = () => {
    setValue(value + 1);
    onUpdateCart(value + 1);
  };

  return (
    <div className={styles["product-quantity-control"]}>
      <AiOutlineMinus onClick={onHandleMinus} />
      <input type="number" value={value} onChange={handleChange} min="0" />
      <AiOutlinePlus onClick={handlePlus} />
    </div>
  );
}
