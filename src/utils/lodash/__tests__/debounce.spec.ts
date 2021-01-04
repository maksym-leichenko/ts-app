import debounce from '../debounce';

describe('debounce', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should debounce a function', async () => {
    jest.useFakeTimers('modern');
    const fn = jest.fn((message) => message);
    const wrapedFn = debounce(fn, 200);

    wrapedFn('test1');
    jest.advanceTimersByTime(100);
    wrapedFn('test2');
    jest.advanceTimersByTime(100);
    wrapedFn('test3');
    jest.advanceTimersByTime(300);

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith('test3');
  });

  it('should debounce a function and call immediately', async () => {
    jest.useFakeTimers('modern');
    const fn = jest.fn((message) => message);
    const wrapedFn = debounce(fn, 200, { immediately: true });

    wrapedFn('test1');
    jest.advanceTimersByTime(100);
    wrapedFn('test2');
    jest.advanceTimersByTime(100);
    wrapedFn('test3');
    jest.advanceTimersByTime(200);

    expect(fn).toBeCalledTimes(2);
    expect(fn).toBeCalledWith('test1');
    expect(fn).toBeCalledWith('test3');
  });
});
