/**
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item) && depth > 0) {
      return [...acc, ...flat(item, depth - 1)];
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

export default flat;
