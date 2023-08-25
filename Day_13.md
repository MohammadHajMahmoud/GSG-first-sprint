# Scopes
- in js we got compilation and execution
- in compilation we take all the declrations and store them in a global scope bucket 
- there can be buckets within butckets like when we create a function and we declare a variable in it and we assing it a vlaue
- using `use strict` at the top of our code makes the execution of a variable that wasnt declared gives an error
  Ex
```javascript
  'use strict'
  topic = "hey"
  console.log(topic) // this will give a refrence erro in both cases 
  function myAge(){
    age = 22
    console.log(age)
  }
  myAge()// on execution this line will cause a refrence error due to the use of 'strict mode'
        // but in defual mode it would just print `22` in     
  console 
```
  Ex  on function parameter when the scope manager assings it 
  - when ask() is executed it gives a refrence error bacause we dont have an access on its scope
  
  ![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/a486fd4f-eceb-4174-a4bc-a50fa3c414af)
 ## Named over anonymous function expressions 
- should use named function expressions over anonymous
  ```javascript
  var fun = fnuction(){}// anonymous 
  var fun= namedFun function(){} // named 
  ```
- Reliable function self-reference (recursion, etc)
- More debuggable stack traces
- More self-documenting code

## Delieverables
 ### QUESTION #1

Create a function called `arrowHOF` that takes an arrow function as input and
returns a new arrow function that enhances the behavior of the input function. 

The enhanced function should accept additional arguments and execute the input
function multiple times based on these arguments.


```javascript

const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
}

const exampleNormalFunc2 = (x, y) => {
  return x * y;
}

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
}


const arrowHOF = (normalFunc) => {
  // write your code here;
}

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35))(4); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once

```

-------------------------------------------------------------------

### QUESTION #2

Build a function called `preserveThis` that takes a function as input and
returns a new arrow function that behaves the same way as the input function but
preserves the original this context when used as a method of an object.

```javascript

// Example object
const obj = {
  name: 'John',
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const preserveThis = (func) => {
  // write your code here;
  return func;
}

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet('Hello'); // Output: "Hello, John!"

```

-------------------------------------------------------------------

### QUESTION #3

Consider the 2 following examples and distinguish the different output in each
one with them with a reasoning.

**Example 1:**

```javascript
function outer1() {
  var x = 10;

  var inner1 = function() {
    console.log(x);
  };

  inner1();
}

outer1(); // Output: 10
```

> **Reasoning for example 1's output:**  
> .................................................................................

--------

**Example 2:**

```javascript
function outer2() {
  var x = 10;

  var inner2 = function() {
    var x = 20;
    console.log(x);
  };

  inner2();
}

outer2(); // Output: 20
```

> **Reasoning for example 2's output:**  
> .................................................................................
