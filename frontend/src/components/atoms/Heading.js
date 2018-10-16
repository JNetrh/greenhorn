import React from 'react';

export const Heading = ({ level, ...rest }) => {
  const Element = `h${level || '1'}`;

  return <Element {...rest} />;
};
