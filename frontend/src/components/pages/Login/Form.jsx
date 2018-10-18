import React, { Component } from 'react';
import { Form } from 'antd';
import { Field } from 'redux-form';

import {
  FormWrapper,
  LoginButton,
  LogoWrapper,
  StyledLink,
  Centered,
} from '../../../styles/Login';
import Select from '../../molecules/form/Select';
import Input from '../../molecules/form/Input';
import Checkbox from '../../molecules/form/Checkbox';

const FormItem = Form.Item;

class LoginForm extends Component {
  render() {
    const { handleSubmit, emailEndings } = this.props;
    return (
      <Centered>
        <FormWrapper>
          <LogoWrapper />
          <Form onSubmit={handleSubmit(console.log)} className="login-form">
            <FormItem>
              <Field
                name="email"
                component={Input}
                iconType="user"
                placeholder="Email address"
                tabIndex={1}
                addonAfter={
                  <Field
                    name="emailEnding"
                    component={Select}
                    options={emailEndings}
                  />
                }
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
            <FormItem>
              <LoginButton type="primary" htmlType="submit">
                Log in
              </LoginButton>
              <Field name="rememberMe" component={Checkbox}>
                Remember me
              </Field>
              <StyledLink to="/resetpassword">Forgot password</StyledLink>
            </FormItem>
          </Form>
        </FormWrapper>
      </Centered>
    );
  }
}

export default LoginForm;
