import classNames from "classnames";
import Link from "next/link";

export default function Logo({ white = false }) {
  return (
    <Link href="/">
      <div className={classNames("logo", white ? "white" : "black")}>
        <img src="/images/logo/logo.png" alg="logo" />
        <span className="name">Online Shop</span>
      </div>
    </Link>
  );
}
