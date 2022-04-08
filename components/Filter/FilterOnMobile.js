import React from "react";
import { Drawer } from "antd";
import LeftFilter from "./LeftFilter";

export default function FilterOnMobile({ open, onClose }) {
  return (
    <>
      <Drawer
        title="Filter Products"
        placement="right"
        onClose={onClose}
        visible={open}
      >
        <LeftFilter />
      </Drawer>
    </>
  );
}
