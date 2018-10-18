import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import HomePage from './components/pages/HomePage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import ResetPasswordPage from './components/pages/ResetPasswordPage.jsx';
import Password from './components/pages/PasswordPage.jsx';
import PageNotFound from './components/pages/PageNotFound.jsx';


export const AppRoutes = () => (
  <PageWrapper>
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/resetpassword" exact component={ResetPasswordPage} />
      <Route path="/password" exact component={Password} />
      <Route path="/" exact strict component={HomePage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </PageWrapper>
);


