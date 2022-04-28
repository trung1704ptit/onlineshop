import React, { useEffect, useState } from "react";
import { Tree } from "antd";
import { categories } from "data/categories";
import { useRouter } from "next/router";
import { findCategory } from "@utils/helper";

const formatItem = (item) => {
  let children = [];
  if (item.sub && item.sub.length > 0) {
    children = formatData(item.sub) || [];
  }
  return {
    title: item.name,
    key: item.id,
    children,
  };
};

const formatData = (list) => {
  if (!list) {
    return [];
  }

  return list.map((item) => {
    const exist = findCategory(item.id, categories);
    if (exist) {
      return formatItem(exist);
    }
  });
};

const treeData = formatData(categories);

const CategorySelectTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  // const [treeData, setTreeData] = useState([]);
  const router = useRouter();


  useEffect(() => {
    const { catids } = router.query;
    if (catids && catids !== '*') {
      const catList = catids.split(',')
      setCheckedKeys(catList);
      setExpandedKeys(catList);
    }
    // if (categoryId) {
    //   setCheckedKeys([categoryId]);
    // } else if (brandId) {
    //   setExpandedKeys([brandId]);
    //   setCheckedKeys([brandId]);
    // }

    // if (groupCategoryId) {
    //   const groupCategory = findCategory(groupCategoryId, categories);
    //   if (groupCategory && groupCategory.sub) {
    //     const data = formatData(groupCategory.sub);
    //     setTreeData(data);
    //   }
    // } else {
    //   const data = formatData(categories);
    //   setTreeData(data);
    // }
  }, [router]);

  const onExpand = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    let catids = "*";
    setCheckedKeys(checkedKeysValue);

    if (checkedKeysValue.length > 0) {
      catids = checkedKeysValue;
    }
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      catids: catids,
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      treeData={treeData}
      selectable={false}
    />
  );
};
export default CategorySelectTree;
