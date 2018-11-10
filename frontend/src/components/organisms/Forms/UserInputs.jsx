import React from 'react';
import { Row, Col, Transfer } from 'antd';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';
import Select from '../../molecules/form/Select';

export const ROLES = ['user', 'taskowner', 'hr'];

const padding = {
  padding: '0px 10px',
};

const RoleOptions = ROLES.map(role => ({ label: role, value: role }));
const mockData = [];

export const UserInputs = () => (
  <div>
    <Row gutter={20}>
      <Col sm={12}>
        <FormItemWithLabel
          label="First name"
          name="name"
          component={Input}
          iconType="user"
          placeholder="First name"
        />
      </Col>
      <Col sm={12}>
        <FormItemWithLabel
          label="Last name"
          name="surname"
          component={Input}
          iconType="user"
          placeholder="Last name"
        />
      </Col>
    </Row>
    <Row gutter={20}>
      <Col sm={16}>
        <FormItemWithLabel
          label="Email"
          name="email"
          component={Input}
          iconType="mail"
          placeholder="email"
        />
      </Col>
      <Col sm={8}>
        <FormItemWithLabel
          label="Role"
          name="role"
          component={Select}
          options={RoleOptions}
          iconType="lock"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <p style={padding}>Select group which will be assign to user: </p>
        <Transfer
          dataSource={mockData}
          listStyle={{
            width: 227,
            height: 300,
          }}
          titles={['All groups', 'Picked groups']}
          //targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          render={this.renderItem}
        />
      </Col>
    </Row>
  </div>
);
