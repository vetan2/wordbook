import type { Preview } from "@storybook/react";
import { View } from "react-native";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <View className="mt-20 flex items-center p-2">
        <Story />
      </View>
    ),
  ],
};

export default preview;
