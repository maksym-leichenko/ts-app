import memoize from '../memoize';

describe('memoize', () => {
  it('should return function', () => {
    expect(typeof memoize(() => {})).toBe('function');
  });

  it('should get one argument', () => {
    expect(memoize.length).toBe(1);
  });

  it('should call memoized function one time if get same arguments', () => {
    const sum = jest.fn((a, b) => a + b);
    const memoSum = memoize(sum);
    memoSum(1, 2);
    memoSum(1, 2);
    expect(sum).toBeCalledTimes(1);
  });

  it('memoized function should return same value if get same arguments', () => {
    const sum = jest.fn((a, b) => a + b);
    const memoSum = memoize(sum);
    const res1 = memoSum(1, 2);
    const res2 = memoSum(1, 2);
    expect(res1).toBe(res2);
    expect(sum).toBeCalledTimes(1);
  });

  it('memoized function should return same value if get same arguments even value is object', () => {
    const fn = jest.fn((a, b) => ({ a, b }));
    const memoFn = memoize(fn);
    const res1 = memoFn(1, 2);
    const res2 = memoFn(1, 2);
    expect(res1).toBe(res2);
    expect(fn).toBeCalledTimes(1);
  });

    it('memoized function should have cache property', () => {
      const testFn = jest.fn((a, b) => ({ a, b }));
      const memoTestFn = memoize(testFn);
      expect(memoTestFn.cache).not.toBeUndefined();
    });

    it('memoize function should have Cache property - constructor for cache', () => {
      expect(memoize.Cache).not.toBeUndefined();
    });

    it('memoized function should have cache property - instance of memoize.Cache', () => {
      const testFn = jest.fn((a, b) => ({ a, b }));
      const memoTestFn = memoize(testFn);
      expect(memoTestFn.cache).toBeInstanceOf(memoize.Cache);
    });
});
