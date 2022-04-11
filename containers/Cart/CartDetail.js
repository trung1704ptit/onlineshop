import { Col, Row, Tooltip, message } from "antd";
import styles from "@styles/cart.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart, updateCart } from "@redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { roundPrice } from "@utils/helper";
import Title from "antd/lib/typography/Title";
import CircleButton from "@components/Button/CircleButton";
import ProductQuantityControl from "@components/ProductQuantityControl";
import Link from "next/link";

export default function CartDetail() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const onUpdateCart = (product, newCartQty) => {
    // call update redux with new quantity
    if (newCartQty === 0) {
      dispatch(removeFromCart(product));
      message.success(`Removed ${product.title} from cart successful`);
    } else {
      product["cartQty"] = newCartQty;
      dispatch(updateCart(product));
      message.success("Updated the cart successful");
    }
  };

  return (
    <div className={styles["cart-detail"]}>
      <Row gutter={32}>
        <Col xs={24} md={24} lg={17}>
          <table className="mb-md-0 mb-5">
            <thead>
              <tr>
                <th className="text-center">Image</th>
                <th>Product</th>
                <th className="d-none d-md-table-cell text-center">Price</th>
                <th className="d-none d-md-table-cell text-center">Quantity</th>
                <th className="d-none d-md-table-cell text-center">Subtotal</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="text-center">
                    <img src={product.images[0]} alt="product img" />
                  </td>
                  <td>
                    <p className="mb-2 mb-sm-0">
                      <Link href={`/product/${product.id}`}>
                        <a>{product.title}</a>
                      </Link>
                    </p>
                    <div className="d-block d-sm-none text-center">
                      <ProductQuantityControl
                        quantity={product.cartQty}
                        onUpdateCart={(newCartQty) =>
                          onUpdateCart(product, newCartQty)
                        }
                      />
                    </div>
                  </td>
                  <td className="d-none d-md-table-cell text-center">
                    ${product.currentPrice}
                  </td>
                  <td className="d-none d-md-table-cell text-center">
                    <ProductQuantityControl
                      quantity={product.cartQty}
                      onUpdateCart={(newCartQty) =>
                        onUpdateCart(product, newCartQty)
                      }
                    />
                  </td>
                  <td className="d-none d-md-table-cell text-center">
                    ${roundPrice(product.currentPrice, product.cartQty)}
                  </td>
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
        <Col xs={24} md={24} lg={7}>
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
              <span className={styles["highlight"]}>${totalPrice}</span>
            </div>
            <div className={styles["summary-item"]}>
              <CircleButton className="black w-100">
                Process to checkout
              </CircleButton>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
