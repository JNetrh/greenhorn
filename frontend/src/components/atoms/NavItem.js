import React from 'react';
import classNames from 'classnames';

export const NavItem = ({ className, ...rest }) => (
  <li className={classNames('nav-item', className)} {...rest} />
);
