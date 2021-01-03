import chunk from "./chunk";


describe('chunk', () => {
  it('should return chanks of array (num = 2)', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  it('should return chanks of array (num = 3)', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([
      ['a', 'b', 'c'],
      ['d']
    ]);
  });

  it('should return empty array', () => {
    expect(chunk([], 3)).toEqual([]);
  });
});

