type TCurry = {
  (fn: Function): Function;
  placeholder: string;
};

const curry: TCurry = function (fn: Function) {
  const curried = function (this: any, ...argsRow: []) {
    const args = argsRow.slice(0, fn.length);

    if (args.length === fn.length && !args.includes(curry.placeholder)) {
      return fn.call(this, ...args);
    }

    return (...args2: []) => {
      const mergedArgs: any[] = args.map((arg) => {
        return arg === curry.placeholder && args2.length ? args2.shift() : arg;
      });
      return curried.call(this, ...mergedArgs, ...args2);
    };
  };

  return curried;
};
curry.placeholder = '_';

export default curry;
