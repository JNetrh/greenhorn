import React, { Component } from 'react';
import styled from 'styled-components';
import ResetPasswordForm from '../organisms/ResetPasswordForm';

const RowWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default class LoginPage extends Component {
  render() {
    return (
      <RowWrapper>
        <ResetPasswordForm />
      </RowWrapper>
    );
  }
}