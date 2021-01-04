type TMemoizedFn = {
  (): Function;
  cache: Object;
};

type TMemoizeFn = {
  (fn: Function): TMemoizedFn;
  Cache: any;
};

type TCache = {
  get: (key: any) => any,
  set: (key: any, value: any) => boolean,
  has: (key: any) => boolean,
};

const memoize: TMemoizeFn = function func(fn: Function): TMemoizedFn {
  const cache: TCache = new func.Cache();

  const _memo: TMemoizedFn = (...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const value = fn.apply(this, args);
    cache.set(key, value);
    return value;
  };

  _memo.cache = cache;

  return _memo;
};

memoize.Cache = Map;

export default memoize;
