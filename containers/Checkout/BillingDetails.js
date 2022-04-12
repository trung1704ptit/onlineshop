import { Card, Col, Divider, Row, Typography } from "antd";
import BillingForm from "./BillingForm";
import OrderForm from "./OrderForm";

const { Title, Text } = Typography;

export default function BillingDetails() {
  return (
    <div>
      <Row gutter={48}>
        <Col xs={24} lg={14}>
          <Card>
            <Title level={4} className="text-uppercase">
              Billing Details
            </Title>
            <Divider />

            <BillingForm />
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <OrderForm />
        </Col>
      </Row>
    </div>
  );
}