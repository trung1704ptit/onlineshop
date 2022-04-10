import Section from "@components/Section";
import { Breadcrumb } from "antd";
import Link from "next/link";

export default function ProductBreadCrumb() {
  return (
    <div className="pt-3 pb-3">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="/">
            <a>Samsung</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Samsung Galaxy S22 Ultra</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
