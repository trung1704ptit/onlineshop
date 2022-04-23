import Section from "@components/Section";
import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import { findCategory } from '@utils/helper'
import { categoryList } from "data/categories";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PRODUCT_CATEGORY_BASE } from "@utils/constants";

export default function PageBreadCrumb({ pageName }) {
  const [catList, setCatList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const list = []
    const { groupCategoryId, brandId, categoryId } = router.query;
    // We can improve this
    if (groupCategoryId) {
      const groupCategory = findCategory(groupCategoryId, categoryList);
      if (groupCategory) {
        list.push(groupCategory)
      }
      if (brandId) {
        const brandCategory = findCategory(brandId, categoryList);
        if (brandCategory) {
          list.push(brandCategory)
        }
        if (categoryId) {
          const parentCategory = findCategory(categoryId, categoryList);
          if (parentCategory) {
            list.push(parentCategory)
          }
        }
      }
    }
    setCatList(list)
  }, [router]);

  let href = PRODUCT_CATEGORY_BASE;

  return (
    <Section>
      <div className="pt-3 pb-3">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          {catList && catList.map(cat => {
            href += `/${cat?.slug}`
            return (
              <Breadcrumb.Item key={cat.id}>
                <Link href={href}>{cat?.name}</Link>
              </Breadcrumb.Item>
            )
          })
          }
        </Breadcrumb>
      </div>
    </Section>
  );
}
