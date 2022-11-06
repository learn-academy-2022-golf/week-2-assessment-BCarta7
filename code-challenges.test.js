// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"

        const object4 = { number: "fish"}
        // Expected output: "fish is not a number"

      expect(divByThree(object1)).toEqual("15 is divisible by three")
      expect(divByThree(object2)).toEqual("0 is divisible by three")
      expect(divByThree(object3)).toEqual("-7 is not divisible by three")
      expect(divByThree(object4)).toEqual("fish is not a number")
    })
  })
  //    1-ReferenceError: divByThree is not defined
  //    2-passed
    // object 4 created and added to test to verify typeof working properly.

// b) Create the function that makes the test pass.
  // create function called divByThree
  // add parameter "object" to divByThree
  // within function, destructure the object to save us future keystrokes 
  // create conditional:
    // if number is actually a number using typeof.
    // else if number modulo three strictly equals zero
    // else statement for remainder should catch any not divisible by three
  // return desired string using string interpolation to reference number

const divByThree = (object) => {
    let { number } = object
    if(typeof number !== "number") {
        return `${number} is not a number`
    } else if(number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("caps", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

      expect(caps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(caps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })
//   1-ReferenceError: caps is not defined
//   2-pass


// b) Create the function that makes the test pass.
  //create function called "caps"
  //add parameter "array" to caps
  //return an array.map higher order function:
    // in .map function, offer value as parameter. Return value index 0 capitalized with .toUpperCase built in method.
    // on same return, add .substring built in method of value to "reattach" other characters from index 1 onward in string to the returned element.

const caps = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowelIndex", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2

      expect(firstVowelIndex(vowelTester1)).toEqual(1)
      expect(firstVowelIndex(vowelTester2)).toEqual(0)
      expect(firstVowelIndex(vowelTester3)).toEqual(2)
    })
  })

//    1-ReferenceError: firstVowelIndex is not defined
//    2-pass


// b) Create the function that makes the test pass.
  // create function named "firstVowelIndex"
  // add parameter "string" to firstVowelIndex
  // within function, create for loop to iterate through each character of string. 
  // create conditional: if for loop encounters a vowel, return i to output the index of first encountered vowel.

const firstVowelIndex = (string) => {
    for ( let i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            return i
        }
    }
}
