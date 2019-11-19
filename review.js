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

/**
 * **4. AEIOU: Vowels.**
  Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 

  i.e. findVowels("this is a string") ➞ 4
 */

const findVowels = (sentence) => {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let characterOfSentence of sentence) {
    if (vowels.includes(characterOfSentence)) {
      vowelsCount++;
    }
  }

  // Basic for loop alternative
  // for (let i = 0; i < sentence.length; i++) {
  //   if (vowels.includes(sentence[i])) {
  //     vowelsCount++;
  //   }
  // }

  return vowelsCount;
};

console.log(findVowels("this is a string") === 4);
