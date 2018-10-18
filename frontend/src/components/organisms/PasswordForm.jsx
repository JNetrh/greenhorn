import React, { Component } from 'react';
import { Form, Button} from 'antd';
import styled from 'styled-components';

import TextInput from '../atoms/TextInput';
import { Logo } from '../atoms/Logo';

const FormWrapper = styled.div`
  border: 1px solid #488869;
  padding: 25px 20px ;
  min-width: 300px;
`;

const PasswordTitle = styled.h1`
  text-align: center;
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



const FormItem = Form.Item;

class PasswordForm extends Component {
  render() {
    return (
      <FormWrapper>
        <LogoWrapper />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <PasswordTitle>Nastavení hesla</PasswordTitle>
          <p>Vaše heslo:</p>
          <FormItem>
            <TextInput iconType="lock" placeholder="password" />
          </FormItem>
          <p>Znova vaše heslo:</p>
          <FormItem>
            <TextInput iconType="lock" type="password" placeholder="password" />
          </FormItem>
          <FormItem>
            <LoginButton type="primary" htmlType="submit" className="login-form-button">
              Nastavit
            </LoginButton>
          </FormItem>
        </Form>
      </FormWrapper>
    );
  }
}

export default PasswordForm;
