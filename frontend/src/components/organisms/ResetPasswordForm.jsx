import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'antd';
import { FormWrapper } from '../../styles/Login';
import Input from '../molecules/form/Input';
import Logo from '../atoms/Logo';

const FormItem = Form.Item;

class ResetPasswordForm extends Component {
  render() {
    return (
      <FormWrapper>
        <Logo />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2>Forgotten password</h2>
          <p>
            Please fill in your email, click send and follow the instructions
            sent to your email.
          </p>
          <Input iconType="user" placeholder="Your email" />
          <FormItem style={{ margin: '20px 0 0 0' }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Reset password
            </Button>
            <Link to="/login">
              <Button>Back to login</Button>
            </Link>
          </FormItem>
        </Form>
      </FormWrapper>
    );
  }
}

export default ResetPasswordForm;
