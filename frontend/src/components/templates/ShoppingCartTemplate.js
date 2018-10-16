import React, { Component } from 'react';

import { Button } from '../atoms/Button';
import { Layout } from '../atoms/Layout';
import { Jumbotron } from '../atoms/Jumbotron';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';
import { ShoppingCartItem } from '../molecules/ShoppingCartItem';

export class ShoppingCartTemplate extends Component {
  render() {
    const { items, onResetCartClick } = this.props;

    return (
      <Layout>
        <Jumbotron>
          <Heading>Shopping Cart</Heading>
        </Jumbotron>

        {items.length === 0 ? (
          <Paragraph>Cart is empty...</Paragraph>
        ) : (
          <Layout className="clearfix mb-4">
            <Button
              title="Reset Cart"
              variant="danger"
              className="float-right"
              onClick={onResetCartClick}
            />
          </Layout>
        )}

        {items.map(item => (
          <ShoppingCartItem
            key={item.product.id}
            product={item.product}
            count={item.count}
          />
        ))}
      </Layout>
    );
  }
}
