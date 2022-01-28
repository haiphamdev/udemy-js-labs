import {
  isPositiveEvenNumberV1,
  isPositiveEvenNumberV2,
  isPositiveEvenNumberV3,
  isPositiveEvenNumberV4,
} from './05-08-main';

describe('isPositiveEvenNumberV1()', () => {
  test('should return false when n <= 0', () => {
    expect(isPositiveEvenNumberV1(-1)).toBe(false);
    expect(isPositiveEvenNumberV1(0)).toBe(false);
  });

  test('should return false when n > 0 but n not an even number', () => {
    expect(isPositiveEvenNumberV1(1)).toBe(false);
    expect(isPositiveEvenNumberV1(3)).toBe(false);
  });

  test('should return true when n > 0 and n has even numbers positive', () => {
    expect(isPositiveEvenNumberV1(2)).toBe(true);
    expect(isPositiveEvenNumberV1(4)).toBe(true);
  });
});

describe('isPositiveEvenNumberV2()', () => {
  test('should return false when n <= 0', () => {
    expect(isPositiveEvenNumberV2(-1)).toBe(false);
    expect(isPositiveEvenNumberV2(0)).toBe(false);
  });

  test('should return false when n > 0 but n not an even number', () => {
    expect(isPositiveEvenNumberV2(1)).toBe(false);
    expect(isPositiveEvenNumberV2(3)).toBe(false);
  });

  test('should return true when n > 0 and n has even numbers positive', () => {
    expect(isPositiveEvenNumberV2(2)).toBe(true);
    expect(isPositiveEvenNumberV2(4)).toBe(true);
  });
});

describe('isPositiveEvenNumberV3()', () => {
  test('should return false when n <= 0', () => {
    expect(isPositiveEvenNumberV3(-1)).toBe(false);
    expect(isPositiveEvenNumberV3(0)).toBe(false);
  });

  test('should return false when n > 0 but n not an even number', () => {
    expect(isPositiveEvenNumberV3(1)).toBe(false);
    expect(isPositiveEvenNumberV3(3)).toBe(false);
  });

  test('should return true when n > 0 and n has even numbers positive', () => {
    expect(isPositiveEvenNumberV3(2)).toBe(true);
    expect(isPositiveEvenNumberV3(4)).toBe(true);
  });
});

describe('isPositiveEvenNumberV4()', () => {
  test('should return false when n <= 0', () => {
    expect(isPositiveEvenNumberV4(-1)).toBe(false);
    expect(isPositiveEvenNumberV4(0)).toBe(false);
  });

  test('should return false when n > 0 but n not an even number', () => {
    expect(isPositiveEvenNumberV4(1)).toBe(false);
    expect(isPositiveEvenNumberV4(3)).toBe(false);
  });

  test('should return true when n > 0 and n has even numbers positive', () => {
    expect(isPositiveEvenNumberV4(2)).toBe(true);
    expect(isPositiveEvenNumberV4(4)).toBe(true);
  });
});
