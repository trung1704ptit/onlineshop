import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { Dropdown, Menu } from "antd";
import cx from "classnames";
import styles from "@styles/header.module.scss";

export default function MyAccount() {
  return (
    <div className={styles["header-module"]}>
      <Dropdown overlay={AccountMenu}>
        <div className={cx(styles["my-account"], "pos-rel")}>
          <span>My Account</span>
          <RiArrowDownSLine className={styles["downdown-icon"]} />
        </div>
      </Dropdown>
    </div>
  );
}

const AccountMenu = () => (
  <Menu style={{ width: 180 }}>
    <Menu.Item>
      <Link href="/login">
        <a rel="noopener noreferrer">Login</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/register">
        <a rel="noopener noreferrer">Register</a>
      </Link>
    </Menu.Item>
  </Menu>
);
