import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Input from '../../molecules/form/Input';
import { FormItem } from '../../../styles/Login';
import { Centered } from '../../../styles/Login';

const CenteredForm = styled.div`
  padding: 35px 45px 25px 45px;
  width: 450px;
  max-width: 100%;
  position: relative;
  .ant-btn {
    margin-right: 10px;
  }
`;

class ChangePwd extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
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
                name="currentpwd"
                component={Input}
                tabIndex={1}
                iconType="lock"
                placeholder="Current password"
              />
            </FormItem>
            <FormItem label="New password">
              <Field
                name="newpwd"
                component={Input}
                tabIndex={2}
                iconType="lock"
                placeholder="New password"
              />
            </FormItem>
            <FormItem label="New password again">
              <Field
                type="newpwdcheck"
                name="password"
                component={Input}
                tabIndex={4}
                iconType="lock"
                placeholder="New password again"
              />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.enterIconLoading}
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        </CenteredForm>
      </Centered>
    );
  }
}

export default ChangePwd;
