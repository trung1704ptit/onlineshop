import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
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
        <div className="container">
          <Row>
            <Col xs={24} md={12}>
              <Title level={3}>Sign Up For Newsletter</Title>
              <p>
                Get E-mail updates about our latest shop and{" "}
                <span className={styles["highlight"]}>special offers</span>.
              </p>
            </Col>
            <Col xs={24} md={12}>
              <form className={styles["search-form"]} onSubmit={onSubmit}>
                <input
                  placeholder="Your email address"
                  required
                  role="newsletterInput"
                />
                <button>Sign Up</button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
