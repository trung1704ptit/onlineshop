import PropTypes from "prop-types";

export default function CircleButton({
  children,
  size = "large",
  style = "",
  href = "/#",
  onClick,
}) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      className={`btn-circle ${size} ${style}`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

CircleButton.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  style: PropTypes.oneOf(["transparent", ""]),
  href: PropTypes.string,
};
