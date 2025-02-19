/* eslint-disable no-restricted-imports */
import { type ElementRef, forwardRef } from "react";
import {
  Text as TextOrig,
  type TextProps as TextPropsOrig,
} from "react-native";

import { cx } from "~/shared/style/utils";

export interface TextProps extends TextPropsOrig {
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  font?: "pretendard";
}

const getFontFamilyClass = (
  font: TextProps["font"],
  weight: TextProps["weight"],
) => {
  switch (font) {
    case "pretendard":
      switch (weight) {
        case "thin":
          return "font-pretendard-thin";
        case "extralight":
          return "font-pretendard-extralight";
        case "light":
          return "font-pretendard-light";
        case "regular":
          return "font-pretendard-regular";
        case "medium":
          return "font-pretendard-medium";
        case "semibold":
          return "font-pretendard-semibold";
        case "bold":
          return "font-pretendard-bold";
        case "extrabold":
          return "font-pretendard-extrabold";
        case "black":
          return "font-pretendard-black";
      }
    // TODO
    // case "zen-old-mincho":
    //   switch (weight) {
    //     case "thin":
    //     case "extralight":
    //     case "light":
    //     case "regular":
    //       return "font-zen-old-mincho-regular";
    //     case "medium":
    //       return "font-zen-old-mincho-medium";
    //     case "semibold":
    //       return "font-zen-old-mincho-semibold";
    //     case "bold":
    //       return "font-zen-old-mincho-bold";
    //     case "extrabold":
    //     case "black":
    //       return "font-zen-old-mincho-black";
    //   }
    default:
      return undefined;
  }
};

export const Text = forwardRef<ElementRef<typeof TextOrig>, TextProps>(
  ({ className, weight = "medium", font = "pretendard", ...props }, ref) => {
    return (
      <TextOrig
        ref={ref}
        {...props}
        className={cx(getFontFamilyClass(font, weight), className)}
      />
    );
  },
);
