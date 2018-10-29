import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'antd';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Input from '../../molecules/form/Input';
import { PageFormWrapper } from '../../../styles/Forms';
import Select from '../../molecules/form/Select';
import { EMAIL_ENDINGS } from '../Login';

const FormItem = Form.Item;

const FormWrapper = styled.div`
  max-width: 450px;
  .ant-btn {
    margin-top: 20px;
  }
`;
class AddUserForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <PageFormWrapper>
        <h2>Add user</h2>
        <p>
          First step to add user is to fill his or her first name and last name.
          Then please add email.
        </p>
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

                  {/* <Input placeholder="" /> */}
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
                addonAfter={
                  <Field
                    name="emailEnding"
                    component={Select}
                    options={EMAIL_ENDINGS}
                  />
                }
              />
            </FormItem>
            <FormItem label="Password (will not be here)">
              <Field
                type="password"
                name="password"
                component={Input}
                tabIndex={4}
                iconType="lock"
                placeholder="password"
              />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.enterIconLoading}
              >
                Create user
              </Button>
            </FormItem>
          </Form>
        </FormWrapper>
      </PageFormWrapper>
    );
  }
}

export default AddUserForm;
