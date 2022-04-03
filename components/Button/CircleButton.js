import Link from "next/link";
import PropTypes from "prop-types";

export default function CircleButton({
  children,
  size = "large",
  style = "",
  href = "/#",
}) {
  return (
    <Link href={href}>
      <a className={`btn-circle ${size} ${style}`}>{children}</a>
    </Link>
  );
}

CircleButton.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  style: PropTypes.oneOf(["transparent", ""]),
  href: PropTypes.string,
};
