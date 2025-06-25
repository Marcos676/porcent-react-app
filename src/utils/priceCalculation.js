const getDiscount = (price, discount) => (price * discount) / 100;

const getFinalPrice = (price, discount) => price - (price * discount) / 100;

const getTotalPrice = (products) => products.reduce((acc, currVal) => acc + getFinalPrice(currVal.originalPrice, currVal.porcentDiscount), 0)

const getTotalDiscount = (products) => products.reduce((acc, currVal) => acc + getDiscount(currVal.originalPrice, currVal.porcentDiscount), 0)

module.exports = {
  getDiscount,
  getFinalPrice,
  getTotalPrice,
  getTotalDiscount
};
