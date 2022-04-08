import Section from "@components/Section";
import { Card, Steps } from "antd";

const { Step } = Steps;

export default function CartProgress({ current = 0 }) {
  return (
    <Section>
      <Card>
        <Steps size="medium" current={current}>
          <Step title="Shopping Cart" />
          <Step title="Payment and Delivery options" />
          <Step title="Order received" />
        </Steps>
      </Card>
    </Section>
  );
}
