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
            src="/images/slider-1.jpg"
            alt="First slide"
            className={styles["image"]}
            width={'100%'}
            height={height}
          />
          <div className={styles["carousel-caption"]}>
            <Title level={3}>Beauty and Personal Care</Title>
            <p className={styles["sub-title"]}>
              Subscribe and get 20% off your first{" "}
            </p>
            <CircleButton>
              Samsung Galaxy S22 <ImArrowRight2 />
            </CircleButton>
          </div>
        </div>

        <div className={styles["carousel-item"]}>
          <img
            src="/images/slider-2.jpg"
            alt="second slide"
            className={styles["image"]}
            width={'100%'}
            height={height}
          />
          <div className={styles["carousel-caption"]}>
            <Title level={3}>Beauty and Personal Care</Title>
            <p className={styles["sub-title"]}>
              Subscribe and get 20% off your first{" "}
            </p>
            <CircleButton>
              Samsung Galaxy S22 <ImArrowRight2 />
            </CircleButton>
          </div>
        </div>

        <div className={styles["carousel-item"]}>
          <img
            src="/images/slider-3.jpg"
            alt="third slide"
            className={styles["image"]}
            width={'100%'}
            height={height}
          />
          <div className={styles["carousel-caption"]}>
            <Title level={3}>Beauty and Personal Care</Title>
            <p className={styles["sub-title"]}>
              Subscribe and get 20% off your first{" "}
            </p>
            <CircleButton>
              Samsung Galaxy S22 <ImArrowRight2 />
            </CircleButton>
          </div>
        </div>
      </Slider>
    </div>
  );
}
