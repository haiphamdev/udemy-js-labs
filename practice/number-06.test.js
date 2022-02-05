import { isPerfectNumber } from './number-06';

describe('isPerfectNumber()', () => {
  it('should return false when n < 2', () => {
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(0)).toBe(false);
  });

  it('should return false when n not is an perfect number', () => {
    [5, 11, 113].forEach((x) => {
      expect(isPerfectNumber(x)).toBe(false);
    });
  });

  it('should return true when n not is an perfect number', () => {
    [6, 28, 496].forEach((x) => {
      expect(isPerfectNumber(x)).toBe(true);
    });
  });
});
