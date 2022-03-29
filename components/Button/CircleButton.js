import Link from "next/link";

export default function CircleButton({ children, size }) {
  let padding = '1.3em 2em'
  if (size == 'small') {
    padding = '1em 1.5em'
  } else if (size == 'medium') {
    padding = '0.8em 1.3em'
  }
  
  return (
    <Link href="#">
      <a className="btn-circle" style={{ padding }}>
        {children}
      </a>
    </Link>
  );
}
