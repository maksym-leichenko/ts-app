const difference = <T>(arr: T[], filterArr: T[]):T[] => {
  return arr.filter(el => !filterArr.includes(el));
}

export default difference;
