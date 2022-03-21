// import Link from "next/link";
import dynamic from "next/dynamic";
import { useMediaQuery } from 'react-responsive'


const DesktopHeader = dynamic(() => import("./DesktopHeader"));
const MobileHeader = dynamic(() => import("./MobileHeader"));

export default function Header() {
  const isLargeDevice = useMediaQuery({
    query: '(min-width: 992px)'
  })
  if (isLargeDevice) {
    return <DesktopHeader />
  }
  return <MobileHeader />;
}
