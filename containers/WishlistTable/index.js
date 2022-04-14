import Section from "@components/Section";
import { Table, Tag, Button, Typography, Tooltip, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { addToCart } from "@redux/actions/cart";
import { removeFromWishlist } from "@redux/actions/wishlist";

const { Text, Title } = Typography;
const key = "wishlist";

export default function WishlistTable() {
  const products = useSelector((state) => state.wishlist.products);
  const [productLoading, setProductLoading] = useState("");
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromWishlist(product));
    message.success(`Removed ${product.title} from wishlist`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    openMessage(product);
  };

  const openMessage = (product) => {
    message.loading({ content: `Adding ${product.title} to Cart`, key });
    setProductLoading(product.id);
    setTimeout(() => {
      message.success({
        content: `Added ${product.title}  to Cart`,
        key,
        duration: 2,
      });
      setProductLoading("");
    }, 1000);
  };

  const columns = [
    {
      title: "Remove",
      dataIndex: "id",
      key: "id_remove",
      render: (src, record) => (
        <Tooltip title="Remove from wishlist">
          <AiOutlineClose
            onClick={() => handleRemove(record)}
            className="cursor-pointer"
          />
        </Tooltip>
      ),
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (src, record) => (
        <img src={src[0]} alt="product-img" width={70} />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Link href={`/product/${record.id}`}>
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: "Unit Price",
      dataIndex: "currentPrice",
      key: "currentPrice",
      render: (text, record) => (
        <Text>
          <Text delete>${record.oldPrice}</Text> ${text}
        </Text>
      ),
    },
    {
      title: "Stock Status",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return <Text>{parseInt(text) > 0 ? "In stock" : "Sold out"}</Text>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          type="round"
          onClick={() => handleAddToCart(record)}
          // loading={productLoading === record.id}
          disabled={productLoading === record.id}
        >
          Add to cart
        </Button>
      ),
    },
  ];

  return (
    <Section>
      <Title level={3} className="text-uppercase mt-4 mb-4">
        Your Wishlist
      </Title>
      <Table
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
        dataSource={products}
      />
    </Section>
  );
}
