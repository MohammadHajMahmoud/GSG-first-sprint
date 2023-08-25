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
  return (...args1) => {  // ...args1 is an array of the firs  agruments entereed 
    return (...args2) => { // ... args is an array that has the value of how much repetion is needed
      if (args2.length === 0) {
        console.log(normalFunc(...args1));
      } else {
        const result = normalFunc(...args1);
        const times = args2[0];
        for (let i = 0; i < times; i++) {
          console.log(result);
        }
      }
    };
  };
};
const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35))(4); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once

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
x is declared within the outer1 function. When the inner1 function is defined inside outer1, it captures and closes over the lexical scope of its parent function, outer1. As a result, when inner1 is invoked using inner1(), it looks for the value of x in its enclosing scope, which is the scope of outer1. Since x is 10 in the scope of outer1, the console.log(x) statement within inner1 will output 10.
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
 The first x is declared within the scope of outer2, and the second x is declared within the scope of inner2. When the inner2 function is defined inside outer2, it creates its own local scope with its own x variable that shadows the outer x variable. So, when inner2 is invoked using inner2(), it prints the value of its own local x, which is 20. The outer x variable with a value of 10 remains unchanged and is not accessible within the scope of inner2, which is why the output is 20.
> .................................................................................
