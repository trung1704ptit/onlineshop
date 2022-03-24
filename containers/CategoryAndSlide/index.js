import dynamic from "next/dynamic";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Section from "../../components/Section";

const SlideCarousel = dynamic(() => import("../../components/Carousel"));
const CategoryList = dynamic(() =>
  import("../../components/Category/CategoryList")
);

export default function CategoryAndSlide() {
  const isLargeDevice = useMediaQuery({
    query: "(min-width: 992px)",
  });

  if (isLargeDevice) {
    return (
      <Section>
        <div className="d-flex align-item-stretch">
          <Container>
            <Row>
              <Col xs={12} md={3}>
                <CategoryList />
              </Col>
              <Col xs={12} md={9}>
                <SlideCarousel />
              </Col>
            </Row>
          </Container>
        </div>
      </Section>
    );
  }
  return <SlideCarousel />;
}
