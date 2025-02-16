import { Stack, useLocalSearchParams } from "expo-router";
import { pipe } from "fp-ts/lib/function";
import { useMemo } from "react";
import { FlatList, View } from "react-native";

import { wordBooks, words } from "~/pages/WordbookList/data";
import { Button, ButtonText } from "~/shared/ui";

export default function Wordbook() {
  const { id } = useLocalSearchParams();
  const wordbook = useMemo(
    () => wordBooks.filter(({ id: wordbookId }) => wordbookId === `${id}`)[0],
    [id],
  );

  return (
    <View className="flex-1 items-center justify-center p-2">
      <Stack.Screen
        options={{
          title: wordbook.name,
        }}
      />
      <FlatList
        className="w-full"
        contentContainerClassName="gap-2 pr-4"
        data={wordbook.wordIds}
        renderItem={({ item: id }) => (
          <Button variant="outline" className="ml-4">
            {pipe(
              words.filter(({ id: wordId }) => wordId === id)[0],
              ({ words, meanings }) => (
                <>
                  <ButtonText>{words.join(" / ")}</ButtonText>
                  <ButtonText>{meanings.join(" / ")}</ButtonText>
                </>
              ),
            )}
          </Button>
        )}
      />
    </View>
  );
}
