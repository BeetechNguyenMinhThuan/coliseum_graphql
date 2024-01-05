/**
 * get token from localstorage
 */
export function getTokenFromLocalStorage() {
    const token = localStorage.getItem('token');
    return token;
}

export function classNames(...args: any[]) {
  return args
    .reduce((acc, val) => {
      if (typeof val === "string") {
        return acc.concat(val.split(" "));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
}