import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import { PageWrapper } from './components/organisms/PageWrapper';
import { NoPageWrapper } from './components/organisms/NoPageWrapper';
import PageNotFound from './components/pages/PageNotFound.jsx';

import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';

import './App.css';
import { configureStore } from './store/configureStore.js';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ScrollToTop>
              <Switch>

                {_.map(publicRoutes, (route, key) => {
                  const { Component, path } = route;
                  return (
                    <Route
                      exact
                      path={path}
                      key={key}
                      render={(route) => <NoPageWrapper route={route} ><Component /></NoPageWrapper>}
                    />
                  );
                })}

                {_.map(privateRoutes, (route, key) => {
                  const { Component, path } = route;
                  return (
                    <Route
                      exact
                      path={path}
                      key={key}
                      render={(route) => <PageWrapper route={route} ><Component /></PageWrapper>
                      }
                    />
                  );
                })}


                <Route component={PageNotFound} />
              </Switch>
            </ScrollToTop>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
