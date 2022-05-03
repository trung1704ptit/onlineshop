import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import Loading from "@components/Loading";

const Cart = dynamic(() => import("@containers/Cart"), {
  loading: () => (<Loading height="50vh" tip="Loading..." />)
});

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Cart | Online shop</title>
        <meta name="description" content="Cart - Online shop" />
      </Head>

      <Layout>
        <Cart />
      </Layout>
    </>
  );
}
