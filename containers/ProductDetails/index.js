import Section from "@components/Section";
import ProductBreadCrumb from "./ProductBreadCrumb";
import ProductContent from "./ProductContent";

export default function ProductDetails() {
  return (
    <Section>
      <ProductBreadCrumb />
      <ProductContent />
    </Section>
  );
}