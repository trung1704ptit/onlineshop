import TopFilter from "@components/Filter/TopFilter";
import LeftFilter from "@components/Filter/LeftFilter";
import Section from "@components/Section";
import { Row, Col } from "antd";
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
                <Col xs={24} sm={12} xl={6} key={item.id}>
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
