import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import { HomePage } from './components/pages/HomePage';
import { ProductListPage } from './components/pages/ProductListPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { ContactPage } from './components/pages/ContactPage';
import { ContactDetail } from './components/pages/ContactDetail';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import { PageNotFound } from './components/pages/PageNotFound';

export const AppRoutes = () => (
  <PageWrapper>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" exact component={ProductListPage} />
      <Route path="/products/:productId" exact component={ProductDetailPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/contact/:contactId" exact component={ContactDetail} />
      <Route path="/cart" exact component={ShoppingCartPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </PageWrapper>
);
