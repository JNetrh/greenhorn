import React, { Component } from 'react';
import { Form, Checkbox, Select } from 'antd';

import TextInput from '../atoms/TextInput';
import {
  FormWrapper,
  LoginButton,
  LogoWrapper,
  StyledLink,
} from '../../styles/Login';

const FormItem = Form.Item;
const Option = Select.Option;

const MailEndings = () => {
  const MAIL_ENDINGS = ['@cngroup.dk', '@google.com'];
  return (
    <Select defaultValue={MAIL_ENDINGS[0]}>
      {MAIL_ENDINGS.map(ending => (
        <Option key={ending} value={ending}>
          {ending}
        </Option>
      ))}
    </Select>
  );
};

class LoginForm extends Component {
  render() {
    return (
      <FormWrapper>
        <LogoWrapper />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            <TextInput
              iconType="user"
              placeholder="Email address"
              tabIndex={1}
              addonAfter={<MailEndings />}
            />
          </FormItem>
          <FormItem>
            <TextInput
              tabIndex={2}
              iconType="lock"
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <LoginButton type="primary" htmlType="submit">
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
