import { type VariantProps } from "@gluestack-ui/nativewind-utils";
import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const spinnerStyle = tva({
  slots: {
    wrapper: "items-center justify-center",
    spinner: "",
  },
  variants: {
    size: {
      sm: { wrapper: "size-5", spinner: "size-5" },
      md: { wrapper: "size-8", spinner: "size-8" },
      lg: { wrapper: "size-10", spinner: "size-10" },
    },
    color: {
      default: { spinner: "color-default" },
      primary: { spinner: "color-primary" },
      secondary: { spinner: "color-secondary" },
      success: { spinner: "color-success" },
      warning: { spinner: "color-warning" },
      danger: { spinner: "color-danger" },
      white: { spinner: "color-white" },
      black: { spinner: "color-black" },
    },
  },
  defaultVariants: {
    color: "default",
  },
  parentVariants: {},
});

export type SpinnerVariantProps = VariantProps<typeof spinnerStyle>;
export type SpinnerSlots = keyof ReturnType<typeof spinnerStyle>;
