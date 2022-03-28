import Head from "next/head";
import TrendingProductCarousel from '../containers/TrendingProductCarousel';
import Layout from "../components/Layout";
import CategoryAndSlide from "../containers/CategoryAndSlide";
import Services from "../containers/Services";
import Devider from "../components/Devider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Online shop</title>
        <meta name="description" content="Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <CategoryAndSlide></CategoryAndSlide>
          <Services></Services>
          <Devider></Devider>
          <TrendingProductCarousel></TrendingProductCarousel>
        </div>
      </Layout>
    </>
  );
}
