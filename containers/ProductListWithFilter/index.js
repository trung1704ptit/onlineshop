import TopFilter from "@components/Filter/TopFilter"
import LeftFilter from "@components/Filter/LeftFilter"
import Section from "@components/Section";

export default function ProductListWithFilter() {
  return (
    <Section>
      <TopFilter />
      <div>
        <LeftFilter />
        <div>Product List</div>
      </div>
    </Section>
  );
}