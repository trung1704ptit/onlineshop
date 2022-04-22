import Section from "@components/Section";
import { useEffect, useState } from "react";
import { products } from "data/products";
import { useRouter } from "next/router";
import ProductBreadCrumb from "@components/BreadCrumb/ProductBreadCrumb";
import ProductContent from "./ProductContent";
import ProductDescription from "./ProductDescription";
import ProductRelated from "./ProductRelated";
import { Card } from "antd";

export default function ProductDetails() {
  const [notFound, setNotFound] = useState(false);
  const [product, setProduct] = useState({});

  const router = useRouter();
  const { productId } = router.query;

  // call product detail by id
  useEffect(() => {
    if (productId) {
      const exist = products.find((item) => item.slug === productId);
      if (exist) {
        setProduct(exist);
      } else {
        setNotFound(true);
      }
    }
  }, [productId]);

  if (notFound) {
    return <Card className="text-center">Product not found!</Card>;
  }

  return (
    <Section>
      <ProductBreadCrumb product={product} />
      <ProductContent product={product} />
      <ProductDescription product={product} />
      <ProductRelated product={product} />
    </Section>
  );
}
