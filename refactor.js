/**
 * Exercise 3
 * 2. For the longest word
 * Create a function to find the longest word in a given string.
 * i.e. longestWord("this is a web development course") ➞  "development"
 */

const longestWord = (sentence = "") => {
  if (typeof sentence !== "string") {
    return "";
  }

  let words = sentence.split(" ");

  let _longestWord = words.reduce(function(acc, curr) {
    console.log("acc: ", acc, "curr: ", curr);

    if (curr.length >= acc.length) {
      acc = curr;
    }

    return acc;
  }, "");

  return _longestWord;
};

console.log(longestWord("this is a web development course") === "development");

/**
 * **4. AEIOU: Vowels.**
  Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 

  i.e. findVowels("this is a string") ➞ 4
 */

const findVowels = sentence => {
  const vowels = ["a", "e", "i", "o", "u"];

  const characters = sentence.split("");
  const stringVowels = characters.filter(char => vowels.includes(char));

  return stringVowels.length;
};

console.log(findVowels("this is a string") === 4);

/**
 * Find count of characters
 */

const findCharactersCount = (
  sentence,
  characterToFind = ["a", "e", "i", "o", "u"]
) => {
  const characters = sentence.split("");
  const stringVowels = characters.filter(char =>
    characterToFind.includes(char)
  );

  return stringVowels.length;
};

console.log(findCharactersCount("this is a string", ["x"]));
console.log(findCharactersCount("this is a string", "i,u,x,dfjfldfjld,f"));

/**
 * In a world with out String.includes
 *
 *
 */
// String.prototype.includes = function() {
//     throw Error("hahahaah nice try");
//   };

//   const findCharactersCount = (
//     sentence,
//     characterToFind = ["a", "e", "i", "o", "u"]
//   ) => {
//     const characterToFindIsNotAnArray = !Array.isArray(characterToFind);

//     if (characterToFindIsNotAnArray) {
//       characterToFind = [characterToFind];
//     }

//     const characters = sentence.split("");
//     const stringVowels = characters.filter(char =>
//       characterToFind.includes(char)
//     );

//     return stringVowels.length;
//   };

//   console.log(findCharactersCount("this is a string", ["x"]));
//   console.log(findCharactersCount("this is a string", "i,u,x,dfjfldfjld,f"));
