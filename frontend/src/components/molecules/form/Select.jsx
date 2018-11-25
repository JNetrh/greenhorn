import React from 'react';
import { Select as AntSelect } from 'antd';

const Option = AntSelect.Option;

const Select = ({ options, input, ...rest }) => {
  return (
    <AntSelect {...{ ...input, ...rest }}>
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </AntSelect>
  );
};

export default Select;
