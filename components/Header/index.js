import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const isLargeDevice = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    if (isLargeDevice) {
      return <DesktopHeader />;
    }
    return <MobileHeader />;
  }

  return null;
}
