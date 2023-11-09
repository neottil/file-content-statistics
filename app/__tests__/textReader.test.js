import { readText, makeFileStatistics } from "../textReader.js";

test("Make statistics", () => {
  readText("./testFile.txt").then((text) => {
    const { wordCount, letterCount, spaceCount, repeatedWords } =
      makeFileStatistics(text);
    expect(wordCount.toBe(88));
    expect(letterCount.toBe(407));
    expect(spaceCount.toBe(74));
    expect(repeatedWords.toEquals({ armonia: 10, l: 11 }));
  });
});
