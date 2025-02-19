import { type StoryObj, type Meta } from "@storybook/react";
import { View } from "react-native";

import { UIText, type UITextProps } from "./text";

const meta: Meta<typeof UIText> = {
  title: "UI/Typography/UIText",
  component: UIText,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "다람쥐 헌 쳇바퀴에 타고파",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { className: "color-primary" },
  render: ({ weight, ...props }) => (
    <View className="flex-col gap-2">
      {(
        [
          "thin",
          "extralight",
          "light",
          "regular",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ] satisfies UITextProps["weight"][]
      ).map((weight) => (
        <View key={weight} className="flex-row gap-2">
          <UIText className="w-20" weight={weight}>
            {weight}
          </UIText>
          <UIText {...props} weight={weight} />
        </View>
      ))}
    </View>
  ),
};
