import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Menu, Layout, Icon } from 'antd';
import { MenuStyle, LogoWrapper } from './style';
import logo from '../../../static/greenhorn_logo_dark.svg';

const MENU_ITEMS = [
  { title: 'To be done', to: '/' },
  { title: 'Tasks', to: '/tasks/list' },
  { title: 'Employees', to: '/users/list' },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }
  toggleOpen = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  };
  render() {
    const {
      location: { pathname },
    } = this.props;
    const path = pathname.split('/').filter(i => i.length)[0];
    const selectedKeys = MENU_ITEMS.filter(({ to }) => to.includes(path)).map(
      ({ to }) => to,
    );
    if (!selectedKeys.length) {
      selectedKeys.push('/');
    }
    const { isOpened } = this.state;
    return (
      <Layout.Header style={{ height: 'auto', padding: '0' }}>
        <MenuStyle isOpened={isOpened}>
          <LogoWrapper>
            <img src={logo} alt="Greenhorn logo" />
          </LogoWrapper>
          <div className="burger" onClick={this.toggleOpen}>
            <Icon type={`menu-${isOpened ? 'unfold' : 'fold'}`} />
          </div>
          <div className="menu-cont">
            <Menu
              mode="horizontal"
              selectedKeys={selectedKeys}
              style={{ lineHeight: '61px', flex: 1 }}
            >
              {MENU_ITEMS.map(({ title, to }) => (
                <Menu.Item key={to}>
                  <Link to={to}>{title}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </MenuStyle>
      </Layout.Header>
    );
  }
}

export default withRouter(Header);
