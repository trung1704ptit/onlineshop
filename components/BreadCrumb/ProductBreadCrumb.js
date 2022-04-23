import { PRODUCT_CATEGORY_BASE } from "@utils/constants";
import { findCategory } from "@utils/helper";
import { Breadcrumb } from "antd";
import { categoryList } from "data/categories";
import Link from "next/link";

export default function ProductBreadCrumb({ product }) {
  let catList = [];

  // We can improve this for better
  if (product && product.categories) {
    const parentCategoryId = product.categories[0];
    if (parentCategoryId) {
      const parentCategory = findCategory(parentCategoryId, categoryList);
      if (parentCategory) {
        catList.push(parentCategory)
        if (parentCategory.parent) {
          const brandCategory = findCategory(parentCategory.parent, categoryList);
          if (brandCategory) {
            catList.push(brandCategory)
            if (brandCategory.parent) {
              const rootCategory = findCategory(brandCategory.parent, categoryList);
              if (rootCategory) {
                catList.push(rootCategory)
              }
            }
          }
        }
      }
    }
  }

  catList = catList.reverse();
  let href = PRODUCT_CATEGORY_BASE;

  return (
    <div className="pt-3 pb-3">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        {catList && catList.map(cat => {
          href += `/${cat?.slug}`
          return (
            <Breadcrumb.Item>
              <Link href={href}>{cat?.name}</Link>
            </Breadcrumb.Item>
          )
        })
        }

        <Breadcrumb.Item>
          {product?.title}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
