import curry from '.';

describe('curry', () => {
  it('should curry function', () => {
    const join = jest.fn((a, b, c) => {
      return `${a}_${b}_${c}`;
    });
    const curriedJoin = curry(join);

    expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
    expect(curriedJoin('a')('b', 'c')).toBe('a_b_c');
    expect(curriedJoin('r', 'g')('b')).toBe('r_g_b');
  });

  it('should save this', () => {
    const user: {
      name: string
      curriedJoin?: Function,
    } = {
      name: 'Alex',
    };
    const join = jest.fn(function(this: any, a, b, c) {
      return `${a}_${b}_${c}_${this.name}`;
    });
    user.curriedJoin = curry(join);

    expect(user.curriedJoin(1, 2, 3)).toBe('1_2_3_Alex');
    expect(user.curriedJoin('a')('b', 'c')).toBe('a_b_c_Alex');
    expect(user.curriedJoin('r', 'g')('b')).toBe('r_g_b_Alex');
  });
});
