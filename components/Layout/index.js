

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../Header'))
const Footer = dynamic(() => import('../Footer'))


export default function Layout({ children }) {
  return (
    <div id="wrap">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
