import classNames from "classnames";
import Link from "next/link";

export default function Logo({ white = false }) {
  return (
    <Link href="/">
      <a data-cy="logo-link">
        <div className={classNames("logo", white ? "white" : "black")}>
          <img src="/images/logo/logo.png" alg="logo" />
          <span className="name">Online Shop</span>
        </div>
      </a>
    </Link>
  );
}
