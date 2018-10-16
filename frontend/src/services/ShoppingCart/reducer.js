import {
  SHOPPING_CART_ADD_PRODUCT,
  SHOPPING_CART_REMOVE_PRODUCT,
  SHOPPING_CART_RESET,
} from './actions';

const initialState = {
  items: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_CART_ADD_PRODUCT: {
      const { product } = action.payload;

      if (state.items.some(i => i.product.id === product.id)) {
        return {
          ...state,
          items: state.items.map(item => {
            if (item.product.id !== product.id) {
              return item;
            }

            return {
              ...item,
              count: item.count + 1,
            };
          }),
        };
      }

      return {
        ...state,
        items: [...state.items, { product, count: 1 }],
      };
    }

    case SHOPPING_CART_REMOVE_PRODUCT: {
      const { productId } = action.payload;

      return {
        ...state,
        items: state.items.filter(item => item.product.id !== productId),
      };
    }

    case SHOPPING_CART_RESET:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

// -- selectors -- //

export const getItems = state => state.items;

export const getNumberOfItems = state =>
  state.items.reduce((sum, item) => sum + item.count, 0);
