import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import Space from "@components/Space";
import Loading from "@components/Loading";

const AdvertiseBanner = dynamic(() =>
  import("../containers/AdvertiseBanner"), {
    loading: () => <Loading height="200px" tip="Loading..." />,
  }
);

const ProductListWithFilter = dynamic(
  () => import("../containers/ProductListWithFilter"),
  {
    loading: () => <Loading height="200px" tip="Loading..." />,
  }
);

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop | Online shop</title>
        <meta name="description" content="Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <>
          <Space height={16} className="d-md-none" />

          <AdvertiseBanner />
          <Space height={40} />

          <ProductListWithFilter />
          <Space height={60} />
        </>
      </Layout>
    </>
  );
}
