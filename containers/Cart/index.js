import CartProgress from "@components/Cart/CartProgress";
import Section from "@components/Section";
import BlankSpace from "@components/BlankSpace";
import CartDetail from "./CartDetail";

export default function Cart() {
  return (
    <Section>
      <BlankSpace height={40} />
      <CartProgress />

      <BlankSpace height={60} />

      <CartDetail />
      <BlankSpace height={60} />
    </Section>
  );
}
