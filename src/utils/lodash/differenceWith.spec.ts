import differenceWith from "./differenceWith";
import _ from 'lodash';

describe('differenceWith', () => {
  it('should return new array with filered values, using fuction for check is need fiter element from array', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    expect(
      differenceWith(objects, [{ 'x': 1, 'y': 2 }], (a, b) => a.x === b.x)
    ).toEqual([{ 'x': 2, 'y': 1 }]);
  });

  it('should return same value like _.differenceWith', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

    expect(
      differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual)
    ).toEqual(
      _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual)
    );
  });
});
