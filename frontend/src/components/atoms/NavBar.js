import React from 'react';
import classNames from 'classnames';

export const NavBar = ({ className, ...rest }) => (
  <div
    className={classNames('header', 'navbar', 'navbar-expand', className)}
    {...rest}
  />
);
