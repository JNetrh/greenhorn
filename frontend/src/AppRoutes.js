import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import HomePage from './components/pages/HomePage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import RecoverPage from './components/pages/RecoverPage.jsx';
import PageNotFound from './components/pages/PageNotFound.jsx';


export const AppRoutes = () => (
  <Switch>
    <Route path="/login" exact component={LoginPage} />
    <Route path="/recover" exact component={RecoverPage} />
    <PageWrapper>
      <Route path="/" exact strict component={HomePage} />
      <Route path="*" component={PageNotFound} />
    </PageWrapper>
  </Switch>
);


