import { Stack } from "expo-router";

import { GluestackUIProvider } from "~/providers/gluestack-ui-provider";

import "./global.css";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}
