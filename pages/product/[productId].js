import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import { useEffect } from "react";
import Loading from "@components/Loading";

const ProductDetails = dynamic(
  () => import("../../containers/ProductDetails"),
  {
    loading: () => <Loading height="50vh" tip="Loading..." />,
  }
);

export default function ProductDetail() {
  useEffect(() => {
    const myElement = document.querySelector("main");
    myElement.style.backgroundColor = "#f7f8fd";
  }, []);

  return (
    <>
      <Head>
        <title>Product Detail | Online shop</title>
        <meta name="description" content="Product Detail - Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <ProductDetails />
      </Layout>
    </>
  );
}
