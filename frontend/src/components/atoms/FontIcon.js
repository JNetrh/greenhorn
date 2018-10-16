import React from 'react';
import classNames from 'classnames';

import '@fortawesome/fontawesome-free/css/all.css';

export const FontIcon = ({ icon, variant, spin, className, ...rest }) => (
  <i
    className={classNames(
      `fa${variant || 's'}`,
      `fa-${icon}`,
      { 'fa-spin': spin },
      className,
    )}
    {...rest}
  />
);
