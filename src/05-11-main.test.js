import { getErrorMessageV1, getErrorMessageV2 } from './05-11-main';

describe('getErrorMessageV1()', () => {
  test('should return something went wrong when n other', () => {
    expect(getErrorMessageV1('E04')).toBe('Something went wrong');
  });

  test('should return invalid username or password when n is "E01"', () => {
    expect(getErrorMessageV1('E01')).toBe('Invalid username or password');
  });

  test('should return too many attempts when n is "E02"', () => {
    expect(getErrorMessageV1('E02')).toBe('Too many attempts');
  });

  test('should return missing data when n is "E03"', () => {
    expect(getErrorMessageV1('E03')).toBe('Missing data');
  });
});

describe('getErrorMessageV2()', () => {
  test('should return something went wrong when n other', () => {
    expect(getErrorMessageV2('E04')).toBe('Something went wrong');
  });

  test('should return invalid username or password when n is "E01"', () => {
    expect(getErrorMessageV2('E01')).toBe('Invalid username or password');
  });

  test('should return too many attempts when n is "E02"', () => {
    expect(getErrorMessageV2('E02')).toBe('Too many attempts');
  });

  test('should return missing data when n is "E03"', () => {
    expect(getErrorMessageV2('E03')).toBe('Missing data');
  });
});
