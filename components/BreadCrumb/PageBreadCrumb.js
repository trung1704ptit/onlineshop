import Section from "@components/Section";
import { Breadcrumb } from "antd";

export default function PageBreadCrumb({ pageName }) {
    return (
        <Section>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{pageName}</Breadcrumb.Item>
            </Breadcrumb>
        </Section>
    )
}