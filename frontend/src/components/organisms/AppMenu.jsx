import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Menu } from 'antd';

const MENU_ITEMS = [
  { title: 'To be done', to: '/' },
  { title: 'Tasks', to: '/tasks/list' },
  { title: 'Employees', to: '/users/list' },
];

const AppMenu = ({ location }) => {
  const { pathname } = location;
  const path = pathname.split('/').filter(i => i.length)[0];
  const selectedKeys = MENU_ITEMS.filter(({ to }) => to.includes(path)).map(
    ({ to }) => to,
  );
  if (!selectedKeys.length) {
    selectedKeys.push('/');
  }
  return (
    <Menu
      mode="horizontal"
      selectedKeys={selectedKeys}
      style={{ lineHeight: '64px' }}
    >
      {MENU_ITEMS.map(({ title, to }) => (
        <Menu.Item key={to}>
          <Link to={to}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default withRouter(AppMenu);
