const concat = <T>(...rest: any[]):T[] => {
  return rest.reduce((acc: T[], el: any) => {
    if(Array.isArray(el)) {
      return acc.concat(el);
    }
    acc.push(el);
    return acc;
  }, []);
}

export default concat;
