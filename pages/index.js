import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";
import Devider from "../components/Devider";

const Brands = dynamic(() => import("../containers/BrandsCarousel"));
const TodayHotDeal = dynamic(() => import("../containers/TodayHotDeal"));
const CategoryAndSlide = dynamic(() =>
  import("../containers/CategoryAndSlide")
);
const Services = dynamic(() => import("../containers/Services"));
const TrendingProductCarousel = dynamic(() =>
  import("../containers/TrendingProductCarousel")
);
const ProductCountDown =  dynamic(() => import('../containers/ProductCountDown'));

const CategoryBannerFullWidth = dynamic(() =>
  import("../containers/CategoryBanner/CategoryBannerFullWidth")
);

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
          <Devider height={30} className="d-block d-sm-none" />
          <CategoryAndSlide />

          <Services />
          <Devider height={40} />

          <TrendingProductCarousel />
          <Devider height={60} />

          <TodayHotDeal />
          <Devider height={60} />

          <Brands />
          <Devider height={60} />

          <CategoryBannerFullWidth />
          <Devider height={60} />

          <ProductCountDown />
          <Devider height={40} />
        </>
      </Layout>
    </>
  );
}
