import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";
import Devider from "../components/Devider";

const AdvertiseBanner = dynamic(() => import('../containers/AdvertiseBanner'));
const ProductListWithFilter = dynamic(() => import('../containers/ProductListWithFilter'));

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
          <AdvertiseBanner />
          <Devider height={20} />

          <ProductListWithFilter />
        </>
      </Layout>
    </>
  );
}
