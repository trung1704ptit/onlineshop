import TopFilter from "@components/Filter/TopFilter";
import LeftFilter from "@components/Filter/LeftFilter";
import Section from "@components/Section";
import { Row, Col, Divider } from "antd";
import styles from "@styles/shop.module.scss";

import { products } from "../../data/products";
import Product from "@components/Product";

export default function ProductListWithFilter() {
  return (
    <Section>
      <TopFilter />
      <div className={styles["wrapper"]}>
        <LeftFilter />
        <div className={styles['products']}>
          <Row gutter={16}>
            {products &&
              products.map((item) => (
                <Col xs={12} sm={8} md={6} key={item.id}>
                  <div className="pb-4 h-100">
                    <Product data={item} />
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </Section>
  );
}
