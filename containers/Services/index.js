import {
  RiTruckLine,
  RiPaypalFill,
  RiCoupon3Line,
  RiGift2Line,
} from "react-icons/ri";
import { BsHandIndexThumb } from "react-icons/bs";
import Section from "../../components/Section";
import styles from "../../styles/services.module.scss";
import classNames from "classnames";

export default function Services() {
  return (
    <Section>
      <div
        className={classNames(styles["service-wrapper"], "d-none d-md-flex")}
      >
        <div className={styles["service-block"]} role="serviceItem">
          <RiTruckLine />
          Fast Delivery
        </div>
        <div className={styles["service-block"]} role="serviceItem">
          <RiPaypalFill />
          Secure Payments
        </div>
        <div className={styles["service-block"]} role="serviceItem">
          <RiCoupon3Line />
          Discount Coupons
        </div>
        <div className={styles["service-block"]} role="serviceItem">
          <RiGift2Line />
          Free Shipping
        </div>
        <div className={styles["service-block"]} role="serviceItem">
          <BsHandIndexThumb />
          Easy 30 Days return
        </div>
      </div>
    </Section>
  );
}
