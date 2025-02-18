import { type SlotsToClasses } from "@heroui/theme";
import { cssInterop } from "nativewind";
import { type ComponentPropsWithRef, type ElementRef, forwardRef } from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";
import { match } from "ts-pattern";

import { cx, mapPropsVariants } from "~/shared/style/utils";

import {
  type SpinnerSlots,
  spinnerStyle,
  type SpinnerVariantProps,
} from "./style";

cssInterop(Progress.CircleSnail, {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: "color",
      width: "size",
    },
  },
});

export interface SpinnerProps
  extends Omit<
      ComponentPropsWithRef<typeof Progress.CircleSnail>,
      keyof SpinnerVariantProps | "thickness"
    >,
    SpinnerVariantProps {
  className?: string;
  classNames?: SlotsToClasses<SpinnerSlots>;
  size?: "sm" | "md" | "lg";
}

export const Spinner = forwardRef<
  ElementRef<typeof Progress.Circle>,
  SpinnerProps
>(({ size = "md", ...originalProps }, ref) => {
  const [props, variantProps] = mapPropsVariants(
    { size, ...originalProps },
    spinnerStyle.variantKeys,
    true,
  );

  const slots = spinnerStyle({ ...variantProps });

  return (
    <View
      className={slots.wrapper({
        class: cx(props.className, props.classNames?.wrapper),
      })}
    >
      <Progress.CircleSnail
        indeterminate
        ref={ref}
        {...props}
        className={slots.spinner({ class: props.classNames?.spinner })}
        size={match(variantProps.size)
          .with("sm", () => 20)
          .with("md", () => 32)
          .with("lg", () => 40)
          .exhaustive()}
        thickness={match(variantProps.size)
          .with("sm", () => 2.5)
          .with("md", () => 3.5)
          .with("lg", () => 4)
          .exhaustive()}
      />
    </View>
  );
});
