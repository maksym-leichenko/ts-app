const throttle = function (func: Function, wait: number) {
  let isThrottled = false;
  let callback: Function | null = null;

  return function (this: any, ...args: any[]) {
    if (isThrottled) {
      callback = func.bind(this, ...args);
      return;
    }

    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      if (callback) {
        callback();
      }
      callback = null;
      isThrottled = false;
    }, wait);
  };
};

export default throttle;
