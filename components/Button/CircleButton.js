import Link from "next/link";

export default function CircleButton({ children }) {
  return (
    <Link href="#">
      <a className="btn-circle">{children}</a>
    </Link>
  );
}
