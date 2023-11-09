import fs from "fs";
import axios from "axios";
import readline from "readline";

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// match any word charcter and most popular special chars.
// "-" permit to count word that contain this char as  single word.
const WORD_REGEX = /[\wèéàòùì-]+/g;
// match all non alphabetic chars.
const NON_CHAR_REGEX = /[^a-zA-Zèéòà]/g;
// match all spaces
const SPACE_REGEX = /\s/g;

// function to count total words in text.
const countWords = (text) => text.match(WORD_REGEX).length;

// function to count total letters in text.
const countLetters = (text) =>
  text.length - text.match(NON_CHAR_REGEX, "").length;

// function to count total spaces in text.
const countSpaces = (text) => text.match(SPACE_REGEX).length;

// function to count repeated words in text (case insensitive)
const findRepeatedWords = (text, minOccurs) => {
  // read all wards and make lowercase
  const words = text.match(WORD_REGEX).map((w) => w.toLowerCase());
  const wordCounts = {};

  // create word matrix with number of occurences
  words.forEach((word) => {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });

  // create array from object entries: [['word1', 3], ['word2', 24], ...]
  const entries = Object.entries(wordCounts);
  // filter only entry with minOccurs
  const filtered = entries.filter(([_key, value]) => value >= minOccurs);
  // return object from entries
  return Object.fromEntries(filtered);
};

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

prompt.question("Enter the file path or URL of the file: ", (path) => {
  readText("test/testFile.txt")
    .then((text) => {
      const wordCount = countWords(text);
      const letterCount = countLetters(text);
      const spaceCount = countSpaces(text);
      const repeatedWords = findRepeatedWords(text, 10);

      console.log(`Total number of words in the file: ${wordCount}`);
      console.log(`Total number of letters in the file: ${letterCount}`);
      console.log(`Total number of spaces in the file: ${spaceCount}`);
      console.log("Words that are repeated more than 10 times:");
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
