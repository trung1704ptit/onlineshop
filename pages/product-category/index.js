import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();
  useEffect(() => {
    router.push("/shop");
  }, []);
  return null;
}
