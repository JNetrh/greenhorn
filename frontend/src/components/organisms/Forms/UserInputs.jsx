import React from 'react';
import { Row, Col } from 'antd';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';
import Select from '../../molecules/form/Select';
import Transfer from '../../molecules/form/Transfer';

export const ROLES = ['user', 'taskowner', 'hr'];

const RoleOptions = ROLES.map(role => ({ label: role, value: role }));

export const UserInputs = ({ groups }) => {
  const data = groups.groups.map(({ id, name }) => ({
    key: id,
    title: name,
  }));
  console.log('data ', data);
  return (
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
          <FormItemWithLabel
            label={'Select groups to be assigned with this user:'}
            name={'groups'}
            dataSource={data}
            style={{
              display: 'flex',
              marginTop: 10,
            }}
            isLoading={groups.isLoading}
            component={Transfer}
            listStyle={{ flex: 1, height: 300 }}
            titles={['All groups', 'Picked groups']}
            render={item => item.title}
          />
        </Col>
      </Row>
    </div>
  );
};
