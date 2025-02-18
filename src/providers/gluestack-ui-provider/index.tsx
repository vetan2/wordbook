import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import { colorScheme as colorSchemeNW } from "nativewind";
import React from "react";
import { View, type ViewProps } from "react-native";

export const GluestackUIProvider = ({
  mode = "light",
  ...props
}: {
  mode?: "light" | "dark" | "system";
  children?: React.ReactNode;
  style?: ViewProps["style"];
}) => {
  colorSchemeNW.set(mode);

  return (
    <View
      style={[{ flex: 1, height: "100%", width: "100%" }, props.style]}
      className="font-sans"
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
};
