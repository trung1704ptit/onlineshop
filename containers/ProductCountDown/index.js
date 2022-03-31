import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CircleButton from "../../components/Button/CircleButton";
import Section from "../../components/Section";
import styles from "../../styles/product-countdown.module.scss";
import CountDown from "../../components/CountDown";

export default function ProductCountDown() {
  return (
    <Section>
      <Container>
        <div className={styles["product-countdown"]}>
          <div className="d-flex flex-wrap">
            <Col sx={12} md={6}>
              <h2 className={styles["title"]}>Don't just play game</h2>
              <p className={styles["sub-title"]}>Explore Alienware and Dell gaming system</p>
              <div className={styles["countdown"]}>
                <CountDown />
              </div>
              <div className="mb-3">
                <CircleButton style="transparent" size="medium">
                  Buy Laptop Now <MdOutlineKeyboardArrowRight />
                </CircleButton>
              </div>
            </Col>
            <Col sx={12} md={6}>
              <img src="/images/products/laptop.jpg" />
            </Col>
          </div>
        </div>
      </Container>
    </Section>
  );
}
