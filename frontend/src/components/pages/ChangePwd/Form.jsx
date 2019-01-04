import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Input from '../../molecules/form/Input';
import { PageFormWrapper } from '../../atoms/Forms';
import { Centered } from '../../atoms/Centered';

const CenteredForm = styled.div`
  max-width: 350px;
  margin-top: 40px;
  .ant-btn {
    margin-top: 15px;
  }
`;

const FormItem = Form.Item;

class ChangePwd extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <PageFormWrapper>
        <Centered>
          <CenteredForm>
            <h2>Change your password</h2>
            <p>
              Please write your current password first. Then please add your new
              password and write it again just for a case ;-).
            </p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormItem label="Current password">
                <Field
                  name="currentPassword"
                  type="password"
                  component={Input}
                  tabIndex={1}
                  iconType="lock"
                  placeholder="Current password"
                />
              </FormItem>
              <FormItem label="New password">
                <Field
                  name="newPassword"
                  type="password"
                  component={Input}
                  tabIndex={2}
                  iconType="lock"
                  placeholder="New password"
                  s
                />
              </FormItem>
              <FormItem label="New password again">
                <Field
                  type="password"
                  name="newPasswordCheck"
                  component={Input}
                  tabIndex={4}
                  iconType="lock"
                  placeholder="New password again"
                />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Submit change
                </Button>
              </FormItem>
            </Form>
          </CenteredForm>
        </Centered>
      </PageFormWrapper>
    );
  }
}

export default ChangePwd;
