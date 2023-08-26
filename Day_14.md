## Advanced Scopes

### Dynamic scope
- the scope of a variable is determined by the sequence of function calls that lead to the current point of execution, rather than the structure of the code itself.
```javascript
function printer() {
    print(x);  // This will print the value of x from the calling context, not the definition context. when its being called 
}
function func() {
    var x = 10;
    foo();
}
func();

```
### Lexical scope 
- the scope of a variable or a function determined by its location in the source code during the compilation phase. lexical scope is based on where variables and functions are physically written in the code. so its the opposite of dynamic scope
```javascript
function outer() {
    const outerVar = "I'm from outer";
    function inner() {
        const innerVar = "I'm from inner";
        console.log(outerVar);  // inner can access outerVar
    }
    inner();
}
outer();
```
### Function scope
- Function scope refers to the visibility and accessibility of variables within a specific function and its nested functions
functoion scoping allows my code to be flexible , like when i want to assign a different value to my variable in some area in my code
Ex 
```javascript
function example() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log(x);  // x is accessible here
    }
    function inner() {
        var z = 30;
        console.log(y);  // y is accessible here
    }
    inner();
}
example();
```
### IIFE Pattern
- this is a pattern to write anonymous functions that run once and only once 
it helps to avoid code and values from global scope
Ex 
```javascript
var teacher = "mohammad"
(function(teacher){
console.log(teacher)})("suzy")

console.log(teacher)// outputs `mohammad` 
```
### Block Scoping 
- A block is a set of statements enclosed within curly braces {}.
- this type of scoping mainly works for `let` and `const` cuz beacuse they dont apply hoisting
```javascript
// Using var (function scope)
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // Outputs: 10
}
exampleVar();

// Using let (block scope)
function exampleLet() {
    if (true) {
        let y = 20;
    }
    // The following line would result in an error since 'y' is not accessible here
    // console.log(y);
}

exampleLet();
```
### choosing `let` or `var`
- choose `var` for global variables that we want to access form everywhere
- choose `let` when we want to have more control and managment of our variables within a scope
### Hoisting 
- Hoisting is a concept in JavaScript where variable and function declarations are moved, or "hoisted," to the top of their containing scope during the compilation phase.
- Hoisting applies to both var and function declarations but not to let and const declarations.
```javascript
var teacher = "Kyle" ;

function otherTeacher() {
console.log(teacher) ;
var teacher = "Suzy"
}
otherTeacher() ;
```
here the output is defined because teacher that is within the function scope was not intilized yet (occured)
### QUESTION #1

Given the following code snippet and **explain what's happening**.

```javascript
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
```

- Variable i in the loop is shared among all iterations of the loop and the callback functions passed to setTimeout. By the time the callbacks are executed, the loop has already completed, and the value of i is 5.
With this change, each iteration of the loop will have its own separate i value that is captured by the closure created by the setTimeout callback function.
-------------------------------------------------------------------

### QUESTION #2

Given the following code snippet and **explain what's happening**. 

```javascript

let array = []; 
for (let i = 0; i < 5; i++) {
   array.push(i); 
}
console.log("Current array is: ", array);

```
Provide a solution to fix it. 
by changing the array and getting it out of the block scope because on each itaration the array was getting empty and pushed with a single item from the loop but with the current change the array is no longer getting emptyed by the loop and keeps on storing after its done it prints all 
-------------------------------------------------------------------

### QUESTION #3

Given the following code snippet and **explain what's happening**. 

```javascript

let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());

```

Provide a solution to fix it. 
the same variable `i` is shared among all the arrow functions in the loop, and by the time the functions are executed, the loop has already finished, leading to the value of i being 5 for all of them. so when we use `let` instead it creates a block scope for each iteration unlike `var` 
