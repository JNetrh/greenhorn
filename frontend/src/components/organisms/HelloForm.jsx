import React, { Component } from 'react';
import { Form, Button } from 'antd';
import styled from 'styled-components';

import logo from '../../static/greenhorn_logo_dark.svg';
import Input from '../molecules/form/Input';
import { FormWrapper, FormItem } from '../../styles/Login';

const LogoWrapper = styled.div`
  margin: 0 0 60px 0;
  text-align: center;
  img {
    max-width: 100%;
    width: 350px;
  }
`;

class PasswordForm extends Component {
  render() {
    return (
      <div>
        <LogoWrapper>
          <img src={logo} alt="Greenhorn logo" />
        </LogoWrapper>
        <FormWrapper>
          <h2>Hello, Petr Klíč!</h2>
          <p>
            First steps in a new company are not always easy, but Greenhorn will
            try to guide you through your needs.{' '}
          </p>
          <p>First, please set up your password:</p>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input iconType="lock" placeholder="New password" />
            </FormItem>
            <FormItem>
              <Input
                iconType="lock"
                type="password"
                placeholder="Repeat password"
              />
            </FormItem>
            <FormItem>
              <Button type="primary" size="large" htmlType="submit">
                Let&#39;s begin!
              </Button>
            </FormItem>
          </Form>
        </FormWrapper>
      </div>
    );
  }
}

export default PasswordForm;
