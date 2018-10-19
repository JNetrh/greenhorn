import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from '../../../organisms/LoginForm';
import Centered from '../../../styles/Login';

export default class LoginPage extends Component {
  render() {
    return (
      <Centered>
        <LoginForm />
      </Centered>
    );
  }
}
