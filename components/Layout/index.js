import Header from'../Header';
import Footer from '../Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from 'react-icons/fa'


export default function Layout({ children }) {
  return (
    <div id="wrap">
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop smooth color="#6f00ff" component={<FaArrowUp />}/>
    </div>
  );
}
