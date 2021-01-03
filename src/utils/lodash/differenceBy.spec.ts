import differenceBy from "./differenceBy";

describe('differenceBy', () => {
it('should return new array without filtered values, using iteratee function', () => {
    expect(differenceBy(
      [2.1, 1.2],
      [2.3, 3.4],
      Math.floor,
    )).toEqual([1.2]);
  });

it('should return new array without filtered objects, filter by prop', () => {
    expect(differenceBy(
      [{ 'x': 2 }, { 'x': 1 }],
      [{ 'x': 1 }],
      'x',
    )).toEqual([{ 'x': 2 }]);
  });
});
