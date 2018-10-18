import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from '../organisms/LoginForm';

const RowWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export class LoginPage extends Component {
  render() {
    return (
      <RowWrapper>
        <LoginForm />
      </RowWrapper>
    );
  }
}
