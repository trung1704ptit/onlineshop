import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Online shop</title>
        <meta name="description" content="Online shop" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Layout></Layout>
    </>
  );
}
