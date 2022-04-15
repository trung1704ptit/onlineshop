import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";
import Loading from "@components/Loading";

const Login = dynamic(() => import("../containers/Login"), {
  loading: () => <Loading height="50vh" tip="Loading..." />,
});

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Online shop</title>
        <meta name="description" content="Login - Online shop" />
      </Head>

      <Layout>
        <Login />
      </Layout>
    </>
  );
}
