import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import Loading from "@components/Loading";

const WishlistTable = dynamic(() => import("@containers/WishlistTable"), {
  loading: () => (<Loading height="50vh" tip="Loading..." />)
});

export default function Wishlist() {
  return (
    <>
      <Head>
        <title>Wishlist | Online shop</title>
        <meta name="description" content="Wishlist - Online shop" />
      </Head>

      <Layout>
        <WishlistTable />
      </Layout>
    </>
  );
}
