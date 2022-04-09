import { Col, Row, Tooltip } from "antd";
import styles from "@styles/cart.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart } from "@redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { roundPrice } from "@utils/helper";
import Title from "antd/lib/typography/Title";
import CircleButton from "@components/Button/CircleButton";
import ProductQuantityControl from "@components/ProductQuantityControl";

export default function CartDetail() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className={styles["cart-detail"]}>
      <Row gutter={32}>
        <Col xs={24} md={17}>
          <table>
            <thead>
              <tr>
                <th className="text-center">Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="text-center">
                    <img src={product.images[0]} alt="product img" />
                  </td>
                  <td>{product.title}</td>
                  <td>${product.currentPrice.toFixed(2)}</td>
                  <td>
                    <ProductQuantityControl quantity={product.cartQty} />
                  </td>
                  <td>${roundPrice(product.currentPrice, product.cartQty)}</td>
                  <td className="text-center">
                    <Tooltip title="Remove from cart">
                      <AiOutlineClose
                        className={styles["remove-icon"]}
                        onClick={() => handleRemove(product)}
                      />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col xs={24} md={7}>
          <div className={styles["cart-summary"]}>
            <Title level={4} className={styles["title"]}>
              Cart Totals
            </Title>
            <div className={styles["summary-item"]}>
              <strong>Subtotal</strong>
              <span>${totalPrice}</span>
            </div>

            <div className={styles["summary-item"]}>
              <strong>Shipping</strong>
              <span>Free</span>
            </div>

            <div className={styles["summary-item"]}>
              <strong>Total</strong>
              <span>${totalPrice}</span>
            </div>
            <div className={styles["summary-item"]}>
              <CircleButton style="black w-100">
                Process to checkout
              </CircleButton>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
