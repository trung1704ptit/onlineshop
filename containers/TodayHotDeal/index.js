import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section from "../../components/Section";
import Product from "../../components/Product";
import ProductPreview from "../../components/ProductPreview";
import { products } from "./mockProducts";
import styles from "../../styles/product-carousel.module.scss";
import { NextArrow, PrevArrow } from "../../utils/helper";
import Countdown from "../../components/CountDown";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
    },
  ],
};

export default function TodayHotDeal() {
  return (
    <Section>
      <div className={styles["product-carousel-heading"]}>
        <Row>
          <Col md={3} xs={12}>
            <h2>Today's Hot Deal</h2>
          </Col>
          <Col md={3} xs={12}>
            <Link href="#">
              <a className="link-animated">
                See More <MdOutlineKeyboardArrowRight />
              </a>
            </Link>
          </Col>
          <Col md={6} xs={12}>
            <Countdown
              date={new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)}
            />
          </Col>
        </Row>
      </div>

      <Col md={3} xs={12}>
        <ProductPreview imageUrl="/images/products/women.jpg" />
      </Col>

      <Col md={9} xs={12}>
        <Slider {...settings}>
          {products &&
            products.map((item) => <Product data={item} key={item.id} />)}
        </Slider>
      </Col>
    </Section>
  );
}
