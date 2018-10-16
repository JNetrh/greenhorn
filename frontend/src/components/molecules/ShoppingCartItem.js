import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '../atoms/Button';
import { FontIcon } from '../atoms/FontIcon';
import { Heading } from '../atoms/Heading';
import { Layout } from '../atoms/Layout';
import { removeProductFromCart } from '../../services/ShoppingCart/actions';

export class ShoppingCartItemRaw extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { product, count, removeProductFromCart } = this.props;

    return (
      <Heading level="5" className="row">
        <Layout className="col-sm-4">{product.title}</Layout>
        <Layout className="col-sm-3 text-right">
          {count}
          &times;
        </Layout>
        <Layout className="col-sm-4 text-right">
          {product.price}
          &nbsp;Kč
        </Layout>
        <Layout className="col-sm-1 text-right">
          <Button
            onClick={() => removeProductFromCart(product.id)}
            variant="danger"
            size="sm"
          >
            <FontIcon icon="trash" />
          </Button>
        </Layout>
      </Heading>
    );
  }
}

const mapStateToProps = storeState => ({});

const mapDispatchToProps = {
  removeProductFromCart,
};

export const ShoppingCartItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCartItemRaw);
