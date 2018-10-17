import React from 'react';
import logo from '../../static/greenhorn_logo_dark.svg';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 170px;
  margin: -5px 20px 0 20px;
  float: left;
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <img src={logo} alt="Greenhorn logo" />
    </LogoWrapper>
  );
}
