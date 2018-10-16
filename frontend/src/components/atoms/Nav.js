import React from 'react';
import classNames from 'classnames';

export const Nav = ({ className, ...rest }) => (
  <ul className={classNames('nav', className)} {...rest} />
);
