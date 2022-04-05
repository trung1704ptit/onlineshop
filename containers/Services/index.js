import { useMediaQuery } from "react-responsive";
import {
  RiTruckLine,
  RiPaypalFill,
  RiCoupon3Line,
  RiGift2Line,
} from "react-icons/ri";
import { BsHandIndexThumb } from "react-icons/bs";
import Section from "../../components/Section";
import styles from "../../styles/services.module.scss";
import { useEffect, useState } from "react";

export default function Services() {
  const isLargeDevice = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true), [];
  });

  if (mounted && isLargeDevice) {
    return (
      <Section>
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
