// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
console.log(cohort.split(""))

// a) Your answer: ["G", "o", "l", "f", " ", "2", "0", "2", "2"]
// b) Verify and explain: Correct! .split built in method transforms the string into an array with each character in its own index, including the space.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: undefined. I seem to have overlooked the lack of a return in this function.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: .map higher order function iterates through each value in the array and performs the given function to it, returning an array the same length. The function inside .map is multiplying the value, under the parameter number, by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Correct! The .filter higher order function iterates through the given array and removes values defined in the function, returning a smaller array. Here, the function is using the modulo 2 method to determine if each value is odd, thus kept in the returned array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: Correct! The key 'languages' is being accessed inside the myCodingSkills object via dot notation, and the attached array is being accessed at the 0 index (first element in the array)

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {George, Foxtrot, 2022}
// b) Verify and explain: Right idea! The constructor method in the Learn class takes a name, and adds it as the value to the student key. The other two keys have given values. The "new" keyword invokes the class, running the constructor to create the new object learnStudent. Logging learnStudent logs the new object. I forgot to show the object will also display the key in the key:value pairs.
