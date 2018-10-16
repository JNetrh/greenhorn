import React from 'react';
import classNames from 'classnames';

export const Button = ({
  title,
  type = 'button',
  variant = 'primary',
  size,
  className,
  children,
  ...rest
}) => (
  <button
    className={classNames(
      'btn',
      `btn-${variant}`,
      size ? `btn-${size}` : null,
      className,
    )}
    type={type}
    {...rest}
  >
    {title ? title : children}
  </button>
);
