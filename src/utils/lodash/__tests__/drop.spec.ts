import _ from 'lodash';
import drop from '../drop';

describe('drop - should return the slice of array', () => {
  it('should drop one element', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3])).toEqual(_.drop([1, 2, 3]));
  });

  it('should drop all elements if num > arr.length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
    expect(drop([1, 2, 3], 5)).toEqual(_.drop([1, 2, 3], 5));
  });

  it('should drop <num> elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 2)).toEqual(_.drop([1, 2, 3], 2));
  });
});
