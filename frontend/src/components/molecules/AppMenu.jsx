import React from 'react';

import { Menu } from 'antd';

export default function AppMenu() {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">To be done</Menu.Item>
      <Menu.Item key="2">Tasks</Menu.Item>
      <Menu.Item key="3">Employees</Menu.Item>
    </Menu>
  );
}
