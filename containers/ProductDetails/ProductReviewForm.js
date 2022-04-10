import { Form, Input, Button, Checkbox, Rate } from "antd";

const { TextArea } = Input;

export default function ProductReviewForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <div>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Your rating"
            name="rate"
            rules={[{ required: true, message: "Please input your Rating!" }]}
          >
            <Rate allowHalf style={{ fontSize: 15 }} />
          </Form.Item>

          <Form.Item
            label="Your review"
            name="review"
            rules={[{ required: true, message: "Please input your review!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              Save my name, email, and website in this browser for the next time
              I comment.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
