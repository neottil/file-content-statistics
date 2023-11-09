import fs from "fs";
import axios from "axios";
import {
  countWords,
  countLetters,
  countSpaces,
  findRepeatedWords,
} from "./textStatistics.js";

// read text from url or file
const readText = (path) =>
  new Promise(async (resolve, reject) => {
    // if path is url get text from url
    if (path.startsWith("http://") || path.startsWith("https://")) {
      try {
        const response = await axios.get(path);
        resolve(response.data);
      } catch (error) {
        reject(
          new Error("Unable to download the content from the specified URL.")
        );
      }
      // else read text from file
    } else {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(new Error("Unable to read the file."));
        } else {
          resolve(data);
        }
      });
    }
  });

const makeFileStatistics = (text) => ({
  wordCount: countWords(text),
  letterCount: countLetters(text),
  spaceCount: countSpaces(text),
  repeatedWords: findRepeatedWords(text, 10),
});

export { readText, makeFileStatistics };
