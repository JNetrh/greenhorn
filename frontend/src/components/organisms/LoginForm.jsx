import React, { Component } from 'react';
import { Form, Checkbox } from 'antd';

import TextInput from '../atoms/TextInput';
import {
  FormWrapper,
  LoginButton,
  LogoWrapper,
  StyledLink,
} from '../../styles/Login';

const FormItem = Form.Item;

class LoginForm extends Component {
  render() {
    return (
      <FormWrapper>
        <LogoWrapper />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            <TextInput iconType="user" placeholder="Username" />
          </FormItem>
          <FormItem>
            <TextInput iconType="lock" type="password" placeholder="Username" />
          </FormItem>
          <FormItem>
            <LoginButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </LoginButton>
            <Checkbox>Remember me</Checkbox>
            <StyledLink to="/resetpassword">Forgot password</StyledLink>
          </FormItem>
        </Form>
      </FormWrapper>
    );
  }
}

export default LoginForm;
