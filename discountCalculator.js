function calculateDiscountedPrice(price, discountRate) {
  if (typeof price !== 'number' || typeof discountRate !== 'number') {
    throw new Error('Price and discount rate must be numbers');
  }

  if (price <= 0 || discountRate < 0 || discountRate > 100) {
    throw new Error('Invalid price or discount rate');
  }

  const discountAmount = (price * discountRate) / 100;
  const discountedPrice = price - discountAmount;

  return discountedPrice;
}

module.exports = calculateDiscountedPrice;
