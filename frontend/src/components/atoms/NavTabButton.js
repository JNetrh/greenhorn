import React from 'react';
import classNames from 'classnames';

export const NavTabButton = ({ active, className, ...rest }) => (
  <button
    className={classNames('btn', 'btn-link', 'nav-link', {
      active,
    })}
    type="button"
    {...rest}
  />
);
