import CartProgress from "@components/Cart/CartProgress";
import Section from "@components/Section";
import Space from "@components/Space";
import BillingDetails from "./BillingDetails";
import CouponForm from "./CouponForm";

export default function Checkout() {
  return (
    <Section>
      <Space height={40} />
      <CartProgress current={1} />

      <Space height={30} />
      <CouponForm />

      <Space height={30} />
      <BillingDetails />
    </Section>
  );
}
