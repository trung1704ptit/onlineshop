import React, { useEffect, useState } from "react";
import { Tree } from "antd";
import { categories } from "data/categories";
import { useRouter } from "next/router";
import { findCategory } from "@utils/helper";

const formatItem = (item) => {
  let children = []
  if (item.sub && item.sub.length > 0) {
    children = formatData(item.sub) || []
  }
  return ({
    title: item.name,
    key: item.slug,
    children
  })
}

const formatData = (list) => {
  if (!list) {
    return []
  }

  return list.map(item => {
    const exist = findCategory(item.id, categories);
    if (exist) {
      return formatItem(exist)
    }
  })
}

const CategorySelectTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [treeData, setTreeData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const { groupCategoryId, brandId, categoryId } = router.query;
    if (categoryId) {
      setCheckedKeys([categoryId])
      setExpandedKeys([categoryId]);
    } else if (brandId) {
      setExpandedKeys([brandId]);
      setCheckedKeys([brandId])
    }

    if (groupCategoryId) {
      const groupCategory = findCategory(groupCategoryId, categories);
      if (groupCategory && groupCategory.sub) {
        const data = formatData(groupCategory.sub);
        setTreeData(data);
      }
    }
  }, [router])

  const onExpand = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};
export default CategorySelectTree;
