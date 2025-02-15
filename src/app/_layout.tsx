import "./global.css";
import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/providers/gluestack-ui-provider";

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
