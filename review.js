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

/**
 * **5. Missing Number.**
Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

Examples: 
* missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
* missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
* missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 
 */

const sortNumber = (a, b) => {
  return a - b;
};

// const missingNums = (arrayOfNums) => {
//   let missingNumber = 0;
//   arrayOfNums = arrayOfNums.sort(sortNumber);
//   const expectation = [];

//   for (let i = 1; i <= 10; i++) {
//     expectation.push(i);
//   }

//   for (let index in expectation) {
//     if (arrayOfNums[index] !== expectation[index]) {
//       return expectation[index];
//     }
//   }

//   return missingNumber;
// };

const missingNums = (arrayOfNums) => {
  let missingNumber = 10;
  arrayOfNums = arrayOfNums.sort(sortNumber);

  for (let index in arrayOfNums) {
    index = parseInt(index);

    if (arrayOfNums[index] !== index + 1) {
      missingNumber = index + 1;
      break;
    }
  }

  return missingNumber;
};

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5);
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10);
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7);

/**
 * **3. Reverse.**
Create a function to reverse a number. 

i.e. reverse(34532) ➞ 23543
 */

const reverse = (num) => {
  const reverseNumberString = num
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseFloat(reverseNumberString) * Math.sign(num);
};

console.log(reverse(34532) === 23543);
console.log(reverse(-34.532));

/**
 * 
 * **6. Cubed.**
Create a function that takes in an array of numbers and returns the sum of its cubes. 

Examples: 
* sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes([2]) ➞ 8
* sumOfCubes([]) ➞ 0
 */

const sumOfCubes = (numArr = []) => {
  let sum = 0;

  //Magic
  for (let num of numArr) {
    sum += num ** 3; // Math.pow(num,3)
  }

  return sum;
};

console.log(sumOfCubes([1, 5, 9]) === 855);
console.log(sumOfCubes([2]) === 8);
console.log(sumOfCubes([]) === 0);

/**
 * 
**7. Dictionary.**
Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

Notes:
* If none of the words match, return an empty array.
* Keep the filtered array in the same relative order as the original array of words.
*/

const dictionary = (searchString, dic) => {
  const matched = [];
  for (let word of dic) {
    if (word.startsWith(searchString)) {
      matched.push(word);
    }
  }

  return matched;
};

console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

/** 
**8. Even Number Generator.**
Create a function that finds all even numbers from 1 to the given number.

Examples:
* evenNums(8) ➞ [2, 4, 6, 8]
* evenNums(4) ➞ [2, 4]
* evenNums(2) ➞ [2]
**Notes:** 
* If there are no even numbers, return an empty array. 
* Do not include 0. 

 */
const evenNums = (num) => {
  const numbers = [];

  for (let i = 2; i <= num; i = i + 2) {
    numbers.push(i);
  }

  return numbers;
};

console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));

/**
 * **Bonus: Alphabetical Order.**
Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

i.e. alphaOrder("webdev") ➞ "bdeevw" 
 */
const alphaOrder = (word) => {
  // const charArray = word.split("");
  // const sortedArray = charArray.sort();
  // const sortedWord = sortedArray.join("");
  // return sortedWord;

  return word
    .split("")
    .sort()
    .join("");
};

console.log(alphaOrder("webdev") === "bdeevw");

// Exercise 4

/**
 * **1. Where Have My Four Letter Words Gone?**
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

Examples:
 
* isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"] 
* isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
* isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]
 */

const isXLetters = (arrayOfWords, number = 4) => {
  const fourLetterWords = [];
  // loop over array
  // for (let i = 0; i < arrayOfWords.length; i++) {
  //   let word = arrayOfWords[i];
  //   // word (strings got lengths)!
  //   if (word.length === 4) {
  //     fourLetterWords.push(word);
  //   }
  // }
  for (let word of arrayOfWords) {
    // word (strings got lengths)!
    if (word.length === number) {
      fourLetterWords.push(word);
    }
  }

  return fourLetterWords;
};
let words = ["John", "James", "Jack", "Jeanne"];
console.log(isXLetters(words));
console.log(isXLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isXLetters(["Dog", "Cat", "Deer"], 3));

// Default parameter example

const greeting = (name = "") => {
  console.log("Hello " + name);
};

greeting();
greeting("Oliver");

// When no default parameter
const helloUser = (name, age, birthplace) => {
  if (!age) {
    return console.log(`Hello ${name} you are born in ${birthplace}`);
  }
  console.log(
    `Hello ${name} you are ${age} years old and you are born in ${birthplace}`
  );
};

helloUser("Jenna", 20, "London");
helloUser("Peter", null, "London");
