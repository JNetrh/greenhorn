import React from 'react';
import classNames from 'classnames';

export const Jumbotron = ({ className, ...rest }) => (
  <div className={classNames('jumbotron', className)} {...rest} />
);
