import Product from "@components/Product";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { products } from "data/products";

const productsRelated = products.slice(0, 6);

export default function ProductRelated() {
  return (
    <div className="mt-4">
      <Title level={3}>Related Products</Title>
      <Row gutter={8}>
        {productsRelated.map((product) => (
          <Col xs={24} sm={12} md={8} xl={4} className="mb-3" key={product.id}>
            <Product data={product} className="bg-white" />
          </Col>
        ))}
      </Row>
    </div>
  );
}
