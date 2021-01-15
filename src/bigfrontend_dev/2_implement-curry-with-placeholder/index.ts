type TCurry = {
  (fn: Function): Function;
  placeholder: string;
};

const curry: TCurry = function (fn: Function) {
  const curried = function (this: any, ...args: []) {
    const filteredArgs: any[] = args.filter((arg) => arg !== curry.placeholder);
    if (filteredArgs.length >= fn.length) {
      return fn.call(this, ...filteredArgs);
    }
    return (...args2: []) => curried.call(this, ...filteredArgs, ...args2);
  };
  return curried;
};
curry.placeholder = '_';

export default curry;
