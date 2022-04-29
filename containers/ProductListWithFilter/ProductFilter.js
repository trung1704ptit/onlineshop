import { useEffect, useState } from "react";
import { Row, Col, Pagination, Empty } from "antd";
import Product from "@components/Product";
import { products } from "data/products";
import { useRouter } from "next/router";
import {
  findCategory,
  getAllCategoryByBrandId,
  getAllCategoryByGroupCategoryId,
} from "@utils/helper";
import { categories } from "data/categories";
import { PRODUCT_VIEW } from "@utils/constants";

const isInPartOfList = (str, list) => {
  const exist = list.find((ele) => ele.includes(str));
  return Boolean(exist);
};

export default function ProductFilter() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [productView, setProductView] = useState(PRODUCT_VIEW.grid);

  useEffect(() => {
    const { query } = router;
    let {
      minPrice,
      maxPrice,
      colors,
      catids,
      categoryId,
      brandId,
      groupCategoryId,
      product_view,
      per_page,
      order_by,
    } = query;

    let productFilter = [];
    let allProductCatIds = [];

    if (!categoryId && !brandId && !groupCategoryId) {
      productFilter = products;
    } else {
      if (categoryId) {
        const category = findCategory(categoryId, categories);
        if (category) {
          allProductCatIds = [category.id];
        }
      } else if (brandId) {
        allProductCatIds = getAllCategoryByBrandId(brandId, categories);
      } else if (groupCategoryId) {
        allProductCatIds = getAllCategoryByGroupCategoryId(
          groupCategoryId,
          categories
        );
      }
      productFilter = products.filter((item) => {
        if (
          item.categories.filter((pCat) => allProductCatIds.includes(pCat))
            .length > 0
        ) {
          return item;
        }
      });
    }

    if (catids && catids !== '*') {
      allProductCatIds = catids.split(",");
      productFilter = products.filter((item) => {
        if (
          item.categories.filter((pCat) => allProductCatIds.includes(pCat))
            .length > 0
        ) {
          return item;
        }
      });
    }

    if (colors && colors !== "*") {
      colors = colors.split(",");
      productFilter = productFilter.filter((item) => {
        const productColors = item.colors.map((item) => item.name);
        for (let color of colors) {
          if (
            productColors.includes(color) ||
            isInPartOfList(color, productColors)
          ) {
            return item;
          }
        }
      });
    }

    if (minPrice) {
      productFilter = productFilter.filter(
        (item) => item.currentPrice >= minPrice
      );
    }
    if (maxPrice) {
      productFilter = productFilter.filter(
        (item) => item.currentPrice <= maxPrice
      );
    }

    setList(productFilter);
    if (product_view) {
      if (product_view === PRODUCT_VIEW.list) {
        setProductView(PRODUCT_VIEW.list);
      } else {
        setProductView(PRODUCT_VIEW.grid);
      }
    }
  }, [router]);

  return (
    <div className="mt-3 w-100">
      {productView === PRODUCT_VIEW.grid ? (
        <Row gutter={16}>
          {list &&
            list.map((item) => (
              <Col xs={12} md={8} xl={6} key={item.id}>
                <div className="pb-4 h-100">
                  <Product data={item} />
                </div>
              </Col>
            ))}
        </Row>
      ) : (
        <div>
          {list &&
            list.map((item) => (
              <div className="w-100" key={item.id}>
                <Product data={item} view="horizontal" />
              </div>
            ))}
        </div>
      )}

      {list.length > 0 ? (
        <div className="text-center">
          <Pagination defaultCurrent={1} total={list.length} />
        </div>
      ) : (
        <Empty description="There are no products found." />
      )}
    </div>
  );
}
