import difference from "./difference";

describe('difference', () => {
  it('should return new array of filtered values', () => {
    const arr = [2, 1];
    expect(difference(arr, [2, 3])).toEqual([1]);
    expect(arr).toEqual([2, 1]);
  });
});
