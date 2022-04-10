import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import { useEffect } from "react";

const ProductDetails = dynamic(() => import("../../containers/ProductDetails"));

export default function ProductDetail() {
  useEffect(() => {
    const myElement = document.querySelector("main");
    myElement.style.backgroundColor = "#f7f8fd";

    typeof window === "object" &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
