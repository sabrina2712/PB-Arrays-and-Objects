const students = ["Kai", "Jenna", "Paul", "Liz"];

const studentsCopy = students.map(function(name) {
  return name;
});

// const studentGreetings = students.map((name) => "Hello " + name);
// console.log(studentGreetings);

const Map = (array, callBackFunction) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const newElement = callBackFunction(array[i]);
    newArray.push(newElement);
  }

  return newArray;
};

const studentGreetings = Map(students, name => "Hello " + name);
const greetings = studentGreetings.forEach(name => console.log(name));
const mappedGreetings = studentGreetings.map(name => console.log(name));
console.log(greetings, mappedGreetings);

const Filter = (array, callBackFunction) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callBackFunction(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};
