import React from "react";
import Slider from "react-slick";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import Section from "../../components/Section";
import Product from "../../components/Product";
import { Col } from "react-bootstrap";
import ProductPreview from "../../components/ProductPreview";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ImArrowRight2 />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ImArrowLeft2 />
    </div>
  );
}

export default function TodayHotDeal() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      }
    ],
  };

  return (
    <Section>
      <Col md={3} xs={12}>
        <ProductPreview imageUrl="https://retailshop.liquid-themes.com/staging/wp-content/uploads/2020/08/cat-1@2x.jpg" />
      </Col>

      <Col md={9} xs={12}>
        <Slider {...settings}>
          <Product />
          <Product />
          <Product />
          <Product />
        </Slider>
      </Col>
    </Section>
  );
}
