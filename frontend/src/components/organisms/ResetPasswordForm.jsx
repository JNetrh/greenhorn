import React, { Component } from 'react';
import { Form } from 'antd';
import { FormWrapper, LogoWrapper, LoginButton } from '../../styles/Login';
import Input from '../molecules/form/Input';

const FormItem = Form.Item;

class ResetPasswordForm extends Component {
  render() {
    return (
      <FormWrapper>
        <LogoWrapper />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2>Forgotten password</h2>
          <p>
            Please fill in your email, click send and follow the instructions
            sent to your email.
          </p>
          <FormItem>
            <Input iconType="user" placeholder="Your email" />
            <LoginButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Reset password
            </LoginButton>
          </FormItem>
        </Form>
      </FormWrapper>
    );
  }
}

export default ResetPasswordForm;
