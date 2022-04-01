import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Product from "../../components/Product";
import { products } from "../TodayHotDeal/mockProducts";

export default function BestSeller() {
  return (
    <section>
      <Container>
        <Row>
          <h2 className="text-left">Best Seller</h2>
        </Row>
      </Container>
      <Container>
        <Row>
          {products &&
            products.map((item) => (
              <Col xs={6} md={3} key={item.id}>
                <div className="pb-4 h-100">
                  <Product data={item} />
                </div>
              </Col>
            ))}
        </Row>
      </Container>

      <h6 className="text-center mt-3 mb-2">
        <Link href="#">
          <a className="link-animated text-center">
            See more <MdOutlineKeyboardArrowDown />
          </a>
        </Link>
      </h6>
    </section>
  );
}
