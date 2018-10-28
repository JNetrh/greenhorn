import React, { Component } from 'react';
import ResetPasswordForm from '../organisms/ResetPasswordForm';
import { Centered } from '../../styles/Login';

export default class LoginPage extends Component {
  render() {
    return (
      <Centered>
        <ResetPasswordForm />
      </Centered>
    );
  }
}
