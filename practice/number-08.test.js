import { isDivisibleBy10 } from './number-08';

describe('isDivisibleBy10(n)', () => {
  it('should return false when n not is an divisible by 10', () => {
    expect(isDivisibleBy10(10)).toBe(false);
  });

  it('should return true when n is an divisible by 10', () => {
    [1234, 123455].forEach((x) => {
      expect(isDivisibleBy10(x)).toBe(true);
    });
  });
});
