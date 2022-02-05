import { isPrime } from './number-04';
describe('isPrime(n)', () => {
  it('should return false when n not is an prime', () => {
    [4, 12, 120, 2024, 12500].forEach((x) => {
      expect(isPrime(x)).toBe(false);
    });
  });

  it('should return true when n is an prime', () => {
    [2, 3, 5, 11, 13, 17].forEach((x) => {
      expect(isPrime(x)).toBe(true);
    });
  });
});
