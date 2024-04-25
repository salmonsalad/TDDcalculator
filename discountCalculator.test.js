const calculateDiscountedPrice = require('./discountCalculator');

describe('Discount Calculator', () => {
  test('calculates discounted price correctly', () => {
    // Test case 1: 50% discount on $100
    expect(calculateDiscountedPrice(100, 50)).toBe(50);

    // Test case 2: 25% discount on $80
    expect(calculateDiscountedPrice(80, 25)).toBe(60);
  });

  test('throws error for non-numeric inputs', () => {
    expect(() => calculateDiscountedPrice('100', 20)).toThrow('Price and discount rate must be numbers');
    expect(() => calculateDiscountedPrice(100, '20')).toThrow('Price and discount rate must be numbers');
  });

  test('throws error for invalid inputs', () => {
    expect(() => calculateDiscountedPrice(0, 20)).toThrow('Invalid price or discount rate');
    expect(() => calculateDiscountedPrice(100, -10)).toThrow('Invalid price or discount rate');
    expect(() => calculateDiscountedPrice(100, 110)).toThrow('Invalid price or discount rate');
  });
});
