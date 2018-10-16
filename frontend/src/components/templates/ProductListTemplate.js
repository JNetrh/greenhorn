import React from 'react';

import { Layout } from '../atoms/Layout';
import { Jumbotron } from '../atoms/Jumbotron';
import { Heading } from '../atoms/Heading';
import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';
import { ProductList } from '../organisms/ProductList';

export const ProductListTemplate = ({
  isLoading,
  isLoaded,
  isError,
  products,
  error,
}) => {
  if (isError && !isLoading) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading && !isLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <Layout>
      <Jumbotron>
        <Heading>All Products</Heading>
      </Jumbotron>
      <ProductList products={products} />
    </Layout>
  );
};
