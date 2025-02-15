import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "단어장",
          sceneStyle: { backgroundColor: "white" },
        }}
      />
    </Tabs>
  );
}
