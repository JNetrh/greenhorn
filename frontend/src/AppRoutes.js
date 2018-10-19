import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';
import { NoPageWrapper } from './components/organisms/NoPageWrapper';
import PageNotFound from './components/pages/PageNotFound.jsx';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes';

export const AppRoutes = () => (
  <Switch>
    {Object.keys(publicRoutes).map(key => {
      const { Component, path } = publicRoutes[key];
      return (
        <Route
          exact
          path={path}
          key={key}
          render={route => (
            <NoPageWrapper route={route}>
              <Component />
            </NoPageWrapper>
          )}
        />
      );
    })}
    {Object.keys(privateRoutes).map(key => {
      const { Component, path } = privateRoutes[key];
      return (
        <Route
          exact
          path={path}
          key={key}
          render={route => (
            <PageWrapper route={route}>
              <Component />
            </PageWrapper>
          )}
        />
      );
    })}
    <Route component={PageNotFound} />
  </Switch>
);
