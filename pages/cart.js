import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";
import Space from "../components/Space";

const CartProgress = dynamic(() => import("@components/Cart/CartProgress"));

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart | Online shop</title>
        <meta name="description" content="Cart - Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <>
          <Space height={30} className="d-block d-sm-none" />
          <CartProgress />
        </>
      </Layout>
    </>
  );
}
