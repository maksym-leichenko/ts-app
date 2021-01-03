const concat = <T>(...rest: T[]):T[] => {
  return rest.reduce((acc: T[], el) => {
    if(Array.isArray(el)) {
      return acc.concat(el);
    }
    acc.push(el);
    return acc;
  }, []);
}

export default concat;
