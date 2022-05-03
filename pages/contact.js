import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import Loading from "@components/Loading";

const Contact = dynamic(() => import("@containers/Contact"), {
  loading: () => <Loading height="50vh" tip="Loading..." />,
});

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Online shop</title>
        <meta name="description" content="Contact - Online shop" />
      </Head>

      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
