import { Form, Input, Select, Divider, Row, Col } from "antd";
const { Option } = Select;
const { TextArea } = Input;

const BillingForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Company name (optional)" name="company">
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Country" name="country">
        <Select
          showSearch
          size="large"
          placeholder="Select a Country"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          autoComplete={false}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="tom">America</Option>
          <Option value="jack">Viet Nam</Option>
          <Option value="lucy">Australia</Option>
          <Option value="tom">Singapore</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Street address"
        name="streetAddress"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Town / City"
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your Town/City!",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Form.Item label="State" name="state">
            <Select
              showSearch
              size="large"
              placeholder="Select a State"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">New York</Option>
              <Option value="lucy">Ohio</Option>
              <Option value="tom">Washington</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item
            label="ZIP"
            name="zip"
            rules={[
              {
                required: true,
                message: "Please input your ZIP!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your Phone!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your Email address!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      <Form.Item label="Order notes (optional)" name="notes">
        <TextArea size="large" />
      </Form.Item>
    </Form>
  );
};

export default BillingForm;
