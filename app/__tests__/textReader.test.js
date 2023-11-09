import { readText } from "../textReader.js";
import { textStatistics } from "../textStatistics.js";

test("Make statistics", () => {
  return readText("./__tests__/testFile.txt").then((text) => {
    const { wordCount, letterCount, spaceCount, repeatedWords } =
      textStatistics(text);
    expect(wordCount).toBe(88);
    expect(letterCount).toBe(407);
    expect(spaceCount).toBe(74);
    expect(repeatedWords).toEqual({ armonia: 10, l: 11 });
  });
});

test("read from url", () => {
  return readText(
    "https://github.com/neottil/file-content-statistics/blob/main/app/__tests__/testFile.txt"
  ).then((text) => expect(text).not.toBeNull());
});
