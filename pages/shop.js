import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import BlankSpace from "@components/BlankSpace";
import Loading from "@components/Loading";
import PageBreadCrumb from '@components/BreadCrumb/PageBreadCrumb';

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
      </Head>

      <Layout>
        <>
          <PageBreadCrumb pageName="Shop" />
          <BlankSpace height={16} className="d-md-none" />


          <AdvertiseBanner />
          <BlankSpace height={40} />

          <ProductListWithFilter />
          <BlankSpace height={60} />
        </>
      </Layout>
    </>
  );
}
