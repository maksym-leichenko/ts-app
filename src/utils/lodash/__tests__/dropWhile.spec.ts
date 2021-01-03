import _ from 'lodash';
import dropWhile from '../dropWhile';

describe('dropWhile', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];

  it('should return array', () => {
    expect(Array.isArray(dropWhile(users, (o) => !o.active))).toBeTruthy();
  });

  it('should drop elements until predicate function returns falsey', () => {
    expect(dropWhile(users, (o) => !o.active)).toEqual([
      { user: 'pebbles', active: true },
    ]);

    expect(dropWhile(users, (o) => !o.active)).toEqual(
      _.dropWhile(users, (o) => !o.active)
    );
  });
  it('should drop elements until has property', () => {
    expect(dropWhile(users, 'active')).toEqual(_.dropWhile(users, 'active'));
    expect(dropWhile(users, 'active')).toEqual(users);
  });

  it('should drop elements until matches object', () => {
    expect(_.dropWhile(users, { user: 'barney', active: false })).toEqual([
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ]);

    expect(dropWhile(users, { user: 'barney', active: false })).toEqual(
      _.dropWhile(users, { user: 'barney', active: false })
    );
  });

  it('should drop elements until matchesProperty', () => {
    expect(_.dropWhile(users, ['active', false])).toEqual([
      { user: 'pebbles', active: true },
    ]);

    expect(dropWhile(users, ['active', false])).toEqual(
      _.dropWhile(users, ['active', false])
    );
  });
});
