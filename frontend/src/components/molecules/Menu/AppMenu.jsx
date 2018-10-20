import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: ['2'] };
  }

  clickMenu = ({ item, key, keyPath }) => {
    const { _setActiveMenuItem } = this.props;
    _setActiveMenuItem(keyPath);
  };

  render() {
    return (
      <Menu
        mode="horizontal"
        selectedKeys={this.props.activeMenu}
        style={{ lineHeight: '64px' }}
        onClick={this.clickMenu}
      >
        <Menu.Item key="1">
          <Link to="/">To be done</Link>
        </Menu.Item>
        <Menu.Item key="2">Tasks</Menu.Item>
        <Menu.Item key="3">
          <Link to="/adduser">Employees</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
