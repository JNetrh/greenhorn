import React from 'react';

export const Price = ({ amount, currency, ...rest }) => (
  <span {...rest}>
    {amount} {currency || 'Kč'}
  </span>
);
