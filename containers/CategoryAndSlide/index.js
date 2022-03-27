import { useMediaQuery } from "react-responsive";

import Section from "../../components/Section";
import SlideCarousel from "../../components/Carousel";
import CategoryList from "../../components/Category/CategoryList";


export default function CategoryAndSlide() {
  const isLargeDevice = useMediaQuery({
    query: "(min-width: 992px)",
  });

  if (isLargeDevice) {
    return (
      <Section>
        <div className="d-flex align-item-stretch">
          <CategoryList />
          <SlideCarousel />
        </div>
      </Section>
    );
  }
  return <SlideCarousel />;
}
