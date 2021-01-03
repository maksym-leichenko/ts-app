const differenceBy = <T extends object | any>(
  arr: T[],
  filterValues: T[] = [],
  fnOrProp?: string | Function | undefined,
):T[] => {
  const callback = (item: T) => {
    if (typeof fnOrProp === 'function') {
      return fnOrProp(item);
    }
    if(fnOrProp) {
      return item[fnOrProp];
    }
    return item;
  }

  const filterArr = filterValues.map(callback);
  return arr.filter(item => !filterArr.includes(callback(item)));
}

export default differenceBy;
