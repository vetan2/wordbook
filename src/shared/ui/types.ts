import { type ClassNameValue } from "tailwind-merge";

export type SlotsToClasses<S extends string> = {
  [Key in S]?: Exclude<ClassNameValue, 0n>;
};
