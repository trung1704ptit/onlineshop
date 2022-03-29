import React from "react";
import Slider from "react-slick";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section from "../../components/Section";
import styles from "../../styles/trending.module.scss";
import CircleButton from "../../components/Button/CircleButton";
import Link from "next/link";

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

export default function TrendingProductCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className={styles["carousel-button"]} />,
    prevArrow: <SamplePrevArrow className={styles["carousel-button"]} />,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <div className={styles["trending-product"]}>
        <Slider {...settings}>
          <div className={styles["slide-block"]}>
            <img src="/images/vr.jpg" alt="slide-image" />
            <div className={styles["overlay"]} />
            <div className={styles["caption"]}>
              <h3>PlayStation 4 VR has arrived.</h3>
              <Link href="#">
                <CircleButton size="medium">
                  See Products <MdOutlineKeyboardArrowRight />
                </CircleButton>
              </Link>
            </div>
          </div>

          <div className={styles["slide-block"]}>
            <img src="/images/phone.jpg" alt="slide-image" />
            <div className={styles["overlay"]} />
            <div className={styles["caption"]}>
              <h3>Galaxy S22 Series.</h3>
              <Link href="#">
                <CircleButton size="medium">
                  See Products <MdOutlineKeyboardArrowRight />
                </CircleButton>
              </Link>
            </div>
          </div>

          <div className={styles["slide-block"]}>
            <img src="/images/queen.jpg" alt="slide-image" />
            <div className={styles["overlay"]} />

            <div className={styles["caption"]}>
              <h3>Chanel Gabriele Perfume.</h3>
              <Link href="#">
                <CircleButton size="medium">
                  See Products <MdOutlineKeyboardArrowRight />
                </CircleButton>
              </Link>
            </div>
          </div>

          <div className={styles["slide-block"]}>
            <img src="/images/women.jpg" alt="slide-image" />
            <div className={styles["overlay"]} />

            <div className={styles["caption"]}>
              <h3>Women's Lookbook</h3>
              <Link href="#">
                <CircleButton size="medium">
                  See Products <MdOutlineKeyboardArrowRight />
                </CircleButton>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </Section>
  );
}
