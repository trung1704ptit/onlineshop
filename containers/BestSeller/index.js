import Section from "@components/Section";
import { Row, Col } from "antd";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Typography } from "antd";

import Product from "components/Product";
import { products } from "data/products";

const { Title } = Typography;

const randomItems = products.slice(0, 18);

export default function BestSeller() {
  return (
    <Section>
      <Title level={2}>Best Seller</Title>

      <Row gutter={16}>
        {randomItems &&
          randomItems.map((item) => (
            <Col xs={12} sm={8} md={6} xl={4} key={item.id}>
              <div className="pb-4 h-100">
                <Product data={item} />
              </div>
            </Col>
          ))}
      </Row>

      <div className="text-center mt-3 mb-2">
        <Link href="/shop">
          <a className="link-animated text-center d-inline-flex align-items-center">
            See more <MdOutlineKeyboardArrowDown />
          </a>
        </Link>
      </div>
    </Section>
  );
}
