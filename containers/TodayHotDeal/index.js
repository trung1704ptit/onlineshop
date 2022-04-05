import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Col, Row } from "antd";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Typography } from 'antd';
import Section from "../../components/Section";
import Product from "../../components/Product";
import ProductPreview from "../../components/ProductPreview";
import { products } from "../../data/products";
import styles from "../../styles/product-carousel.module.scss";
import { NextArrow, PrevArrow } from "../../utils/helper";
import Countdown from "../../components/CountDown";

const { Title } = Typography;

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
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function TodayHotDeal() {
  return (
    <Section>
      <div className={styles["product-carousel-heading"]}>
        <Row gutter={16}>
          <Col xs={18} sm={6}>
            <Title level={2}>Today's Hot Deal</Title>
          </Col>

          <Col xs={6} sm={2}>
            <Link href="#">
              <a className="link-animated">
                See More <MdOutlineKeyboardArrowRight />
              </a>
            </Link>
          </Col>

          <Col xs={24} sm={16}>
            <Countdown
              date={new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)}
            />
          </Col>
        </Row>
      </div>

      <Row gutter={32}>
        <Col xs={24} sm={6}>
          <ProductPreview imageUrl="/images/products/women.jpg" />
        </Col>

        <Col xs={24} sm={18}>
          <Slider {...settings}>
            {products &&
              products.map((item) => (
                <Product data={item} key={item.id} border={false} />
              ))}
          </Slider>
        </Col>
      </Row>
    </Section>
  );
}
