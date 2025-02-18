export const keys = <O extends object>(obj: O) =>
  Object.keys(obj) as (keyof O)[];

export const values = <O extends object>(obj: O) =>
  Object.values(obj) as O[keyof O][];

export const entries = <O extends object>(obj: O) =>
  Object.entries(obj) as [keyof O, O[keyof O]][];
