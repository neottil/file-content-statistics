import {
  countWords,
  countLetters,
  countSpaces,
  findRepeatedWords,
} from "../textStatistics.js";

const TEST_STRING = "Questo è un esempio di multi-tasking test.";

test("Count words", () => expect(countWords(TEST_STRING)).toBe(7));

test("Count letters", () => expect(countLetters(TEST_STRING)).toBe(34));

test("Count spaces", () => expect(countSpaces(TEST_STRING)).toBe(6));

test("Find repeated words", () => {
  const text = "Parola parola ripetuta Test Ripetuta";
  expect(findRepeatedWords(text, 2)).toEqual({ parola: 2, ripetuta: 2 });
});
