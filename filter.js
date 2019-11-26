// "Classic approach"

// const prepareSentence = (sentence, notAllowedCharacters = [".", ",", "!"]) => {
//   let characters = sentence.split("");

//   let newSentence = [];

//   for (let i = 0; i < characters.length; i++) {
//     if (!notAllowedCharacters.includes(characters[i])) {
//       newSentence.push(characters[i]);
//     }
//   }

//   console.log(newSentence.join(""));

//   return newSentence;
// };

// Long form with filter
const prepareSentence = (sentence, notAllowedCharacters = [".", ",", "!"]) => {
  const characters = sentence.split("");

  const filterCharacters = characters.filter(char => {
    if (notAllowedCharacters.includes(char)) {
      return false;
    }

    return true;
  });

  const newSentence = filterCharacters.join("");

  return newSentence;
};

// Short
const prepareSentence1 = (sentence, notAllowedCharacters = [".", ",", "!"]) =>
  sentence
    .split("")
    .filter(char => {
      if (notAllowedCharacters.includes(char)) {
        return false;
      }

      return true;
    })
    .join("");

console.log(prepareSentence1("The quick brown fox.") === "The quick brown fox");
console.log(
  prepareSentence1("Nancy is very pretty.") === "Nancy is very pretty"
);
console.log(
  prepareSentence1("Check back tomorrow, man!") === "Check back tomorrow man"
);
console.log(prepareSentence1("Today is Wednesday.") === "Today is Wednesday");

/**
 * More examples
 */

//1
const scores = [10, 44, 1004, 10938, 2];

// const scoresThatMatter = scores.filter((score) => score > 100);
const scoresThatMatter = scores.filter(function(currentNumber) {
  return currentNumber > 100;
});

console.log(scoresThatMatter);

//2
const persons = [
  { name: "Jessica", city: "Berlin" },
  { name: "Bill", city: "Hamburg" },
  { name: "Sophie", city: "Dessau" }
];

const isFromBerlin = person => person.city === "Berlin";

const peopleInBerlin = persons.filter(isFromBerlin);

console.log(peopleInBerlin);

//3

const likesSwimmingAlot = person => person.hobbies[0] === "Swimming";

const fillWithDefaults = person => {
  if (!person.name) {
    person.name = "";
  }

  if (!person.hobbies) {
    person.hobbies = [];
  }

  return person;
};

const persons2 = [
  { name: "Jessica", hobbies: ["Swimming"] },
  { name: "Bill", hobbies: ["Dancing"] },
  { name: "Sophie" }
];

// Functions separated
const peopleInBerlin2 = persons2
  .map(fillWithDefaults)
  .filter(likesSwimmingAlot);

// functions inline
const peopleInBerlin3 = persons2
  .map(person => {
    if (!person.name) {
      person.name = "";
    }

    if (!person.hobbies) {
      person.hobbies = [];
    }

    return person;
  })
  .filter(person => person.hobbies[0] === "Swimming");

console.log(peopleInBerlin3);
