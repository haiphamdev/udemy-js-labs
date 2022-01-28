import { checkNumber1, checkNumber2, checkNumber3, checkNumber4, checkNumber5 } from './05-04-main';

describe('checkNumber1()', () => {
  test('should return false when n <= 0', () => {
    expect(checkNumber1(-1)).toBe(false);
    expect(checkNumber1(0)).toBe(false);
  });

  test('should return true when n > 0', () => {
    expect(checkNumber1(1)).toBe(true);
    expect(checkNumber1(2)).toBe(true);
  });
});

describe('checkNumber2()', () => {
  test('should return false when n <= 0', () => {
    expect(checkNumber2(-1)).toBe(false);
    expect(checkNumber2(0)).toBe(false);
  });

  test('should return false when n > 0', () => {
    expect(checkNumber2(1)).toBe(false);
    expect(checkNumber2(3)).toBe(false);
  });

  test('should return true when n even positive', () => {
    expect(checkNumber2(2)).toBe(true);
    expect(checkNumber2(4)).toBe(true);
  });
});

describe('checkNumber3()', () => {
  test('should return false when n <= 0', () => {
    expect(checkNumber3(-1)).toBe(false);
    expect(checkNumber3(0)).toBe(false);
  });

  test('should return false when n > 0', () => {
    expect(checkNumber3(1)).toBe(false);
    expect(checkNumber3(3)).toBe(false);
  });

  test('should return false when n even positive', () => {
    expect(checkNumber3(2)).toBe(false);
    expect(checkNumber3(4)).toBe(false);
  });

  test('should return true when n > 10', () => {
    expect(checkNumber3(12)).toBe(true);
    expect(checkNumber3(14)).toBe(true);
  });
});

describe('checkNumber4()', () => {
  test('should return false when n <= 0', () => {
    expect(checkNumber4(-1)).toBe(false);
    expect(checkNumber4(0)).toBe(false);
  });

  test('should return false when n > 0', () => {
    expect(checkNumber4(1)).toBe(false);
    expect(checkNumber4(3)).toBe(false);
  });

  test('should return false when n even positive', () => {
    expect(checkNumber4(2)).toBe(false);
    expect(checkNumber4(4)).toBe(false);
  });

  test('should return false when n > 10', () => {
    expect(checkNumber4(12)).toBe(false);
    expect(checkNumber4(14)).toBe(false);
  });

  test('should return true when n divisible by 5', () => {
    expect(checkNumber4(20)).toBe(true);
    expect(checkNumber4(30)).toBe(true);
  });
});

describe('checkNumber5()', () => {
  test('should return false when n < 0', () => {
    expect(checkNumber5(-2)).toBe(false);
    expect(checkNumber5(-4)).toBe(false);
  });
  test('should return true when n odd negative', () => {
    expect(checkNumber5(-1)).toBe(true);
    expect(checkNumber5(-3)).toBe(true);
  });

  test('should return false when n > 0', () => {
    expect(checkNumber5(1)).toBe(false);
    expect(checkNumber5(3)).toBe(false);
  });

  test('should return true when n even positive', () => {
    expect(checkNumber5(2)).toBe(true);
    expect(checkNumber5(4)).toBe(true);
  });
});
