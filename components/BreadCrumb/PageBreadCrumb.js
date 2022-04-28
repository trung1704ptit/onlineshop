import Section from "@components/Section";
import { Breadcrumb } from "antd";

export default function PageBreadCrumb({ pageName }) {
  return (
    <Section>
      <div className="pt-3 pb-3">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{pageName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Section>
  );
}
