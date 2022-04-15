import Section from "@components/Section";
import { Form, Input, Button, Checkbox, Divider, Typography, Card } from "antd";

const { Title } = Typography;

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Section>
      <Card className="mt-5 mb-5 m-auto" style={{ maxWidth: 600 }}>
        <Title level={3} className="text-uppercase">Login</Title>
        <Divider />
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" shape="round">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Section>
  );
}
