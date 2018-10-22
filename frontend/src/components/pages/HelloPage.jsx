import React, { Component } from 'react';
import Form from '../organisms/HelloForm';
import { Centered } from '../../styles/Login';

export default class PasswordPage extends Component {
  render() {
    return (
      <Centered>
        <Form />
      </Centered>
    );
  }
}
