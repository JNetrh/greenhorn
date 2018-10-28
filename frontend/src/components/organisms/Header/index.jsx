import React from 'react';
import { Layout } from 'antd';
import MainMenu from '../MainMenu';

const Header = () => (
  <Layout.Header style={{ height: 'auto', padding: '0', display: 'flex' }}>
    <MainMenu />
  </Layout.Header>
);

export default Header;
