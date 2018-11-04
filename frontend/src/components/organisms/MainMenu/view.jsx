import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { MenuStyle, LogoWrapper } from './style';
import logo from '../../../static/greenhorn_logo_dark.svg';
import AccountMenu from '../AccountMenu';

class MainMenuView extends React.Component {
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

  getAllowedMenuItems = () => {
    const { menuItems, userRole } = this.props;
    return menuItems.filter(item => {
      if (item.roles) {
        if (item.roles.includes(userRole)) {
          return true;
        }
        return false;
      }
      return true;
    });
  };
  render() {
    const {
      location: { pathname },
      menuItems,
    } = this.props;
    const path = pathname.split('/').filter(i => i.length)[0];
    const selectedKeys = menuItems
      .filter(({ to }) => to.includes(path))
      .map(({ to }) => to);
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
            {this.getAllowedMenuItems().map(({ title, to }) => (
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

export default MainMenuView;
