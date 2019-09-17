const { Product } = require('Models');

const getProduct = async (req, res, next) => {
  const products = await Product.find({});
  res.json({
    code: 200,
    data: {
      products
    },
    success: true
  });
};

const addProduct = async (req, res, next) => {
  const { productName, price } = req.body;
  const products = await new Product({
    productName,
    price
  }).save();
  res.json({
    code: 200,
    data: {
      products
    },
    success: true
  });
};

module.exports = {
  getProduct,
  addProduct
};
