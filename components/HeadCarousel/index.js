import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { ImArrowRight2 } from "react-icons/im";
import Slider from "react-slick";
// import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import styles from "../../styles/carousel.module.scss";
import CircleButton from "../Button/CircleButton";

export default function HeadCarousel() {
  return (
    <Carousel
      touch={true}
      className={styles["home-carousel-wraper"]}
      interval={1000000000}
    >
      <Carousel.Item>
        <img
          src="/images/slider-1.jpg"
          alt="First slide"
          className={styles["image"]}
        />
        <Carousel.Caption className={styles["carousel-caption"]}>
          <h3>Beauty and Personal Care</h3>
          <p className={styles["sub-title"]}>
            Subscribe and get 20% off your first{" "}
          </p>
          <CircleButton>
            Samsung Galaxy S22 <ImArrowRight2 />
          </CircleButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/slider-2.jpg"
          alt="Second slide"
          className={styles["image"]}
        />

        <Carousel.Caption className={styles["carousel-caption"]}>
          <h3>Toys and Games</h3>
          <p className={styles["sub-title"]}>
            Subscribe and get 20% off your first{" "}
          </p>
          <CircleButton>
            Samsung Galaxy S22 <ImArrowRight2 />
          </CircleButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/slider-3.jpg"
          alt="Third slide"
          className={styles["image"]}
        />

        <Carousel.Caption className={styles["carousel-caption"]}>
          <h3>Shop activity trackers and smartwatches</h3>
          <p className={styles["sub-title"]}>
            Subscribe and get 20% off your first
          </p>
          <CircleButton>
            Samsung Galaxy S22 <ImArrowRight2 />
          </CircleButton>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

}
