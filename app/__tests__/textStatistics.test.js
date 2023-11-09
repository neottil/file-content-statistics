import { textStatistics } from "../textStatistics.js";

describe("Test text statistcs functions", () => {
  const statistics = textStatistics(
    "Questo è un esempio di multi-tasking test."
  );

  test("Count words", () => expect(statistics.wordCount).toBe(7));

  test("Count letters", () => expect(statistics.letterCount).toBe(34));

  test("Count spaces", () => expect(statistics.spaceCount).toBe(6));
});

describe("Test repeated words function", () => {
  const statistics = textStatistics("Parola parola ripetuta Test Ripetuta", 2);
  test("Repeated words", () => {
    expect(statistics.repeatedWords).toEqual({
      parola: 2,
      ripetuta: 2,
    });
  });
});
