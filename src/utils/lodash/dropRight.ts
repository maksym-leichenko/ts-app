const dropRight = <T>(arr: T[], num: number = 1) => {
  if (num > arr.length) {
    return [];
  }
  return arr.slice(0, arr.length - num);
};

export default dropRight;
