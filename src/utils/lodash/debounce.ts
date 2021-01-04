type TOptions = {
  immediately: boolean;
};

const debounce = (fn: Function, time: number, options?: TOptions): Function => {
  let timerId: ReturnType<typeof setTimeout>;
  let immediately: boolean = !!options?.immediately;
  return function (this: any, ...args: any[]) {
    if (immediately && !timerId) {
      fn.apply(this, args);
      immediately = false;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, args);
      }, time);
    }
  };
};

export default debounce;
