import React, { Component } from 'react';
import { Input } from 'antd';
import FormItem from './FormItem';

const TextArea = props => {
  const { placeholder, input, ...rest } = props;
  return (
    <FormItem {...props}>
      <Input.TextArea
        placeholder={placeholder || ''}
        {...{ ...input, ...rest }}
      />
    </FormItem>
  );
};

export default TextArea;
