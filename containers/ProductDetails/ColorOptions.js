import { Radio } from "antd";
import React, { useEffect } from "react";

export default function ColorOptions({ data, handleChange }) {
  const [value, setValue] = React.useState();

  const onChange = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  useEffect(() => {
    if (data) {
        setValue(data[0].name);
        handleChange(data[0].name)
    }
  }, [data])

  return (
    <Radio.Group onChange={onChange} value={value}>
      {data &&
        data.map((color) => (
          <Radio value={color.name} key={color.name}>
            {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
          </Radio>
        ))}
    </Radio.Group>
  );
}
