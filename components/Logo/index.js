import classNames from "classnames";

export default function Logo({ white = false }) {
  return (
    <div className={classNames("logo", white ? "white" : "black")}>
      <img src="/images/logo/logo.png" alg="logo" />
      <span className="name">Online Shop</span>
    </div>
  );
}
