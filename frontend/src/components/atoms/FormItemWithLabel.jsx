import React from 'react';
import { Form } from 'antd';
import { Field } from 'redux-form';

export const FormItemWithLabel = props => (
  <Form.Item label={props.label}>
    <Field {...props} />
  </Form.Item>
);
