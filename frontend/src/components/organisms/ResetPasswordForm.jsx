import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button,  Col} from 'antd';
import styled from 'styled-components';

import TextInput from '../atoms/TextInput';
import { Logo } from '../atoms/Logo';

const FormWrapper = styled.div`
  border: 1px solid #488869;
  padding: 25px 20px ;
`;

const LoginButton = styled(Button)`
    width: 100%;
    margin:  20px 0px ;
`;

const centerText = {
  textAlign: 'center',
};

const description = {
  maxWidth: '450px',
  textAlign: 'center',
  // padding: '15px 20px',
};

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

class ResetPasswordForm extends Component {
  render() {
    return (
      <FormWrapper>
        <LogoWrapper />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div>
            <row>
              <h1 style={centerText}>Zapomenuté heslo</h1>
            </row>
            <row>
              <p style={description}>
                Pokud jste zapomněl heslo od aplikace, vyplňte niže Váš email,
                    na který Vám přijde odkaz na vygenerování nového emailu
              </p>
            </row>
          </div>
          <FormItem>
            <TextInput  iconType="user"  placeholder="Your email" />
            <LoginButton type="primary" htmlType="submit" className="login-form-button">
              Odeslat
            </LoginButton>
          </FormItem>
        </Form>
      </FormWrapper>
    );
  }
}

export default ResetPasswordForm;
