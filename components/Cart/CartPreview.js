import CircleButton from "@components/Button/CircleButton";
import styles from "@styles/cart.module.scss";
import { List, Avatar, Tooltip, message } from "antd";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { removeFromCart } from "@redux/actions/cart";
import { useDispatch } from "react-redux";

export default function CartPreview({ products, totalPrice }) {
  const dispatch = useDispatch();

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
    openMessage(product.title);
  };

  const openMessage = (title) => {
    message.loading({
      content: `Removing ${title} from Cart`,
      key: "remove-from-cart",
    });
    setTimeout(() => {
      message.success({
        content: `Removed ${title}  from Cart`,
        key: "remove-from-cart",
        duration: 2,
      });
    }, 500);
  };

  return (
    <div className={styles["cart-preview"]}>
      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            extra={
              <Tooltip title="Remove product">
                <IoIosCloseCircleOutline
                  className={styles["remove-icon"]}
                  onClick={() => handleRemoveProduct(item)}
                />
              </Tooltip>
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.images[0]}
                  className={styles["product-img"]}
                />
              }
              title={<a href={`/product/${item.id}`}>{item.title}</a>}
              description={`${item.cartQty} x $${item.currentPrice}`}
            />
          </List.Item>
        )}
      />

      <div className={styles["second"]}>
        <div className={styles["subtotal"]}>
          <span className={styles["text"]}>Subtotal</span>
          <span className={styles["total-price"]}>${totalPrice}</span>
        </div>

        <CircleButton style="black w-100 mt-3 mb-3" href="/cart">
          Checkout
        </CircleButton>
        <div className={styles["view-cart-link"]}>
          <Link href="/cart">
            <a className="d-flex align-items-center justify-content-center">
              View Cart <MdOutlineKeyboardArrowRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
