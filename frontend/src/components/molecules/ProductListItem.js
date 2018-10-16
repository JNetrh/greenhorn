import React from 'react';

import { Heading } from '../atoms/Heading';
import { Layout } from '../atoms/Layout';
import { Link } from '../atoms/Link';
import { Paragraph } from '../atoms/Paragraph';
import { Price } from '../atoms/Price';
import { AddProductToCartButton } from '../molecules/AddProductToCartButton';

export const ProductListItem = ({ product }) => {
  const { id, title, price, shortInfo } = product;

  return (
    <Layout className="my-3 border-bottom">
      <Layout className="float-right">
        <AddProductToCartButton product={product} />
      </Layout>
      <Heading level="3">
        <Link to={`/products/${id}`}>{title}</Link>
      </Heading>
      <Paragraph>
        Price: <Price amount={price} />
      </Paragraph>
      <Paragraph>{shortInfo}</Paragraph>
    </Layout>
  );
};
