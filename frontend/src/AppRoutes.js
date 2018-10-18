import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import { HomePage } from './components/pages/HomePage';
import { LoginPage } from './components/pages/LoginPage';
import { PageNotFound } from './components/pages/PageNotFound';


export const AppRoutes = () => (
  <Switch>
    <Route path="/login" exact component={LoginPage} />
    <PageWrapper>
      <Route path="/" exact strict component={HomePage} />
      <Route path="*" component={PageNotFound} />
    </PageWrapper>
  </Switch>
);


