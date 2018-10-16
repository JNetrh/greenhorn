export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART.ADD_PRODUCT';
export const SHOPPING_CART_REMOVE_PRODUCT = 'SHOPPING_CART.REMOVE_PRODUCT';
export const SHOPPING_CART_RESET = 'SHOPPING_CART.RESET';

export const addProductToCart = product => ({
  type: SHOPPING_CART_ADD_PRODUCT,
  payload: {
    product,
  },
});

export const removeProductFromCart = productId => ({
  type: SHOPPING_CART_REMOVE_PRODUCT,
  payload: {
    productId,
  },
});

export const resetCart = () => ({
  type: SHOPPING_CART_RESET,
});
