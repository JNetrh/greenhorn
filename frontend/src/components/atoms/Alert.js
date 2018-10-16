import React from 'react';
import classNames from 'classnames';

export const Alert = ({ className, variant, ...rest }) => (
  <div
    className={classNames('alert', `alert-${variant || 'danger'}`, className)}
    {...rest}
  />
);
