import React, { Component } from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';

import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { configureStore } from './store/configureStore.js';
import { AppRoutes } from './AppRoutes';

const { store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <AppRoutes />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
