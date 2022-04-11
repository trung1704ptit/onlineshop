import Link from "next/link";
import PropTypes from "prop-types";

export default function CircleButton({
  children,
  size = "large",
  href = "/#",
  onClick,
  className = "",
}) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link href={href}>
      <a
        className={`btn-circle ${size} ${className}`}
        href={href}
        onClick={handleClick}
      >
        {children}
      </a>
    </Link>
  );
}

CircleButton.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  className: PropTypes.string,
  href: PropTypes.string,
};
