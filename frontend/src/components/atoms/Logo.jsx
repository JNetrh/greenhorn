import React from 'react';
import styled from 'styled-components';
import logo from '../../static/greenhorn_logo_dark.svg';

export const LogoWrapper = styled.div`
  position: absolute;
  top: -20px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  left: 0;
  right: 0;
  img {
    width: 190px;
    background: white;
  }
`;

const Logo = () => (
  <LogoWrapper>
    <img src={logo} alt="Greenhorn logo" />
  </LogoWrapper>
);

export default Logo;
