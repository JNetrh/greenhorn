import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productListReducer } from '../services/ProductList/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    productList: productListReducer,
  });

  return persistReducer(persistConfig, rootReducer);
};
