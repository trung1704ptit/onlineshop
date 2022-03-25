import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { RiTruckLine, RiPaypalFill, RiCoupon3Line, RiGift2Line } from 'react-icons/ri';
import { BsHandIndexThumb } from "react-icons/bs";
import Section from "../../components/Section";
import styles from '../../styles/services.module.scss';

export default function Services() {
  const isLargeDevice = useMediaQuery({
    query: "(min-width: 992px)",
  });

  if (isLargeDevice) {
    return (
      <Section className="mt-10">
        <div className={styles["service-wrapper"]}>
          <div className={styles["service-block"]}>
            <RiTruckLine />
            Fast Delivery
          </div>
          <div className={styles["service-block"]}>
            <RiPaypalFill />
            Secure Payments
          </div>
          <div className={styles["service-block"]}>
            <RiCoupon3Line />
            Discount Coupons
          </div>
          <div className={styles["service-block"]}>
            <RiGift2Line />
            Free Shipping
          </div>
          <div className={styles["service-block"]}>
            <BsHandIndexThumb />
            Easy 30 Days return
          </div>
        </div>
      </Section>
    );
  }

  return null;
}
