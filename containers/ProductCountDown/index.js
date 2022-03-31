import { Col, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CircleButton from "../../components/Button/CircleButton";
import Section from "../../components/Section";
import styles from "../../styles/product-countdown.module.scss";
import CountDown from "../../components/CountDown";

export default function ProductCountDown() {
  return (
    <Section>
      <div className={styles["product-countdown"]}>
        <Row>
          <Col sx={12} md={6}>
            <h2 className={styles["title"]}>Simple. Powerful. Chrome OS.</h2>
            <p className={styles["sub-title"]}>Starting from $299.</p>
            <div className={styles["countdown"]}>
              <CountDown />
            </div>
            <CircleButton style="transparent" size="medium">
              Buy Laptop Now <MdOutlineKeyboardArrowRight />
            </CircleButton>
          </Col>
          <Col sx={12} md={6}>
            <img src="/images/products/laptop.jpg" />
          </Col>
        </Row>
      </div>
    </Section>
  );
}
