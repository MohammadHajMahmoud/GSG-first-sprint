# Closures
- when a function is defined within another function and has access to its parent function's variables its called a closure
- closures do memorise 
- simple clousre example that memoriese a counter
- backpack is the data each closures instance have 
```javascript
function outer(){
  let counter = 0
  function increment(){
    counter++;
    console.log(counter)
  }
  return increment
}
var myFunc = outer()
myFunc()
myFunc()
// this code increments the counter for myFunc twice
// myFunc and outer are seperate from each other (both have a different execution context
var amogus = outer()
amogus()
amogus()
// this doesnt increase the outer nor the myFunc couter
// it increases its own (they both have different backpacks 
```
- Lexical scope, also known as static scope, refers to how the scope of variables and identifiers is determined based on their physical placement within the source code of a program.
- Ex
```javascript
function outer() {
  var outerVar = "I am in outer";

  function inner() {
    var innerVar = "I am in inner";
    console.log(outerVar);  // Inner function can access outer function's variable
  }

  inner();
}

outer();
```
Explaination:  the function inner has access to the variable outerVar defined in the containing outer function. This is because of lexical scope. When inner is defined, it "closes over" the scope of outer, allowing it to access variables from that scope even after outer has finished executing.
# Some exercises 
```javascript
/ CHALLENGE 1
function createFunction() {
  function log(){
   console.log('hello')

  }
	return log
}

 const function1 = createFunction();
 function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	function printer(){
    console.log(input)
  }
  return printer;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
 const printHello = createFunctionPrinter('hello');
 printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
 willCounter();
 willCounter();
 willCounter();

 jasCounter();
 willCounter();


function addByX(x) {
let step = x;
  function add(start){
    console.log('addByX', start + step)
    return start + step;
  }
	return add;
}

// /*** Uncomment these to check your work! ***/
 const addByTwo = addByX(2);
 addByTwo(1); // => should return 3
 addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

 const addByThree = addByX(3);
 addByThree(1); // => should return 4
addByThree(2); // => should return 5

 const addByFour = addByX(4);
 addByFour(4); // => should return 8
 addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
let output;
  function callOnce(x) {    
    if(output > 0){
      return output;
    } else {
      output = func(x)
      return output;
    }
  }
  return callOnce;
  
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
 console.log(onceFunc(4));  // => should log 6
 console.log(onceFunc(10));  // => should log 6
 console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
  let numCalls = 0
  function calledAfter() {
    numCalls++;
    if(numCalls == count) {
      func()
    }
  }
  
  return calledAfter

}
```
## Delieverble 
-Write a closure named createCounter that takes an initial value start and returns a function. The returned function, when invoked, should increment the counter by 1 and return the updated value.

```javascript
function createCounter(start) {
  let counter = start;
  function increment() {
    counter++;
    return counter;
  }
  return increment;
}
const counter1 = createCounter(5);
console.log(counter1());// 6 
```
- Write a closure named calculateAverage that takes an array of numbers, nums, and returns a function. The returned function, when invoked, should calculate and return the average of the numbers in the array.

```javascript
function calculateAverage(nums) {
  let total = 0;
  let count = 0;
  function calculate() {
    for (const num of nums) {
      total += num;
      count++;
    }
    return total / count;
  }
  return calculate;
}
const numbers = [2, 4, 6, 8, 10];
const averageCalculator = calculateAverage(numbers);

console.log(averageCalculator()); //  6
```
- Write a closure named powerOf that takes a base number base and returns a function. The returned function, when invoked with an exponent exp, should calculate and return the result of base raised to the power of exp.
```javascript
function powerOf(base) {
  function calculatePower(exp) {
    return Math.pow(base, exp);
  }
  return calculatePower;
}
const baseNumber = 2;
const powerCalculator = powerOf(baseNumber);
console.log(powerCalculator(3));  // 8 
```
- Write a closure named compose that takes multiple functions as arguments and returns a new function. The returned function should apply the provided functions in reverse order, passing the result of each function as an argument to the next function.

