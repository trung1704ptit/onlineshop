import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ImArrowRight2 />
    </div>
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ImArrowLeft2 />
    </div>
  );
}

export function roundPrice(price, qty) {
  return (price * qty).toFixed(2);
}