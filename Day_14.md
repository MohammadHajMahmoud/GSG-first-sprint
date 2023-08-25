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
