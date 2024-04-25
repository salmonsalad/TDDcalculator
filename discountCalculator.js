function calculateDiscountedPrice(price, discountRate) {
  // 입력값 유효성 검사
  if (typeof price !== 'number' || typeof discountRate !== 'number') {
    throw new Error('Price and discount rate must be numbers');
  }

  if (price <= 0 || discountRate < 0 || discountRate > 100) {
    throw new Error('Invalid price or discount rate');
  }

  // 할인 계산
  const discountAmount = (price * discountRate) / 100;
  const discountedPrice = price - discountAmount;

  // 소수점 둘째 자리까지 반올림하여 반환
  return parseFloat(discountedPrice.toFixed(2));
}

module.exports = calculateDiscountedPrice;
