import React from 'react';
import logo from '../../static/greenhorn_logo_dark.svg';

export const Logo = ({ className }) => (
  <div className={className}>
    <img src={logo} alt="Greenhorn logo" />
  </div>
);
