import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageWrapper from './components/organisms/PageWrapper';
import { NoPageWrapper } from './components/organisms/NoPageWrapper';
import PageNotFound from './components/pages/PageNotFound.jsx';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes';

export const AppRoutes = () => (
  <Switch>
    {publicRoutes.map(({ Component, path }) => (
      <Route
        exact
        path={path}
        key={path}
        render={function(route) {
          return (
            <NoPageWrapper route={route}>
              <Component />
            </NoPageWrapper>
          );
        }}
      />
    ))}
    {privateRoutes.map(({ Component, SideNav, path }) => (
      <Route
        exact
        path={path}
        key={path}
        render={function(route) {
          return (
            <PageWrapper {...{ SideNav, route }}>
              <Component />
            </PageWrapper>
          );
        }}
      />
    ))}
    <Route component={PageNotFound} />
  </Switch>
);
