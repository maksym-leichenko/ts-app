const compact = <T>(arr: T[]): T[] => {
  return arr.filter(item => !!item);
}

export default compact;
