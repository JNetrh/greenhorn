import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';

import { productListReducer } from '../services/ProductList/reducer';
import { authReducer } from '../services/Login/reducer';
import { AddUserReducer } from '../services/AddUser/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    productList: productListReducer,
    form: formReducer,
    auth: authReducer,
    addUser: AddUserReducer,
  });

  return persistReducer(persistConfig, rootReducer);
};
