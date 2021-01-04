const curry: Function = function (fn: Function): Function {
  return function _curry(this: any, ...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...args2: any[]) => _curry.call(this, ...args, ...args2);
  };
};

export default curry;
