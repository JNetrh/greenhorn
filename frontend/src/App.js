import React, { Component } from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';

import { Router } from 'react-router-dom';
import history from './history';

import './App.css';
import { configureStore } from './store/configureStore.js';
import { AppRoutes } from './AppRoutes';

const { store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <AppRoutes />
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
