import { type ElementRef, forwardRef } from "react";
import { Text as TextOrig, type TextProps } from "react-native";
import { match } from "ts-pattern";

import { cx } from "~/shared/style/utils";

export interface UITextProps extends TextProps {
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
}

export const UIText = forwardRef<ElementRef<typeof TextOrig>, UITextProps>(
  ({ className, weight, ...props }, ref) => {
    return (
      <TextOrig
        ref={ref}
        {...props}
        className={cx(
          match(weight)
            .with("thin", () => "pretendard-thin")
            .with("extralight", () => "pretendard-extralight")
            .with("light", () => "pretendard-light")
            .with("regular", () => "pretendard-regular")
            .with("medium", () => "pretendard-medium")
            .with("semibold", () => "pretendard-semibold")
            .with("bold", () => "pretendard-bold")
            .with("extrabold", () => "pretendard-extrabold")
            .with("black", () => "pretendard-black")
            .otherwise(() => "pretendard-medium"),
          className,
        )}
      />
    );
  },
);
