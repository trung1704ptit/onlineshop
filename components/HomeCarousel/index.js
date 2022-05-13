import { NextArrow, PrevArrow } from "@utils/helper";
import { ImArrowRight2 } from "react-icons/im";
import Slider from "react-slick";
import styles from "@styles/carousel.module.scss";
import Title from "antd/lib/typography/Title";
import { categories } from '../../data/categories';
import CircleButton from "../Button/CircleButton";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function HomeCarousel() {
  const numCategories = categories.filter(item => item.isShow)
  const height = numCategories.length * 44;
  return (
    <div className={styles["home-carousel-wraper"]}>
      <Slider {...settings}>
        <div className={styles["carousel-item"]}>
          <img
            src="/images/slider-3.jpg"
            alt="First slide"
            className={styles["image"]}
            width={"100%"}
            height={height}
          />
          <div className={styles["carousel-caption"]}>
            <Title level={3}>FlipBuds Pro</Title>
            <p className={styles["sub-title"]}>
              A powerful phone to help you relax at work and play. Hurry up!
            </p>
            <CircleButton>
              Learn more <ImArrowRight2 />
            </CircleButton>
          </div>
        </div>

        <div className={styles["carousel-item"]}>
          <img
            src="/images/slider-2.jpg"
            alt="second slide"
            className={styles["image"]}
            width={"100%"}
            height={height}
          />
          <div className={styles["carousel-caption"]}>
            <Title level={3}>Find X3 OPPO</Title>
            <p className={styles["sub-title"]}>
              Pre-order starting at 5:00 a.m. PDT on 2.19.
            </p>
            <CircleButton>
              Buy now <ImArrowRight2 />
            </CircleButton>
          </div>
        </div>

        <div className={styles["carousel-item"]}>
          <img
            src="/images/slider-1.jpg"
            alt="third slide"
            className={styles["image"]}
            width={"100%"}
            height={height}
          />
          <div className={styles["carousel-caption"]}>
            <Title level={3}>Apple watch</Title>
            <p className={styles["sub-title"]}>
              Durable Nato 42/44mm Apple Watch Straps Set. Free Shipping!
            </p>
            <CircleButton>
              Learn more <ImArrowRight2 />
            </CircleButton>
          </div>
        </div>
      </Slider>
    </div>
  );
}
