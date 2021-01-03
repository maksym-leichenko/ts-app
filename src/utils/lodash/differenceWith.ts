type TComparator = (a: any, b: any) => boolean

const differenceWith = <T>(
  arr: T[],
  filterArr: T[],
  comparator: TComparator
) => {
  return arr.filter(item => {
    return !filterArr.some(el => comparator(item, el));
  });
};

export default differenceWith;
