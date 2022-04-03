import Slider from "react-slick";
import Section from "../../components/Section";
import styles from "../../styles/brands.module.scss";

export default function BrandsCarousel() {
  const settings = {
    dots: false,
    controls: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <h6 className="text-center mb-4">ANY GLOBAL BRAND YOU NEED, AT YOUR FINGERTIPS.</h6>
      <Slider {...settings}>
        <img
          src="/images/brands/brand1.jpg"
          alt="brand"
          className={styles["brand-img"]}
        />
        <img
          src="/images/brands/brand7.png"
          alt="brand"
          className={styles["brand-img"]}
        />
        <img
          src="/images/brands/brand2.jpg"
          alt="brand"
          className={styles["brand-img"]}
        />
        <img
          src="/images/brands/brand3.jpg"
          alt="brand"
          className={styles["brand-img"]}
        />
        <img
          src="/images/brands/brand8.png"
          alt="brand"
          className={styles["brand-img"]}
        />
        <img
          src="/images/brands/brand4.jpg"
          alt="brand"
          className={styles["brand-img"]}
        />
        <img
          src="/images/brands/brand5.jpg"
          alt="brand"
          className={styles["brand-img"]}
        />
        <img
          src="/images/brands/brand6.png"
          alt="brand"
          className={styles["brand-img"]}
        />
      </Slider>
    </Section>
  );
}
