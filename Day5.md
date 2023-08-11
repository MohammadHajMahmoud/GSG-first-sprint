# Conditionals 
if,else & else if 
- if the **if** condition is met then it block of code is executed
- if not then the **else** code block is exectued
- sometimes we get extra condtions with their own block of code using **else if**
  ```javascript
  function compareNumbers(x, y) {
    if (x > y) {
        return "x is greater than y.";
    } else if (x < y) {
        return "x is less than y.";
    } else {
        return "x is equal to y.";
    }
  }
   ```
## Exercise
- Write a conditional that logs a message saying whether your first name or last name is longer
  ```javascript
  let firstName = "mohammad";
  let lastName = "mahmoud";

  if (firstName.length > lastName.length) {
    console.log("First name is longer.");
  } else if (firstName.length < lastName.length) {
    console.log("Last name is longer.");
  } else {
    console.log("First name and last name have the same length.");
  } ```
- check wether an array is empty
```javascript
function isEmpty(array) {
    return array.length === 0;
}
```
- truthy or falsy array
``` javascript
      let testArray = [];
      if (testArray) {
        console.log("The array is truthy.");
      } else {
      console.log("The array is falsy.");
  }
  ```
## Ternary operator 
- is a concise way to write simple conditional expressions
- its a shortend way to write an if else statement
  ```javascript
  let mood = (weatherForecast === "sunny") ? "happy" : "sad";
  //mood is happy if the condition is met 
  // IF NOT then its Sad :(
  ```
## Loops 
- helps us not to repeat our code
- iterate over items in some data structure
```javascript
//normal for loop that we all know 
const word = "aloha";
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}
// for ...in loops example
//i think its best to rotate over objects using this 
const word = "aloha";
for (let char in word) {
    console.log( word[char]);
}
// for...of
const word = "aloha";
for (let character of word) {
    console.log("Character: " + character);
}
```

## maps & filters
- The map function is used to go through all the items of an array, and create a new array with the results of applying function to each element 
- The filter function is used to create a new array with all elements pass a condition
### Exercise 
```javascript
const spices = [
    { name: "Emma", nickname: "Baby" },
    { name: "Geri", nickname: "Ginger" },
    { name: "Mel B", nickname: "Scary" },
    { name: "Mel C", nickname: "Sporty" },
    { name: "Victoria", nickname: "Posh" }
];

// create a names array with only name of each girl 
const names = spices.map(spice => spice.name);
//create an array with the girls who nickname ends in 'y'
const endIny = spices.filter(spice => spice.nickname.endsWith("y"));
```
## spread operator 
- used to pass all the items from an array as arguments to function or method instead of looping on the original array
  ```javascript
  const skills = ["HTML", "CSS", "JS"];
  const newSkills =
  ["React", "TypeScript", "Node"]
  skills.push(...newSkills);
 ```
 ## Asynchronous vs Synchrnous
 - In synchronous operations are executed one after the other, and each task must wait for the previous one to complete before it can start.
 - In asynchronous operations can run independent of each other. While one task is waiting for something to complete , the program can continue executing another task without waiting for the previous ones.
```javascript
console.log("first");
setTimeout(() => {
    console.log("third :( ");
}, 2000);
console.log("second");
  // Explaination : the the console.log both work before the setTimeout function becuase they are synchronus 
  //they only wait each other to execute 
  // when the setTimeout is reached it goes to the event loop waiting for its time to be executed(its an asynchronous) 
```
