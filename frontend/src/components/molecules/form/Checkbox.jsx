import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';

const Checkbox = ({ children, input }) => {
  const getConnectedProps = () =>
    input && {
      onChange: e => input.onChange(e.target.checked),
      checked: !!input.value,
    };
  return <AntCheckbox {...getConnectedProps()}>{children}</AntCheckbox>;
};

export default Checkbox;
