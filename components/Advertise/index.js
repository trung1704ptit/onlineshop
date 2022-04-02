import styles from "../../styles/advertise.module.scss";
import CircleButton from "../Button/CircleButton";

export default function Advertise() {
  return (
    <div className={styles["advertise1"]}>
      <div className={styles["left-content"]}>
        SHOP AND{" "}
        <span className={styles["highlight"]}>SAVE BIG ON HOTTEST</span>{" "}
        PRODUCTS
      </div>
      <div className={styles["right-content"]}>
        <div className={styles["price-and-message"]}>
          <div>
            <b>from</b> <span className={styles["price"]}>$79.00</span>
          </div>
          <div className={styles["message"]}>
            Don't miss this special opportunity today
          </div>
        </div>
        <CircleButton size="small" style="transparent">
          Shop Now
        </CircleButton>
      </div>
    </div>
  );
}
