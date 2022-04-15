import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import Loading from "@components/Loading";

const Register = dynamic(() =>
  import("../containers/Register"), {
    loading: () => <Loading height="50vh" tip="Loading..." />,
  }
);

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register | Online shop</title>
        <meta name="description" content="Register - Online shop" />
      </Head>

      <Layout>
        <Register />
      </Layout>
    </>
  );
}
