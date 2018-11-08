import React from 'react';
import { Form, Spin } from 'antd';
import { Field } from 'redux-form';

export const FormItemWithLabel = props => (
  <Form.Item label={props.label}>
    <Spin spinning={!!props.isLoading}>
      <Field {...props} />
    </Spin>
  </Form.Item>
);
