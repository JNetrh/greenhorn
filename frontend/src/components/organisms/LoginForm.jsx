import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Checkbox } from 'antd';
import styled from 'styled-components';

import TextInput from '../atoms/TextInput';
import { Logo } from '../atoms/Logo';

const FormWrapper = styled.div`
  border: 1px solid #488869;
  padding: 25px 20px;
`;
const LoginButton = styled(Button)`
  width: 100%;
`;

const LogoWrapper = styled(Logo)`
  position: relative;
  top: -45px;
  background-color: white;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  float: right;
`;

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
            <StyledLink to="/password">Forgot password</StyledLink>
          </FormItem>
        </Form>
      </FormWrapper>
    );
  }
}

export default LoginForm;
