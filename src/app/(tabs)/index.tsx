import { CheckIcon } from "lucide-react-native";
import { Text, View } from "react-native";

import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/shared/ui";
import { Button, ButtonText } from "@/shared/ui/Button";

export default function Index() {
  return (
    <View className="p-4">
      <Text className="text-lg font-bold">View</Text>
      <Button>
        <ButtonText>hi</ButtonText>
      </Button>
      <Checkbox size="lg" isInvalid={false} isDisabled={false} value="none">
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
    </View>
  );
}
