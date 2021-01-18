import throttle from '.';

describe('throttle', () => {
  it('should throttle function', () => {
    jest.useFakeTimers('modern');
    const fn = jest.fn();

    const throttled = throttle(fn, 3000);
    throttled('A');
    throttled('B');
    throttled('C');
    jest.advanceTimersByTime(4000);

    expect(fn).toBeCalledTimes(2);
    expect(fn).toHaveBeenCalledWith('A');
    expect(fn).toHaveBeenCalledWith('C');
  });

  it('should throttle function 2times', () => {
    jest.useFakeTimers('modern');
    const fn = jest.fn();

    const throttled = throttle(fn, 3000);
    throttled('A');
    throttled('B');
    jest.advanceTimersByTime(3000);

    throttled('C');
    jest.advanceTimersByTime(4000);

    expect(fn).toBeCalledTimes(3);
    expect(fn).toHaveBeenCalledWith('A');
    expect(fn).toHaveBeenCalledWith('B');
    expect(fn).toHaveBeenCalledWith('C');
  });
});
