import { useMediaQuery } from "react-responsive";

import Section from "../../components/Section";
import HeadCarousel from "../../components/HeadCarousel";
import CategoryList from "../../components/Category/CategoryList";
import { useEffect, useState } from "react";

export default function CategoryAndSlide() {
  const isLargeDevice = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    if (isLargeDevice) {
      return (
        <Section>
          <div className="d-flex align-item-stretch">
            <CategoryList />
            <HeadCarousel />
          </div>
        </Section>
      );
    }

    return (
      <Section>
        <HeadCarousel />
      </Section>
    );
  }

  return null;
}
