import { Collapse } from "antd";
import { BsTagFill } from "react-icons/bs";
import { Form, Input, Button, Checkbox } from "antd";

const { Panel } = Collapse;

export default function CouponForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Collapse expandIcon={({ isActive }) => <BsTagFill size={18} />}>
      <Panel header="Have a coupon? Click here to enter your code" key="2">
        <p>If you have a coupon code, please apply it below.</p>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="coupon"
            rules={[{ required: true, message: "Please input Coupon!" }]}
            wrapperCol={{
              span: 8,
            }}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 8,
            }}
          >
            <Button type="primary" htmlType="submit" size="large">
              Apply coupon
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );
}
