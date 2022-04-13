import Section from "@components/Section";
import { Table, Tag, Button, Typography, Tooltip } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const { Text, Title } = Typography;

export default function WishlistTable() {
  const products = useSelector((state) => state.cart.products);
  const handleRemove = (product) => {};

  const handleAddToCart = (product) => {};

  const columns = [
    {
      title: "Remove",
      dataIndex: "id",
      key: "id_remove",
      render: (src, record) => (
        <Tooltip title="Remove from wishlist">
          <AiOutlineClose
            onClick={() => handleRemove(product)}
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
      render: (text, record) => (
        <Text>{parseInt(text) > 0 ? "In stock" : "Sold out"}</Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button type="round" onClick={() => handleAddToCart(record)}>
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
