export default function Collapse({ children, active }) {
  return (
    <div
      className={`collapse-full-screen dropdown-fade-onhover module-dropdown ${
        active ? "active" : ""
      }`}
    >
      {children}
    </div>
  );
}
