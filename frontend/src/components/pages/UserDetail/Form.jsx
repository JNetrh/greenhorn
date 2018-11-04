import React from 'react';
import { Row, Col } from 'antd';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';

const Form = props => (
  <CreateEditForm type="edit" itemName="user" {...props}>
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
  </CreateEditForm>
);

export default Form;
