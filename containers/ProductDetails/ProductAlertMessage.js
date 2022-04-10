import React from 'react';
import { Alert, Card } from "antd";
import {
  RiTruckLine,
  RiStoreLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

import { List } from "antd";

const data = [
  {
    title: "Free Shipping apply to all orders over $100",
    icon: <RiTruckLine size={24} />,
  },
  {
    title: "Guranteed 100% Organic from natural farmas",
    icon: <RiStoreLine size={24} />,
  },
  {
    title: "1 Day Returns if you change your mind",
    icon: <RiMoneyDollarCircleLine size={24} />,
  },
];

function ProductAlertMessage() {
  return (
    <>
      <Alert
        message="Covid-19 Info: We keep delivering."
        type="error"
        className="text-center mb-3 mt-md-0 mt-4"
      />
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={<span>{item.title}</span>}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}


export default React.memo(ProductAlertMessage);