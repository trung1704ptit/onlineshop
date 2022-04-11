import { Col, Typography } from "antd";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CircleButton from "@components/Button/CircleButton";
import Section from "@components/Section";
import styles from "@styles/product.module.scss";
import CountDown from "@components/CountDown";

const { Title } = Typography;

export default function ProductCountDown() {
  return (
    <Section>
      <div className={styles["product-countdown"]}>
        <div className="d-flex flex-wrap">
          <Col sx={24} md={12}>
            <Title level={2} className={styles["title"]}>Don't just play game</Title>
            <p className={styles["sub-title"]}>
              Explore Alienware and Dell gaming system
            </p>
            <div className={styles["countdown"]}>
              <CountDown />
            </div>
            <div className="mb-3">
              <CircleButton className="transparent" size="medium">
                Buy Laptop Now <MdOutlineKeyboardArrowRight />
              </CircleButton>
            </div>
          </Col>
          <Col sx={24} md={12}>
            <img src="/images/products/laptop.jpg" />
          </Col>
        </div>
      </div>
    </Section>
  );
}
