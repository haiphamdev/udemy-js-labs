import { classifyStudent } from './05-10-main';

describe('classifyStudent()', () => {
  test('should return Invalid mark when n < 0', () => {
    expect(classifyStudent(-1)).toBe('Invalid mark!');
  });

  test('should return Invalid mark when n > 10', () => {
    expect(classifyStudent(11)).toBe('Invalid mark!');
  });

  test('should return Excellence when n > 8', () => {
    expect(classifyStudent(9)).toBe('Excellence');
  });

  test('should return Good when n in [7-8]', () => {
    expect(classifyStudent(7)).toBe('Good');
    expect(classifyStudent(8)).toBe('Good');
  });

  test('should return Not Good when n in [4-6]', () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudent(n)).toBe('Not Good');
    });
  });

  test('should return Bad when n in [1-3]', () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudent(n)).toBe('Bad');
    });
  });
});
