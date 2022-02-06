import { countWords } from './string-01';

describe('countWords(str)', () => {
  it('should return empty object in case str is empty', () => {
    expect(countWords('')).toEqual({});
  });

  it("should return correct count when str doesn't have redundant spaces", () => {
    expect(countWords('easy frontend')).toBe(2);
  });

  it('should return correct count when str has redundant spaces', () => {
    expect(countWords('  easy  frontend  ')).toBe(2);
  });
});
