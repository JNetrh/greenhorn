import React, { Component } from 'react';

import { Layout } from '../atoms/Layout';
import { ProductListItem } from '../molecules/ProductListItem';

export class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <Layout>
        {products.map(product => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </Layout>
    );
  }
}
