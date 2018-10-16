export const PRODUCT_LIST_FETCH_PRODUCTS = 'PRODUCT_LIST_FETCH_PRODUCTS';
export const PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS =
  'PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS';
export const PRODUCT_LIST_FETCH_PRODUCTS_FAILURE =
  'PRODUCT_LIST_FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => ({
  type: PRODUCT_LIST_FETCH_PRODUCTS,
});

export const fetchProductsSuccess = products => ({
  type: PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = error => ({
  type: PRODUCT_LIST_FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

export const startFetchProducts = () => (dispatch, getState, { api }) => {
  dispatch(fetchProducts());

  api
    .get('products')
    .then(({ data }) => {
      const { products } = data;
      dispatch(fetchProductsSuccess(products));
    })
    .catch(() => {
      dispatch(fetchProductsFailure('Error fetching products'));
    });
};
