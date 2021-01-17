import flat from '.';

describe('flat', () => {
  it('should flat array', () => {
    const arr = [1, [2], [3, [4]]];
    expect(flat(arr)).toEqual([1, 2, 3, [4]]);
    expect(flat(arr, 1)).toEqual([1, 2, 3, [4]]);
    expect(flat(arr, 2)).toEqual([1, 2, 3, 4]);
  });
});
