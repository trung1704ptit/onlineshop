import { useMediaQuery } from "react-responsive";

import Section from "../../components/Section";
import HomeCarousel from "../../components/HomeCarousel";
import CategoryList from "../../components/Category/CategoryList";
import { useEffect, useState } from "react";

export default function CategoryListAndProductCarousel() {
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
            <HomeCarousel />
          </div>
        </Section>
      );
    }

    return (
      <Section>
        <HomeCarousel />
      </Section>
    );
  }

  return null;
}
