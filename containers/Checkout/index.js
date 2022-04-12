import CircleButton from "@components/Button/CircleButton";
import CartProgress from "@components/Cart/CartProgress";
import Section from "@components/Section";
import BlankSpace from "@components/BlankSpace";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { useSelector } from "react-redux";
import { MdKeyboardBackspace } from 'react-icons/md';
import BillingDetails from "./BillingDetails";
import CouponForm from "@components/CouponForm";

export default function Checkout() {
  const total = useSelector(state => state.cart.total)
  if (total === 0) {
    return (
      <Section>
        <Card className="mt-5 mb-5">
          Checkout is not available whilst your basket is empty.
        </Card>
        <div className="text-center">
          <Title level={4}>Your basket is currently empty.</Title>
          <CircleButton className="black" href="/shop">
            <MdKeyboardBackspace size={24} className="me-2"/> Back To Shop
          </CircleButton>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <BlankSpace height={40} />
      <CartProgress current={1} />

      <BlankSpace height={30} />
      <CouponForm />

      <BlankSpace height={30} />
      <BillingDetails />
    </Section>
  );
}
