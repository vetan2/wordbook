import { Stack } from "expo-router";

import { GluestackUIProvider } from "~/providers/gluestack-ui-provider";

import "./global.css";

function App() {
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

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AppEntryPoint = require("../../.storybook").default;
}

export default AppEntryPoint;
