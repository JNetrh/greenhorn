import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';

import { FormWrapper, StyledLink, FormItem } from './style';
import Input from '../../molecules/form/Input';
import Checkbox from '../../molecules/form/Checkbox';
import Logo from '../../atoms/Logo';
import { Centered } from '../../atoms/Centered';

class LoginForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <Centered>
        <FormWrapper>
          <Logo />
          <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <FormItem>
              <Field
                name="email"
                component={Input}
                iconType="user"
                placeholder="Email address"
                tabIndex={1}
              />
            </FormItem>
            <FormItem>
              <Field
                name="password"
                component={Input}
                tabIndex={2}
                iconType="lock"
                type="password"
                placeholder="Password"
              />
            </FormItem>
            <FormItem style={{ margin: '0 0 20px 0' }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Log in
              </Button>
            </FormItem>
            <Field name="rememberMe" component={Checkbox}>
              Remember me
            </Field>
            <StyledLink to="/password">Forgot password</StyledLink>
          </Form>
        </FormWrapper>
      </Centered>
    );
  }
}

export default LoginForm;
