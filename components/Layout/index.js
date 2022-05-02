import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import Newsletter from "@containers/Newsletters";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCart } from "@redux/actions/cart";

export default function Layout({ children }) {
  // should remove this when integrate with APIs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateCart());
  }, []);

  return (
    <div id="wrap">
      <Header />
      <main>{children}</main>
      <Newsletter />
      <Footer />
      <ScrollToTop smooth color="#6f00ff" component={<FaArrowUp />} />
    </div>
  );
}
