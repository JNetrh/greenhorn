import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: ['2'] };
  }

  clickMenu = ({ item, key, keyPath }) => {
    const { setActiveMenuItem } = this.props;
    setActiveMenuItem(keyPath);
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
        <Menu.Item key="2">
          <Link to="/">Tasks</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/users/list">Employees</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
