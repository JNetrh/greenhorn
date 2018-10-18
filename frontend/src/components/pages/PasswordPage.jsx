import React, { Component } from 'react';
import styled from 'styled-components';
import PasswordForm from '../organisms/PasswordForm';

const RowWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default class PasswordPage extends Component {
  render() {
    return (
      <RowWrapper>
        <PasswordForm />
      </RowWrapper>
    );
  }
}
