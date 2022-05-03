import { useEffect, useState } from "react";
import { Row, Col, Pagination, Empty } from "antd";
import Product from "@components/Product";
import { products } from "data/products";
import { useRouter } from "next/router";
import {
  filterProductBySorting,
  findCategory,
  getAllCategoryByBrandId,
  getAllCategoryByGroupCategoryId,
} from "@utils/helper";
import { categories } from "data/categories";
import { FILTER, PRODUCT_VIEW } from "@utils/constants";
import ProductPagintation from "./ProductPagintation";

const isInPartOfList = (str, list) => {
  const exist = list.find((ele) => ele.includes(str));
  return Boolean(exist);
};

export default function ProductFilter() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [productView, setProductView] = useState(PRODUCT_VIEW.grid);
  const [total, setTotal] = useState(0);

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
      pageSize,
      page = 1,
      orderBy,
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

    if (catids && catids !== "*") {
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
            const colorOfProduct = item.colors.find(c => c.name.includes(color));
            if (colorOfProduct) {
              item.images[0] = colorOfProduct.image;
            }
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

    setTotal(productFilter.length);

    pageSize = pageSize ? parseInt(pageSize) : FILTER.showItems[0].value;
    productFilter = productFilter.slice(pageSize * (page - 1), pageSize * page);

    orderBy = orderBy ? orderBy : FILTER.sorting[2].value;
    productFilter = filterProductBySorting(productFilter, orderBy);

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
        <Row gutter={8}>
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

      {total > 0 ? (
        <div className="text-center">
          <ProductPagintation list={list} total={total} />
        </div>
      ) : (
        <Empty description="There are no products found." />
      )}
    </div>
  );
}
