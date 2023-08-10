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
- a function with no return statment doesnt give a vaue 
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
-yell
```javascript
function yell(str){
  return str.toUpperCase()
}
```
-longerThan
```javascript
function longerThan(arr1,arr2){
  return arr1.length > arr2.length
}
```
## Arrow Functions 




