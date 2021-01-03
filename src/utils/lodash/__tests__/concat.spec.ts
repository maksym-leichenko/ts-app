import concat from '../concat';

describe('concat', () => {
  it('should return a new array concatenating array with any additional arrays and/or values', () => {
    const array = [1];
    const other = concat(array, 2, [3], 'a', [[4]]);
    expect(other).toEqual([1, 2, 3, 'a', [4]]);
    expect(array).toEqual([1]);
  });
});
