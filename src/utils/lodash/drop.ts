const drop = <T>(arr: T[], num: number = 1) => {
  if (num > arr.length) {
    return [];
  }
  return arr.slice(num);
};

export default drop;
