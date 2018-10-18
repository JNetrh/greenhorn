import React from 'react';
import { Select as AntSelect } from 'antd';

const Option = AntSelect.Option;

const Select = ({ options, input }) => {
  return (
    <AntSelect defaultValue={options[0].value} {...input}>
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </AntSelect>
  );
};

export default Select;
