import React from 'react';
import { Row, Col } from 'antd';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';

export const UserInputs = () => (
  <div>
    <Row gutter={20}>
      <Col sm={12}>
        <FormItemWithLabel
          label="First name"
          name="name"
          component={Input}
          tabIndex={1}
          iconType="user"
          placeholder="First name"
        />
      </Col>
      <Col sm={12}>
        <FormItemWithLabel
          label="Last name"
          name="surname"
          component={Input}
          tabIndex={2}
          iconType="user"
          placeholder="Last name"
        />
      </Col>
    </Row>
    <FormItemWithLabel
      label="Email"
      name="email"
      component={Input}
      tabIndex={3}
      iconType="mail"
      placeholder="email"
    />
  </div>
);
