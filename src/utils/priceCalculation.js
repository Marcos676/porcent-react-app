const getDiscount = (price, discount, quantity) => parseFloat(((price * discount) / 100).toFixed(2)) * quantity;

const getFinalPrice = (price, discount, quantity) => parseFloat((price - (price * discount) / 100).toFixed(2)) * quantity;

const getTotalPrice = (products) => products.reduce((acc, currVal) => acc + getFinalPrice(currVal.originalPrice, currVal.porcentDiscount, currVal.quantity), 0)

const getTotalDiscount = (products) => products.reduce((acc, currVal) => acc + getDiscount(currVal.originalPrice, currVal.porcentDiscount, currVal.quantity), 0)

module.exports = {
  getDiscount,
  getFinalPrice,
  getTotalPrice,
  getTotalDiscount
};
