import TopFilter from "@components/Filter/TopFilter";
import LeftFilter from "@components/Filter/LeftFilter";
import Section from "@components/Section";
import { Row, Col, Pagination } from "antd";
import Space from "@components/Space";
import Product from "@components/Product";

import { products } from "../../data/products";

export default function ProductListWithFilter() {
  return (
    <Section>
      <TopFilter />
      <div className="d-flex">
        <div className="d-none d-xl-block me-3">
          <LeftFilter />

          <Space height={30} />

          {/* Ads */}
          <div>
            <img src="/images/others/1.png" alt="banner" />
          </div>
        </div>

        <div className="mt-3">
          <Row gutter={16}>
            {products &&
              products.map((item) => (
                <Col xs={12} md={8} xl={6} key={item.id}>
                  <div className="pb-4 h-100">
                    <Product data={item} />
                  </div>
                </Col>
              ))}
          </Row>

          <div className="text-center">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </Section>
  );
}
