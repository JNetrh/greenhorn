import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Menu, Icon } from 'antd';
import { MenuStyle, LogoWrapper } from './style';
import logo from '../../../static/greenhorn_logo_dark.svg';
import AccountMenu from '../AccountMenu';

const MENU_ITEMS = [
  { title: 'To be done', to: '/' },
  { title: 'Tasks', to: '/tasks/list' },
  { title: 'Employees', to: '/users/list' },
];

class MainMenu extends React.Component {
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
      <MenuStyle isOpened={isOpened}>
        <Link to="/">
          <LogoWrapper>
            <img src={logo} alt="Greenhorn logo" />
          </LogoWrapper>
        </Link>
        <div className="burger" onClick={this.toggleOpen}>
          <Icon type={`menu-${isOpened ? 'unfold' : 'fold'}`} />
        </div>
        <AccountMenu />
        <div className="menu-cont">
          <Menu
            mode="horizontal"
            selectedKeys={selectedKeys}
            style={{ lineHeight: '57px', flex: 1 }}
          >
            {MENU_ITEMS.map(({ title, to }) => (
              <Menu.Item key={to}>
                <Link to={to}>{title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </MenuStyle>
    );
  }
}

export default withRouter(MainMenu);
