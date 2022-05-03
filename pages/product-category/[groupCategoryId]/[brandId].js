import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import BlankSpace from "@components/BlankSpace";
import Loading from "@components/Loading";
import CategoryBreadCrumb from "@components/BreadCrumb/CategoryBreadCrumb";

const AdvertiseBanner = dynamic(() => import("@containers/AdvertiseBanner"));

const ProductListWithFilter = dynamic(
  () => import("@containers/ProductListWithFilter"),
  {
    loading: () => <Loading height="200px" tip="Loading..." />,
  }
);

export default function Shop() {
  return (
    <>
      <Head>
        <title>Product Category | Online shop</title>
        <meta name="description" content="Product Category" />
      </Head>

      <Layout>
        <>
          <CategoryBreadCrumb pageName="Product Category" />
          <BlankSpace height={16} className="d-md-none" />

          <AdvertiseBanner />
          <BlankSpace height={40} />

          <ProductListWithFilter noCategory={true} />
          <BlankSpace height={60} />
        </>
      </Layout>
    </>
  );
}
