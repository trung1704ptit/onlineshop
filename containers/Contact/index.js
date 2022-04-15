import Section from "@components/Section";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
  Typography,
  Card,
  Row,
  Col,
} from "antd";
import { MdLocationOn, MdEmail, MdPhoneInTalk } from "react-icons/md";

const { Title } = Typography;

export default function Contact() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Section>
      <div>
        <div className="text-center pt-5 pb-3">
          <Title level={2} className="text-uppercase">
            Get In Touch
          </Title>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
            veniam vel.
          </p>
          <div className="mt-5 mb-5">
            <Row gutter={32}>
              <Col xs={24} lg={8} className="mb-3">
                <Card className="rounded-3">
                  <MdLocationOn size={36} />
                  <Title level={5}>102 Street 2714 Donovan</Title>
                  <p>Lorem ipsum dolar site amet discont</p>
                </Card>
              </Col>
              <Col xs={24} lg={8} className="mb-3">
                <Card className="rounded-3">
                  {" "}
                  <MdPhoneInTalk size={36} />
                  <Title level={5}>+02 1234 567 88</Title>
                  <p>Lorem ipsum dolar site amet discont</p>
                </Card>
              </Col>
              <Col xs={24} lg={8} className="mb-3">
                <Card className="rounded-3">
                  <MdEmail size={36} />
                  <Title level={5}>info@example.com</Title>
                  <p>Lorem ipsum dolar site amet discont</p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <Card className="p-0 p-lg-5">
          <div style={{ maxWidth: 800 }} className="m-auto">
            <div className="text-center">
              <Title level={2} className="text-uppercase">
                Send Us
              </Title>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quaerat unde quam dolor culpa veritatis inventore, aut
                commodi eum veniam vel.
              </p>
            </div>

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
              <Row gutter={16}>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Your name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Your email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  {
                    required: true,
                    message: "Please input subject!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Your Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please input message!",
                  },
                ]}
              >
                <Input.TextArea size="large" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  shape="round"
                >
                  Send message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </Section>
  );
}
