# Arrays 
- A data type that is used to store collections of values
- Each value in an array is called an "element."
- Arrays can store different types of elements, including numbers, strings, objects, and even other arrays.
## Usefull array methods 

| Method      | Description |
| ----------- | ----------- |
| sort()      | sorts the items of the array in an ascending order      |
| join()      | create a string from the elements of an array      |
| concat()    | combine two or more arrays or values into a new array      |
| push()      | adds an element to the end of the array |
| pop()       | removing the last element |
| shift()     | removing first element|
| unshift()   | adding an element to the beginning |

### Mutable vs immutable 
- mutable means it can be edited like arrays
- immutable means it cant be edited like primitive tytpes
- concat doesnt mutate the array it only make a copy while push and other methods do mutate the array
  
# Objects
 - Collects multiple values together to describe more complex data
 - made of  pairs of key-value
 - objects are mutable
   ```javascript
   dog={name:buck}
   dog.name= shuck 
   // the property name changes
   ```
## Exercise 
  Create an Object that Represents you 
  ```javascript
  const mohammad ={
  name : "mohammad",
  home : "qalqilia",
  languages : ["English" , "Arabic","Japanese","Turkish"],
  pet : null, // my cat died a year ago :(
  vehicle : null,
  hobbies:[ "eating shwarma/falafel" , "gaming" , "TV shows"]
};
mohammad.freeze() // make the object makes it immutable
  ```
### Object methods 
- are methods that are wtihin the objcets
  ```javascript
  const car ={
  company : mercedes,
  makeSound : function (){
  console.log("VROOOM VROOOM")
  }
  }
  car.makeSound
  ```
### Nested Objects 
  ```javascript
  const car ={
  company : mercedes
  makeSound : function (){
  console.log("VROOOM VROOOM")
  },
  engine{
    name :
    horses : 700
  }
  }
//the engine is an object within an object 
   ```
## Exercise
From the spiceGirls object, how can we retrieve:
- "Girl Power"
- The object representing Ginger Spice
- "Spiceworld"
 "Victoria"
```javascript
const spices = [
{name: "Emma", nickname: "Baby"},
{name: "Geri", nickname: "Ginger"},
{name: "Mel B", nickname: "Scary"},
{name: "Mel C", nickname: "Sporty"},
{name: "Victoria", nickname: "Posh"}
];

const spiceGirls = {
albums: ["Spice", "Spiceworld", "Forever"],
motto: "Girl Power",
members: spices
};
//Answers
spiceGirls.motto
spices[1]
spiceGirls.albums[1]
spices[4].name
```
# Delieverables 
### Copy Array Items Using slice()
```javascript
function forecast(arr) {
  let todaysWeather = arr.slice(2,4)
  return todaysWeather
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
### Combine Arrays with the Spread Operator
```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence=['learning',...fragment,'is','fun']; 
  return sentence;
}
console.log(spreadOut());
```
### Profile Lookup
```javascript
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i =0 ; i< contacts.length; i++){
    if(contacts[i].firstName==name){
        if(contacts[i][prop]){
          return contacts[i][prop]
        }else{
          return "No such property"
        }
    }
  }
  return "No such contact"
}

lookUpProfile("Akira", "likes");
```
### Write Reusable JavaScript Functions
```javascript
function reusableFunction(){
  console.log("Hi World")
}
reusableFunction()
```
### Understanding Undefined Value returned from a Function
```javascript
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();
```
### Return a Value from a Function with Return
```javascript
function timesFive (num){
  return num*5
}
```
