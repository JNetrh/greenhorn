import React from 'react';
import classNames from 'classnames';

export const Paragraph = ({ muted, className, ...rest }) => (
  <p className={classNames({ 'text-muted': muted }, className)} {...rest} />
);
