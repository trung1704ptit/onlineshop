import { Container } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Col, Row } from 'react-bootstrap';
import CircleButton from "../../components/Button/CircleButton";
import styles from "../../styles/category.module.scss";

export default function CategoryBannerFullWidth() {
  return (
    <section>
      <div
        className={styles["category-banner-full-width"]}
        style={{ backgroundImage: "url(/images/banner-street-style.jpg)" }}
      >
        <Container className="pos-rel h-100">
          <div className={styles["content"]}>
            <h2>Street style has its own rules</h2>
            <p className={styles["sub-title"]}>Retro game your styles!</p>
            <CircleButton>
              Shop Now <MdOutlineKeyboardArrowRight />
            </CircleButton>
          </div>
        </Container>
      </div>
    </section>
  );
}
