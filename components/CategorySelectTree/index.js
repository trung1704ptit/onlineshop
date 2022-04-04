import React, { useState } from "react";
import { Tree } from "antd";
const treeData = [
  {
    title: "Apple",
    key: "0-0",
    children: [
      {
        title: "iPhone 13 Series",
        key: "0-0-0",
      },
      {
        title: "iPhone 12 Series",
        key: "0-0-1",
      },
      {
        title: "Ipad",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "Camera & Photo",
    key: "0-1",
    children: [
      {
        title: "Sony",
        key: "0-1-0-0",
      },
      {
        title: "Canon",
        key: "0-1-0-1",
      },
      {
        title: "Samung",
        key: "0-1-0-2",
      },
    ],
  },
  {
    title: "Computers & Accessories",
    key: "0-2",
    children: [
      {
        title: "MSI gaming",
        key: "0-2-0-0",
      },
      {
        title: "ASUS ROG strix",
        key: "0-2-0-1",
      },
      {
        title: "Dell",
        key: "0-2-0-2",
      },
      {
        title: "HP",
        key: "0-2-0-3",
      },
    ],
  },
  {
    title: "Cell phones",
    key: "0-3",
  },
  {
    title: "Headphones",
    key: "0-4",
  },
  {
    title: "Smartwatches",
    key: "0-5",
  },
  {
    title: "Sport & Outdoors",
    key: "0-6",
  },
  {
    title: "Television & Video",
    key: "0-7",
  },
  {
    title: "Fashion",
    key: "0-8",
  },
  {
    title: "Clothing",
    key: "0-9",
  },
];

const CategorySelectTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

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
