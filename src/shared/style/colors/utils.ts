import { keys } from "~/shared/object";

import { type ColorScale } from "./types";

export const swapColorValues = <T extends object = ColorScale & object>(
  colors: T,
): T => {
  const swappedColors = {};
  const colorKeys = keys(colors);
  const length = colorKeys.length;

  for (let i = 0; i < length / 2; i++) {
    const key1 = colorKeys[i];
    const key2 = colorKeys[length - 1 - i];

    (swappedColors as T)[key1] = colors[key2];
    (swappedColors as T)[key2] = colors[key1];
  }
  if (length % 2 !== 0) {
    const middleKey = colorKeys[Math.floor(length / 2)];

    (swappedColors as T)[middleKey] = colors[middleKey];
  }

  return swappedColors as T;
};
