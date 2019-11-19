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
