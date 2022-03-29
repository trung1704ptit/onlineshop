import Head from "next/head";
import TrendingProductCarousel from "../containers/TrendingProductCarousel";
import Layout from "../components/Layout";
import CategoryAndSlide from "../containers/CategoryAndSlide";
import Services from "../containers/Services";
import Devider from "../components/Devider";
import dynamic from "next/dynamic";

const Brands = dynamic(() => import('../containers/BrandsCarousel'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Online shop</title>
        <meta name="description" content="Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <>
          <Devider height={30} className="d-block d-sm-none"/>
          <CategoryAndSlide />
          <Services />
          <Devider height={30} />
          <TrendingProductCarousel />
          <Devider height={30} />
          <Brands />
        </>
      </Layout>
    </>
  );
}
