import { View } from "react-native";

export default function Wordbooks() {
  return (
    <View></View>
    // <YStack p="$4" height="100%">
    //   <XStack gap="$2">
    //     <Input size="$4" flex={1} placeholder="단어장 검색" />
    //     <TamaguiButton>
    //       <Filter />
    //     </TamaguiButton>
    //   </XStack>
    //   <View mt="$4" flex={1}>
    //     <StyledScrollView height="100%" py="$1" gap="$5">
    //       <Button title="Native Button" />
    //       {Array.from({ length: 10 }).map((_, i) => (
    //         <Pressable
    //           android_ripple={{
    //             color: "gray",
    //             foreground: true,
    //             borderless: false,
    //             // radius: getTokens().radius.$4.val,
    //           }}
    //           key={i}
    //           onPress={() => {
    //             alert(`단어장 ${i} 선택`);
    //             console.log(getTokens().radius.$4.val);
    //           }}
    //           style={{ borderRadius: 40, overflow: "hidden" }}
    //           // isTop={i === 0}
    //         >
    //           <Card
    //             p="$2"
    //             height={120}
    //             display="flex"
    //             flexDirection="row"
    //             alignItems="center"
    //           >
    //             <Text>단어장 {i}</Text>
    //           </Card>
    //         </Pressable>
    //       ))}
    //     </StyledScrollView>
    //   </View>
    // </YStack>
  );
}
