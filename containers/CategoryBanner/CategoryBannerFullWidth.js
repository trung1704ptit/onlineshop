import { Container } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import CircleButton from "../../components/Button/CircleButton";
import styles from "../../styles/category.module.scss";

export default function CategoryBannerFullWidth() {
  return (
    <section>
      <Container>
        <div
          className={styles["category-banner-full-width"]}
          style={{ backgroundImage: "url(/images/banner-street-style.jpg)" }}
        >
          <div className="pos-rel h-100">
            <div className={styles["content"]}>
              <h2>Street style has its own rules</h2>
              <p className={styles["sub-title"]}>Retro game your styles!</p>
              <CircleButton>
                Shop Now <MdOutlineKeyboardArrowRight />
              </CircleButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
