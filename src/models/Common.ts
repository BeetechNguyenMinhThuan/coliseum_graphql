export interface IMap<T> {
  [key: string]: T;
}

export type AnyObject = IMap<any>;
