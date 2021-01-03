const fn = <T>(arr: T[], num: number):T[] => {
  return arr.reduce((acc, el) => {
    const { length, [length - 1]: last } = acc;

    if(!last || last.length >= num) {
      acc.push([el]);
    } else {
      last.push(el);
    }

    return acc;
  }, []);
};

export default fn;
