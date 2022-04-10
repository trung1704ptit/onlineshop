import { Button, Col, Row, Tag, Typography } from "antd";
import styles from "@styles/product.module.scss";
import { Space, Divider, Rate } from "antd";
import ProductGallery from "./ProductGallery";
import ProductQuantityControl from "@components/ProductQuantityControl";
import { BsLinkedin, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import ProductAlertMessage from "./ProductAlertMessage";

const { Title, Text } = Typography;

export default function ProductBreadCrumb() {
  return (
    <div className={styles["product-detail"]}>
      <Title level={3}>Angie's Boomchickapop Sweet & Salty Kettle Corn</Title>

      <div className={styles["product-meta"]}>
        <Space split={<Divider type="vertical" />}>
          <div className={styles["product-brand"]}>
            <Text type="secondary">Brands: </Text>Frito Lay, Oreo, Welch's
          </div>
          <div className={styles["product-rating"]}>
            <Rate
              allowHalf
              defaultValue={4}
              disabled={true}
              style={{ fontSize: 15 }}
            />
            <Text type="secondary" className="ms-2">
              1 Review
            </Text>
          </div>
          <div className={styles["product-sku"]}>
            <Text type="secondary">SKU: </Text> BE4CURT
          </div>
        </Space>
      </div>
      <div className="mt-3 mb-3">
        <Row gutter={48}>
          <Col xs={24} lg={10}>
            <ProductGallery />
          </Col>
          <Col xs={24} lg={7}>
            <div className="mb-2 mt-md-0 mt-4">
              <span className="fs-4 text-decoration-line-through">
                <Text type="secondary">$4.29</Text>
              </span>
              <span className="highlight fs-2">$3.29</span>
            </div>

            <Tag color="cyan" className="text-uppercase rounded-pill mb-3">
              In stock
            </Tag>

            <p className="mb-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="d-flex">
              <ProductQuantityControl
                quantity={1}
                onUpdateCart={(newQty) => console.log(newQty)}
              />
              <Button
                size="large"
                // disabled={loading}
                // onClick={handleAddCart}
                shape="round"
                // loading={loading}
                data-cy="add-to-cart"
                type="primary"
                className="ms-3 w-100"
              >
                Add to cart
              </Button>
            </div>

            <Divider />

            <div className="pb-4">
              <Text type="secondary">Category: Biscuits & Snacks</Text>
            </div>

            <div>
              <Tag
                icon={<BsTwitter />}
                color="#55acee"
                className="d-inline-flex align-items-center"
              >
                Twitter
              </Tag>
              <Tag
                icon={<BsYoutube />}
                color="#cd201f"
                className="d-inline-flex align-items-center"
              >
                Youtube
              </Tag>
              <Tag
                icon={<BsFacebook />}
                color="#3b5999"
                className="d-inline-flex align-items-center"
              >
                Facebook
              </Tag>
              <Tag
                icon={<BsLinkedin />}
                color="#55acee"
                className="d-inline-flex align-items-center"
              >
                LinkedIn
              </Tag>
            </div>
          </Col>

          <Col xs={24} lg={7}>
            <ProductAlertMessage />
          </Col>
        </Row>
      </div>
    </div>
  );
}
