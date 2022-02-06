import { statisticsCharacters } from './string-03';

describe('statisticsCharacters(str)', () => {
  it('should return empty object in case is empty', () => {
    expect(statisticsCharacters('')).toEqual({});
  });

  it("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsCharacters('aabcc')).toEqual({ a: 2, b: 1, c: 2 });
  });

  it('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsCharacters('aa b cc ')).toEqual({ a: 2, b: 1, c: 2, ' ': 3 });
  });
});
