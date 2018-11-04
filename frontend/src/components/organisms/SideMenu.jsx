import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Menu, Icon } from 'antd';

const MenuItem = ({ title, icon, linkTo, ...rest }) => (
  <Link to={linkTo}>
    <Menu.Item {...rest}>
      <Icon type={icon} theme="outlined" />
      {title}
    </Menu.Item>
  </Link>
);

class SideMenu extends Component {
  render() {
    const {
      location: { pathname },
      structure,
    } = this.props;
    const defaultOpenKey = pathname.split('/').filter(i => i.length)[0];
    return (
      <Menu
        mode="inline"
        defaultOpenKeys={[defaultOpenKey]}
        selectedKeys={[pathname]}
      >
        {Object.entries(structure).map(([path, { icon, title, sub }]) => (
          <Menu.SubMenu
            key={path}
            title={
              <span>
                <Icon type={icon} />
                <span>{title}</span>
              </span>
            }
          >
            {Object.entries(sub).map(([subPath, { title, icon }]) => {
              const linkTo = `/${path}/${subPath}`;
              return (
                <MenuItem
                  key={linkTo}
                  title={title}
                  icon={icon}
                  linkTo={linkTo}
                />
              );
            })}
          </Menu.SubMenu>
        ))}
      </Menu>
    );
  }
}

export default withRouter(SideMenu);
