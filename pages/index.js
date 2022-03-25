import Head from "next/head";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";

const CategoryAndSlide = dynamic(() =>
  import("../containers/CategoryAndSlide")
);
const Services = dynamic(() => import("../containers/Services"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Online shop</title>
        <meta name="description" content="Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout>
        <CategoryAndSlide />
        <Services />
      </Layout>
    </>
  );
}
