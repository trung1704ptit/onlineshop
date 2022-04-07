import { useState } from "react";
import { setInfo } from "@redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";

export default function Test(props) {
  const [newName, setName] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const handleClick = () => {
    dispatch(setInfo(newName));
  };

  return (
    <div>
      <p>Enter a Name {products.length}:</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => handleClick()}>Submit</button>
    </div>
  );
}
