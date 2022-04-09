import Link from "next/link";
import { Col, Row, Typography } from "antd";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialPinterest,
} from "react-icons/ti";
import styles from "../../styles/footer.module.scss";
import Logo from "@components/Logo";

const { Title } = Typography;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["first-content"]}>
          <Row>
            <Col sm={24} md={12}>
              <div>
                <Logo white />
              </div>
              <p>
                Spanish fast-fashion retailer based in store pick up points, the
                company founded in 1997.
              </p>

              <div className={styles["socials"]}>
                <ul className="list-style-none">
                  <li>
                    <Link href="#">
                      <a className={styles["social-item"]}>
                        <TiSocialFacebook />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className={styles["social-item"]}>
                        <TiSocialInstagram />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className={styles["social-item"]}>
                        <TiSocialTwitter />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className={styles["social-item"]}>
                        <TiSocialPinterest />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="search-bar"></div>
            </Col>


            <Col xs={24} md={4}>
              <Title level={5} className={styles["head"]}>
                Marketplace
              </Title>
              <ul className="list-style-none">
                <li>
                  <Link href="#">In-store Shop</Link>
                </li>
                <li>
                  <Link href="#">Brands</Link>
                </li>
                <li>
                  <Link href="#">Best seller</Link>
                </li>
                <li>
                  <Link href="#">Gift cards</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
              </ul>
            </Col>

            <Col xs={24} md={4}>
              <Title level={5} className={styles["head"]}>
                Customer Care
              </Title>
              <ul className="list-style-none">
                <li>
                  <Link href="#">In-store Shop</Link>
                </li>
                <li>
                  <Link href="#">Brands</Link>
                </li>
                <li>
                  <Link href="#">Best seller</Link>
                </li>
                <li>
                  <Link href="#">Gift cards</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
              </ul>
            </Col>

            <Col xs={24} md={4}>
              <Title level={5} className={styles["head"]}>
                About Online shop
              </Title>
              <ul className="list-style-none">
                <li>
                  <Link href="#">Track you order</Link>
                </li>
                <li>
                  <Link href="#">Product guides</Link>
                </li>
                <li>
                  <Link href="#">Wislists</Link>
                </li>
                <li>
                  <Link href="#">Privacy policy</Link>
                </li>
                <li>
                  <Link href="#">Store locator</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className={styles["second-content"]}>
          <div>
            <ul className="list-style-none">
              <li>
                <Link href="#">
                  <a>Help center</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Find a store</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img src="/images/payments.png" alt="payments" />
          </div>
        </div>
      </div>
    </footer>
  );
}
