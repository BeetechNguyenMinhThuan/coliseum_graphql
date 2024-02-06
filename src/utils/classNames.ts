import { twMerge } from "tailwind-merge";

export default function classNames(...args: any[]) {
  const strClass = args
    .reduce((acc, val) => {
      if (typeof val === "string") {
        return acc.concat(val.split(" "));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
  return twMerge(strClass);
}
