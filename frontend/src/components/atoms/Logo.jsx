import React from 'react';
import './css/logo.css';
import logo from '../../static/greenhorn_logo_dark.svg';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Greenhorn logo" />
    </div>
  );
}
