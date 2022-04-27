import TopFilter from "@components/Filter/TopFilter";
import LeftFilter from "@components/Filter/LeftFilter";
import Section from "@components/Section";
import BlankSpace from "@components/BlankSpace";
import ProductFilter from './ProductFilter'

export default function ProductListWithFilter({ noCategory }) {
  return (
    <Section>
      <TopFilter />
      <div className="d-flex">
        <div className="d-none d-xl-block me-3">
          <LeftFilter noCategory={noCategory} />

          <BlankSpace height={30} />

          {/* Ads */}
          <div>
            <img
              src="/images/others/sidebar-banner.gif"
              alt="banner"
              width={280}
            />
          </div>
        </div>

        <ProductFilter />
      </div>
    </Section>
  );
}
