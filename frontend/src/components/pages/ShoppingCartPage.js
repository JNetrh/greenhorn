import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ShoppingCartTemplate } from '../templates/ShoppingCartTemplate';
import { getItems } from '../../services/ShoppingCart/reducer';
import { resetCart } from '../../services/ShoppingCart/actions';

export class ShoppingCartPageRaw extends Component {
  render() {
    const { items, resetCart } = this.props;

    return <ShoppingCartTemplate items={items} onResetCartClick={resetCart} />;
  }
}

const mapStateToProps = storeState => ({
  items: getItems(storeState.shoppingCart),
});

const mapDispatchToProps = {
  resetCart,
};

export const ShoppingCartPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCartPageRaw);
