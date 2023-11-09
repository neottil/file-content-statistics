import readline from "readline";
import { readText, makeFileStatistics } from "./textReader.js";

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("Enter the file path or URL of the file: ", (path) => {
  readText(path)
    .then((text) => {
      console.log(text);
      const fileStatistics = makeFileStatistics(text);

      console.log(
        `Total number of words in the file: ${fileStatistics.wordCount}`
      );
      console.log(
        `Total number of letters in the file: ${fileStatistics.letterCount}`
      );
      console.log(
        `Total number of spaces in the file: ${fileStatistics.spaceCount}`
      );
      console.log("Words that are repeated more than 10 times:");
      const repeatedWords = fileStatistics.repeatedWords;
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
