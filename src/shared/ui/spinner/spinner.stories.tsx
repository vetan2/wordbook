import { type StoryObj, type Meta } from "@storybook/react";
import { Text, View } from "react-native";

import { Spinner, type SpinnerProps } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    animating: {
      control: {
        type: "boolean",
      },
    },
    duration: {
      control: {
        type: "number",
      },
    },
    spinDuration: {
      control: {
        type: "number",
      },
    },
    strokeCap: {
      control: {
        type: "select",
      },
      options: ["butt", "square", "round"],
    },
  },
  args: {
    color: "default",
    animating: true,
    duration: 1000,
    spinDuration: 5000,
    strokeCap: "round",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ color, ...props }) => (
    <View className="flex-row gap-2">
      {(["sm", "md", "lg"] satisfies SpinnerProps["size"][]).map((size) => (
        <View key={size} className="flex-row items-center gap-2">
          <Text
            className="w-6 text-right font-pretendard"
            style={{ fontFamily: "Pretendard-Medium" }}
          >
            {size}
          </Text>
          <Spinner {...props} color={color} size={size} />
        </View>
      ))}
    </View>
  ),
};
