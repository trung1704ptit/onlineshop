import React from "react";
import Slider from "react-slick";
import Countdown from "react-countdown";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Section from "../../components/Section";
import Product from "../../components/Product";
import ProductPreview from "../../components/ProductPreview";
import { products } from "./mockProducts";
import styles from "../../styles/product-carousel.module.scss";
import { NextArrow, PrevArrow } from '../../utils/helper';

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

const Completionist = () => <Link href="#">Shop Now!</Link>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className={styles["time-counter"]}>
        <span className={styles["highlight"]}>{days}</span> Days
        <span className={styles["highlight"]}>{hours}</span> Hours
        <span className={styles["highlight"]}>{minutes}</span> Minutes
        <span className={styles["highlight"]}>{seconds}</span> Seconds
      </div>
    );
  }
};

export default function TodayHotDeal() {
  return (
    <Section>
      <div className={styles["product-carousel-heading"]}>
        <Row>
          <Col md={3} xs={12}>
            <h3>Today's Hot Deal</h3>
          </Col>
          <Col md={3} xs={12}>
            <Link href="#">
              <a className="link-animated">See More <MdOutlineKeyboardArrowRight /></a>
            </Link>
          </Col>
          <Col md={6} xs={12}>
            <Countdown
              date={new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)}
              renderer={renderer}
            />
          </Col>
        </Row>
      </div>

      <Col md={3} xs={12}>
        <ProductPreview imageUrl="/images/products/women.jpg" />
      </Col>

      <Col md={9} xs={12}>
        <Slider {...settings}>
          {products && products.map((item) => <Product data={item} />)}
        </Slider>
      </Col>
    </Section>
  );
}
