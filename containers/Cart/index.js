import CartProgress from "@components/Cart/CartProgress";
import Section from "@components/Section";
import Space from "@components/Space";
import CartDetail from "./CartDetail";

export default function Cart() {
  return (
    <Section>
      <Space height={40} />
      <CartProgress />

      <Space height={60} />

      <CartDetail />
      <Space height={60} />
    </Section>
  );
}
