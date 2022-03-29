import Link from "next/link";

export default function CircleButton({ children, size="large", style = "" }) {
  return (
    <Link href="#">
      <a className={`btn-circle ${size} ${style}`}>{children}</a>
    </Link>
  );
}
