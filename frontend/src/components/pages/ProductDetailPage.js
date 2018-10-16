import React, { Component } from 'react';

import api from '../../api.js';

import { ProductDetailTemplate } from '../templates/ProductDetailTemplate';

export class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: 0,
      product: null,
    };
  }

  componentDidMount() {
    const { productId } = this.props.match.params;

    api(`products/${productId}`).then(response => {
      const { product } = response.data;
      this.setState({ product });
    });
  }

  selectTab = tabId => {
    this.setState({ activeTabId: tabId });
  };

  render() {
    const { product, activeTabId } = this.state;

    return (
      <ProductDetailTemplate
        isLoading={!product}
        product={product}
        activeTabId={activeTabId}
        selectTab={this.selectTab}
      />
    );
  }
}
