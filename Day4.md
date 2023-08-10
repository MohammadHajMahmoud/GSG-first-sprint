# Functions Parameters & arguments 
- functions do things
```javascript
function add(x,y){
  return x+y;
}
add(2,3)
// x,y are parametrs
//2,3 are arguments 
```
- parameters are the input the function expects while arguments are the values called
- when declaring a fucntion always use valid variabels
- a function with no return statment doesnt give a value 
```javascript
function printHello(){
  console.log("Hello:)
}
function printHi(){
  return 'Hi'
}
let x = printHello()
//x is undefiened
let y = printHi()
//y= "Hi"
```
## Exercise 
- multiply
```javascript
function multiply(x,y){
  return x*y
}
```
- yell
```javascript
function yell(str){
  return str.toUpperCase()
}
```
- longerThan
```javascript
function longerThan(arr1,arr2){
  return arr1.length > arr2.length
}
```
## Arrow Functions 
- Shorter syntax compared to traditional function expressions.

```javascript
// Example 1: Adding two numbers
let add = (a, b) => a + b;
```
## Exercise 
```javascript
//divide
const divide =(num1,num2)=> num1/num2;
//whisper
const whisper =str=> str.toLowerCase()
//shorterThan
const shorterThan =(arr1,arr2) => arr1.length<arr2.length
```
# Scope
- Scope is context in which variables, functions, and objects are accessible in a  part of your code
- **Global Scope** is the scope where variables can be accessed from any part of your code, including within functions
- **Local Scope** is the scope where variables declared inside a function are accessible only within that function and any nested functions.
### Let & Scope
```javascript
let feeling = "free";
function trap() {
  feeling = "boxedIn";
}
trap();
console.log(feeling);
//calling the trap function assinged a new value to the variable feeling 
```
## var vs let
-variables declared with var have function scope or global scope, depending on where they are declared.
-variables declared with let have block scope, which means they are limited to the block in which they are defined like when they are defined within a function.
## addEventListener Exercise 
```javascript
//Capitlize the test of the true button when its clicked
//HERE MRS ANJENA MADE A MISTAKE (she made it to full uppercase instead of capitlizing it ) 
let trueButton = optionBtns[0]
trueButton.addEventListener("click",(event)=>{
let str = trueButton.textContent
trueButton.textContent = str.charAt(0).toUpperCase() + str.slice(1)
}
//change the h1 text to 'hovering' when the mouse moves into the element
let h1 = document.getElementById("h1");
h1.addEventListener("mouseover", ()=>{
h1.textContent = "hovering";
});
//change the h1 text to "Quiz.js" when the mouse moves out of the element
h1.addEventListener("mouseout", ()=>{
h1.textContent = "Quiz.js";
});
```
