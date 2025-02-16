import { faker, fakerKO } from "@faker-js/faker";

import { type Word } from "~/entities/word/types";
import { type Wordbook } from "~/entities/wordbook/types";

export const WORD_COUNT = 100;
export const WORDBOOK_COUNT = 20;

export const words = Array.from({ length: WORD_COUNT }).map(
  (_, i): Word => ({
    id: `word-${i}`,
    words: [faker.word.sample()],
    meanings: [fakerKO.word.sample()],
    dictions: [faker.word.sample()],
  }),
);

export const wordBooks = Array.from({ length: WORDBOOK_COUNT }).map(
  (_, i): Wordbook => ({
    id: `wordbook-${i}`,
    name: `Wordbook ${i + 1}`,
    language: "en",
    wordIds: Array.from({ length: Math.floor(50 + Math.random() * 50) }).map(
      (_, j) => `word-${j}`,
    ),
  }),
);
