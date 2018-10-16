import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '../atoms/Button';
import { FontIcon } from '../atoms/FontIcon';
import { addProductToCart } from '../../services/ShoppingCart/actions';

export class AddProductToCartButtonRaw extends Component {
  render() {
    const { product, addProductToCart } = this.props;

    return (
      <Button
        onClick={() => addProductToCart && addProductToCart(product)}
        variant="success"
      >
        <FontIcon icon="cart-arrow-down" /> Add to cart
      </Button>
    );
  }
}

const mapStateToProps = storeState => ({});

const mapDispatchToProps = {
  addProductToCart,
};

export const AddProductToCartButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductToCartButtonRaw);
