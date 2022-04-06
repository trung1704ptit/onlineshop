import TopFilter from "@components/Filter/TopFilter";
import LeftFilter from "@components/Filter/LeftFilter";
import Section from "@components/Section";
import { Row, Col, Divider } from "antd";
import styles from "@styles/shop.module.scss";
import Space from '@components/Space';

import { products } from "../../data/products";
import Product from "@components/Product";
import classNames from "classnames";
import FilterOnMobile from "@components/Filter/FilterOnMobile";

export default function ProductListWithFilter() {
  return (
    <Section>
      <TopFilter />
      <div className={styles["wrapper"]}>
        <div className="d-none d-xl-block me-3">
          <LeftFilter />

          <Space height={30} />

          {/* Ads */}
          <div className={styles["filter-item"]}>
            <img src="/images/others/1.png" alt="banner" />
          </div>
        </div>

        <div className={classNames(styles["products"], "mt-3")}>
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
        </div>
      </div>
    </Section>
  );
}
