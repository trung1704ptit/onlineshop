import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/newsletter.module.scss";

export default function Newsletter() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section data-test="newsletterComponent">
      <div
        className={styles["newsletter"]}
        style={{ backgroundImage: "url(/images/pattern-2.png)" }}
      >
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>Sign Up For Newsletter</h2>
              <p>
                Get E-mail updates about our latest shop and{" "}
                <span className={styles["highlight"]}>special offers</span>.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <form className={styles["search-form"]} onSubmit={onSubmit}>
                <input placeholder="Your email address" required role="newsletterInput"/>
                <button>Sign Up</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
