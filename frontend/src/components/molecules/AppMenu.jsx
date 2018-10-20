import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';

export default function AppMenu() {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1" Link to="/">
        <span>To be done</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2">Tasks</Menu.Item>
      <Menu.Item key="3">
        <span>Employees</span>
        <Link to="/adduser" />
      </Menu.Item>
    </Menu>
  );
}
