type TPredicateFn = (value: any, index: number, array: []) => any;
type TPredicate = string | Object | [string, any] | TPredicateFn;

const dropWhile = <T>(arr: T[], prop: TPredicate) => {

  let callback;
  if (typeof prop === 'function') {
    callback = prop;
  }

  if (typeof prop === 'string') {
    callback = (obj) => obj[prop];
  }


  if (typeof prop === 'object') {
    callback = (obj) => Object.entries(prop).every(([key, value]) => obj[key] === value);
  }


  if (Array.isArray(prop)) {
    callback = (obj) => obj[prop[0]] === prop[1];
  }

  const index = arr.findIndex((item) => !callback(item));
  if (index === -1) {
    return [];
  }
  return arr.slice(index);
};

export default dropWhile;
