import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section from "../../components/Section";
import styles from "../../styles/trending.module.scss";
import CircleButton from "../../components/Button/CircleButton";
import { NextArrow, PrevArrow } from '../../utils/helper';

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed:7000,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
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


export default function TrendingProductCarousel() {
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
