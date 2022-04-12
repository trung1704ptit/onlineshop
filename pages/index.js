import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";
import BlankSpace from "../components/BlankSpace";

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
          <BlankSpace height={30} className="d-block d-lg-none" />
          <CategoryListAndProductCarousel />

          <Services />
          <BlankSpace height={40} />

          <TrendingProductCarousel />
          <BlankSpace height={60} />

          <TodayHotDeal />
          <BlankSpace height={60} />

          <ProductCountDown />
          <BlankSpace height={60} />

          <BestSeller />
          <BlankSpace height={60} />

          <ProductBanner />
          <BlankSpace height={60} />

          <Brands />
          <BlankSpace height={40} />
        </>
      </Layout>
    </>
  );
}
