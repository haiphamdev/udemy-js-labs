import { hasTwoDigitsWithSum } from './number-09';

describe('hasTwoDigitsWithSum(n, sum)', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(hasTwoDigitsWithSum(x)).toBe(false);
    });
  });

  it('should return false when n not is an has two digits with sum', () => {
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
  });

  it('should return true when n is an has two digits with sum', () => {
    expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
  });
});
