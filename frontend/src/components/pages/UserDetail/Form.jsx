import React, { Component } from 'react';
import { Form, Button, Row, Col, Popconfirm, message, Icon } from 'antd';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Input from '../../molecules/form/Input';
import { PageFormWrapper } from '../../../styles/Forms';
const FormItem = Form.Item;
const FormWrapper = styled.div`
  max-width: 450px;
  .ant-btn {
    margin-top: 20px;
  }
`;

class UserDetail extends Component {
  confirm = async () => {
    const { startDeleteUser, user } = this.props;
    console.log(user);
    await startDeleteUser(user);
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <PageFormWrapper>
        <h2>User detail</h2>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={20}>
              <Col sm={12}>
                <FormItem label="First name">
                  <Field
                    name="name"
                    component={Input}
                    tabIndex={1}
                    iconType="user"
                    placeholder="First name"
                  />
                </FormItem>
              </Col>
              <Col sm={12}>
                <FormItem label="Last name">
                  <Field
                    name="surname"
                    component={Input}
                    tabIndex={2}
                    iconType="user"
                    placeholder="Last name"
                  />
                </FormItem>
              </Col>
            </Row>

            <FormItem label="Email">
              <Field
                name="email"
                component={Input}
                tabIndex={3}
                iconType="mail"
                placeholder="email"
              />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: '10px' }}
              >
                Save
              </Button>
              <Popconfirm
                title="Are you sure delete this user?"
                icon={
                  <Icon type="question-circle-o" style={{ color: 'red' }} />
                }
                onConfirm={this.confirm}
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger">Delete</Button>
              </Popconfirm>
            </FormItem>
          </Form>
        </FormWrapper>
      </PageFormWrapper>
    );
  }
}

export default UserDetail;
