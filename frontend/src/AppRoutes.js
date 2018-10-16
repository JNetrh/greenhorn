import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import { HomePage } from './components/pages/HomePage';
import { PageNotFound } from './components/pages/PageNotFound';

export const AppRoutes = () => (
  <PageWrapper>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </PageWrapper>
);
