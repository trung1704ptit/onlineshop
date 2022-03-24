import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import styles from "../styles/home.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Section from '../components/Section';

import Carousel from "../components/Carousel";
import CategoryList from "../components/Category/CategoryList";
import CategoryAndSlide from "../containers/CategoryAndSlide";

export default function Home() {
  const isLargeDevice = useMediaQuery({
    query: "(min-width: 992px)",
  });

  console.log(isLargeDevice)

  return (
    <>
      <Head>
        <title>Home | Online shop</title>
        <meta name="description" content="Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <CategoryAndSlide />
      </Layout>
    </>
  );
}
