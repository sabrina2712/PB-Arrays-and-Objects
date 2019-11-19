/**
 * Exercise 3
 * 2. For the longest word
 * Create a function to find the longest word in a given string.
 * i.e. longestWord("this is a web development course") ➞  "development"
 */

const longestWord = (sentence = "") => {
  let _longestWord = "";

  if (typeof sentence !== "string") {
    return "";
  }

  let words = sentence.split(" ");

  for (let word of words) {
    if (word.length >= _longestWord.length) {
      _longestWord = word;
    }
  }

  return _longestWord;
};

console.log(longestWord("this is a web development course") === "development");
