import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import Loading from "@components/Loading";

const Cart = dynamic(() =>
  import("../containers/Cart"), {
    loading: () => <Loading height="50vh" tip="Loading..." />,
  }
);

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Checkout | Online shop</title>
        <meta name="description" content="Checkout - Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <Cart />
      </Layout>
    </>
  );
}
