import { Spin } from "antd";

export default function Loading({
  height = "100px",
  className = "",
  size = "medium",
  tip = "",
}) {
  return (
    <div
      className={`loading-wrapper d-flex justify-content-center align-items-center ${className}`}
      style={{ height }}
    >
      <Spin size={size} tip={tip} />
    </div>
  );
}
