import { isPerfectSquare } from './number-05';

describe('isPerfectSquare(n)', () => {
  it('should return false when n <= 0', () => {
    expect(isPerfectSquare(0)).toBe(false);
    expect(isPerfectSquare(-1)).toBe(false);
  });

  it('should return false when n not is an perfect square', () => {
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(10)).toBe(false);
  });

  it('should return true when n not is an perfect square', () => {
    [4, 25, 225].forEach((x) => {
      expect(isPerfectSquare(x)).toBe(true);
    });
  });
});
