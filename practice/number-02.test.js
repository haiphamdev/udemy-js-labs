import { isDecreasingNumber } from './number-02';

describe('isDecreasingNumber(n)', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isDecreasingNumber(x)).toBe(false);
    });
  });

  it('should return false when is not an decrease number', () => {
    [11, 22, 333, 4444, 55555, 666666, 12, 123, 3546, 45689, 456789].forEach((x) => {
      expect(isDecreasingNumber(x)).toBe(false);
    });
  });

  it('should return true when is an decrease number', () => {
    [21, 321, 7432, 87543, 987654].forEach((x) => {
      expect(isDecreasingNumber(x)).toBe(true);
    });
  });
});
