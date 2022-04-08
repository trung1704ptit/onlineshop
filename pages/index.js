import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";
import Space from "../components/Space";

const Brands = dynamic(() => import("../containers/BrandsCarousel"));
const TodayHotDeal = dynamic(() => import("../containers/TodayHotDeal"));
const CategoryListAndProductCarousel = dynamic(() =>
  import("../containers/CategoryListAndProductCarousel")
);
const Services = dynamic(() => import("../containers/Services"));
const TrendingProductCarousel = dynamic(() =>
  import("../containers/TrendingProductCarousel")
);
const ProductCountDown = dynamic(() =>
  import("../containers/ProductCountDown")
);

const ProductBanner = dynamic(() => import("../containers/ProductBanner"));
const BestSeller = dynamic(() => import("../containers/BestSeller"));

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
          <Space height={30} className="d-block d-sm-none" />
          <CategoryListAndProductCarousel />

          <Services />
          <Space height={40} />

          <TrendingProductCarousel />
          <Space height={60} />

          <TodayHotDeal />
          <Space height={60} />

          <ProductCountDown />
          <Space height={60} />

          <BestSeller />
          <Space height={60} />

          <ProductBanner />
          <Space height={60} />

          <Brands />
          <Space height={40} />
        </>
      </Layout>
    </>
  );
}
