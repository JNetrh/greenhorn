import React from 'react';
import logo from '../../static/greenhorn_logo_dark.svg';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 170px;
`;


export const Logo = ({ className }) => (
  <LogoWrapper className={className}>
    <img src={logo} alt="Greenhorn logo" />
  </LogoWrapper>
);
