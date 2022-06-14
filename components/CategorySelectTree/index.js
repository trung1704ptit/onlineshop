import React, { useEffect, useLayoutEffect, useState } from "react";
import { Tree } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { actionGetCategories } from "@redux/actions/category";
import axios from "axios";

const formatItem = (item) => {
  let children = [];
  if (!isEmpty(item.children)) {
    children = formatData(item.children) || [];
  }
  return {
    id: item._id,
    title: item.name,
    key: item._id,
    children,
  };
};

const formatData = (list) => {
  if (!list) {
    return [];
  }

  return list.map((item) => {
    return formatItem(item);
  });
};

const CategorySelectTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const categories = useSelector((state) => state.category.categories);

  const treeData = formatData(categories);

  useEffect(() => {
    const { catids } = router.query;
    if (catids && catids !== "*" && !firstLoaded) {
      const catList = catids.split(",");
      setCheckedKeys(catList);
      setExpandedKeys(catList);
      setFirstLoaded(true);
    }
  }, [router.query.catids, firstLoaded]);

  const onExpand = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  useLayoutEffect(() => {
    if (isEmpty(categories)) {
      try {
        axios.get(`${process.env.API_ENDPOINT}/v1/categories`).then((res) => {
          if (res.data) {
            dispatch(actionGetCategories(res.data));
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [categories]);

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
