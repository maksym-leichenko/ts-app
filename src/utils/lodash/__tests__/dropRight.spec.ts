import _ from 'lodash';
import dropRight from '../dropRight';

describe('dropRight - Creates a slice of array with n elements dropped from the end', () => {
  it('should drop one element', () => {
    expect([1, 2, 3].slice(0, 2)).toEqual([1, 2]);
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
    expect(dropRight([1, 2, 3])).toEqual(_.dropRight([1, 2, 3]));
  });

  it('should drop all elements if num > arr.length', () => {
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
    expect(dropRight([1, 2, 3], 5)).toEqual(_.dropRight([1, 2, 3], 5));
  });

  it('should drop <num> elements', () => {
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
    expect(dropRight([1, 2, 3], 2)).toEqual(_.dropRight([1, 2, 3], 2));
  });
});
