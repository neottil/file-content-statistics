import readline from "readline";
import { readText } from "./textReader.js";
import { textStatistics } from "./textStatistics.js";

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("Enter the file path or URL of the file: ", (path) => {
  readText(path)
    .then((text) => {
      const statistics = textStatistics(text);

      console.log(`Total number of words in the file: ${statistics.wordCount}`);
      console.log(
        `Total number of letters in the file: ${statistics.letterCount}`
      );
      console.log(
        `Total number of spaces in the file: ${statistics.spaceCount}`
      );
      console.log("Words that are repeated more than 10 times:");
      const repeatedWords = statistics.repeatedWords;
      for (const word in repeatedWords) {
        console.log(`${word}: ${repeatedWords[word]} occurrences`);
      }
      prompt.close();
    })
    .catch((err) => {
      console.error(`Error: ${err.message}`);
      prompt.close();
    });
});
