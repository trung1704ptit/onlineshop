import { roundPrice } from "@utils/helper";
import {
  Card,
  Divider,
  Typography,
  Checkbox,
  Button,
  Radio,
  Space,
} from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
const { Title, Text } = Typography;

export default function OrderForm() {
  const cart = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState(1);

  const { products, total, totalPrice } = cart;

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setPaymentMethod(e.target.value);
  };

  return (
    <Card>
      <Title level={4} className="text-uppercase">
        Your Order
      </Title>
      <Divider />

      <div className="d-flex justify-content-between">
        <Text type="secondary">Product</Text>
        <Text type="secondary">Subtotal</Text>
      </div>

      <Divider />
      {/* Product list */}
      <div>
        {products.map((product) => (
          <div key={product.id} className="d-flex justify-content-between">
            <div className="mb-2">
              {product.title}
              <strong> x {product.cartQty}</strong>
            </div>
            <div>${roundPrice(product.currentPrice, product.cartQty)}</div>
          </div>
        ))}
      </div>

      <Divider />

      <div className="d-flex justify-content-between">
        <Text type="secondary" className="text-uppercase">
          Total
        </Text>
        <Text strong>${totalPrice}</Text>
      </div>

      <Divider />

      <Radio.Group onChange={onChange} value={paymentMethod}>
        <Space direction="vertical">
          <Radio value={1}>Direct bank transfer</Radio>
          <Radio value={2}>Check payments</Radio>
          <Radio value={3}>Cash on delivery</Radio>
        </Space>
      </Radio.Group>

      <p className="mt-4">
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
