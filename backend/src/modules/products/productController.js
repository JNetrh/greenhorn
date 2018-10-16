import { PRODUCTS } from './testData';

export const productsController = async (req, res) => {
  return res.json({ products: PRODUCTS });
};

export const productDetailController = async (req, res, next) => {
  const productId = Number(req.params.id);
  const product = findProductById(productId);

  if (!product) {
    next();
  }

  return res.json({ product });
};

// - helpers - //

const findProductById = productId => {
  return PRODUCTS.find(item => {
    return item.id === productId;
  });
};
