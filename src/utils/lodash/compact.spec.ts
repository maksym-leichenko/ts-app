import compact from "./compact";

describe('compact', () => {
  it('should return an array with all falsey values removed', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });
});
