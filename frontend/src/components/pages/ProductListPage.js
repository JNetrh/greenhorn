import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PRODUCTS } from '../../mock-data';
import { ProductListTemplate } from '../templates/ProductListTemplate';
import { startFetchProducts } from '../../services/ProductList/actions';
import {
  getProducts,
  getIsLoaded,
  getIsLoading,
  getIsError,
  getError,
} from '../../services/ProductList/reducer';

class ProductListPageRaw extends Component {
  componentDidMount() {
    const { startFetchProducts, isLoaded } = this.props;
    if (isLoaded) {
      return;
    }

    startFetchProducts();
  }

  render() {
    const { products, isLoading, isLoaded, isError, error } = this.props;

    return (
      <ProductListTemplate
        isLoading={isLoading}
        isLoaded={isLoaded}
        isError={isError}
        products={products}
        error={error}
      />
    );
  }
}

const mapStateToProps = storeState => {
  const { productList } = storeState;
  return {
    isLoading: getIsLoading(productList),
    isLoaded: getIsLoaded(productList),
    isError: getIsError(productList),
    products: getProducts(productList),
    error: getError(productList),
  };
};

// actions
const mapDispatchToProps = {
  startFetchProducts,
};

export const ProductListPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListPageRaw);
