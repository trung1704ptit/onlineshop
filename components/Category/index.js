import { Dropdown } from "antd";
import { FaChevronDown, FaBars } from "react-icons/fa";
import styles from "@styles/header.module.scss";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (router.pathname == "/") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [router]);

  return (
    <Dropdown
      overlay={<CategoryList screen="desktop" />}
      disabled={disabled}
      trigger={["hover", "click"]}
    >
      <div className={styles["toggle-categories"]}>
        <FaBars className="me-2" /> All Categories
        <FaChevronDown className={styles["arrow-down"]} />
      </div>
    </Dropdown>
  );
}
