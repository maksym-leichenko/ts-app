const throttle = function (func, wait) {
  let isThrottled = false;
  let callback = null;

  return function (...args) {
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
