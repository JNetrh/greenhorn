import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Menu, Icon, Dropdown } from 'antd';
import { logOut } from '../../../services/Auth/actions';
import breakpoints from '../../../styles/breakpoints';

const AccountMenuWrapper = styled.div`
  padding: 0 5px;
  display: flex;
  @media (min-width: ${breakpoints.sm}) {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 0 15px;
  }

  > span {
    display: flex;
    align-items: center;
  }
  .user-icon {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 100%;
    line-height: initial;
  }
  .name {
    font-weight: bold;
    @media (max-width: ${breakpoints.md}) {
      display: none;
    }
  }
  .ant-menu-item {
    line-height: initial;
  }
`;

const MenuDropdown = ({ logOut }) => (
  <Menu>
    <Menu.Item key="myaccount">
      <Link to="/myaccount">
        <Icon type="user" /> My Account
      </Link>
    </Menu.Item>
    <Menu.Item key="changepwd">
      <Link to="/changepassword">
        {' '}
        <Icon type="lock" />
        Change password
      </Link>
    </Menu.Item>
    <Menu.Item key="logout" onClick={logOut}>
      <Icon type="logout" /> Logout
    </Menu.Item>
  </Menu>
);

const ConnectedMenu = connect(
  ({ auth: { user } }) => user,
  dispatch => ({ logOut: () => dispatch(logOut()) }),
)(MenuDropdown);

const AccountMenu = ({ name, surname }) => (
  <AccountMenuWrapper>
    <Dropdown overlay={<ConnectedMenu />}>
      <span>
        <div className="user-icon">
          <Icon type="user" />
        </div>
        <div className="name">
          {name} {surname}
        </div>
      </span>
    </Dropdown>
  </AccountMenuWrapper>
);

export default connect(({ auth: { user } }) => user)(AccountMenu);
