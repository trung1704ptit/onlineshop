import { Card, Divider, Typography, Checkbox, Button } from "antd";

const { Title, Text } = Typography;

export default function OrderForm() {
  return (
    <Card>
      <Title level={4} className="text-uppercase">
        Your Order
      </Title>
      <Divider />
      <p>
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our <a href="/privacy-policy">privacy policy</a>.
      </p>

      <div>
        <Checkbox>
          I have read and agree to the website
          <a href="/term-and-conditions"> terms and conditions</a>
        </Checkbox>
      </div>
      <Button className="w-100 mt-3" type="primary" size="large">
        Place Order
      </Button>
    </Card>
  );
}
