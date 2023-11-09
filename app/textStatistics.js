// match any word charcter and most popular special chars.
// "-" permit to count word that contain this char as  single word.
const WORD_REGEX = /[\wèéàòùì-]+/g;
// match all non alphabetic chars.
const NON_CHAR_REGEX = /[^a-zA-Zèéòàì]/g;
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

export { countWords, countLetters, countSpaces, findRepeatedWords };
