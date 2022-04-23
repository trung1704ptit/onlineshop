import { Radio } from 'antd';
import React from 'react';

export default function ColorOptions({ data }) {
    const [value, setValue] = React.useState(null);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={onChange} value={value}>
            {data && data.map(color => (
                <Radio value={color.name} key={color.name}>{color.name.charAt(0).toUpperCase() + color.name.slice(1)}</Radio>
            ))}
        </Radio.Group>
    )
}