import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';

import api from '../api';
import { createRootReducer } from './createRootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const rootReducer = createRootReducer();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ api }))),
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
