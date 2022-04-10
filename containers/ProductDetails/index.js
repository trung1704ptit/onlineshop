import Section from "@components/Section";
import ProductBreadCrumb from "./ProductBreadCrumb";
import ProductContent from "./ProductContent";
import ProductDescription from "./ProductDescription";

export default function ProductDetails() {
  return (
    <Section>
      <ProductBreadCrumb />
      <ProductContent />
      <ProductDescription />
    </Section>
  );
}