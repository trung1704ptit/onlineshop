import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Typography } from "antd";

import CircleButton from "../../components/Button/CircleButton";
import styles from "../../styles/category.module.scss";

const { Title } = Typography;

export default function CategoryBannerFullWidth() {
  return (
    <section>
      <div className="container">
        <div
          className={styles["category-banner-full-width"]}
          style={{ backgroundImage: "url(/images/banner-street-style.jpg)" }}
        >
          <div className="pos-rel h-100">
            <div className={styles["content"]}>
              <Title level={2}>Street style has its own rules</Title>
              <p className={styles["sub-title"]}>Retro game your styles!</p>
              <CircleButton>
                Shop Now <MdOutlineKeyboardArrowRight />
              </CircleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
