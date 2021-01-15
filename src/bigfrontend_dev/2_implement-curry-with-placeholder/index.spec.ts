import curry from '.';

describe('Curry with placeholder support', () => {
  it('should curry function', () => {
    const join = jest.fn((a, b, c) => {
      return `${a}_${b}_${c}`;
    });
    const curriedJoin = curry(join);
    const _ = curry.placeholder;

    expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
    expect(curriedJoin(_, 2)(1, 3)).toBe('2_1_3');
    expect(curriedJoin(_, _, _)(1)(_, 3)(2)).toBe('1_3_2');
  });

  it('should save this', () => {
    const user: {
      name: string;
      curriedJoin?: Function;
    } = {
      name: 'Alex',
    };
    const join = jest.fn(function (this: any, a, b, c) {
      return `${a}_${b}_${c}_${this.name}`;
    });
    user.curriedJoin = curry(join);
    const _ = curry.placeholder;

    expect(user.curriedJoin(1, 2, 3)).toBe('1_2_3_Alex');
    expect(user.curriedJoin(_, 2)(1, 3)).toBe('2_1_3_Alex');
    expect(user.curriedJoin(_, _, _)(1)(_, 3)(2)).toBe('1_3_2_Alex');
  });
});
