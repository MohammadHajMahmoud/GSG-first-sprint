# Types
- symbol is a primitive data type,used as property keys in objects to ensure that the keys are truly unique
- in JS variables dont have types, values do
- typeof null is an object
- typeof an array is an object
```javacsript
let v = 42n
typeof V // BigInt
```
- undeclared is not having an existing variable
- undefined is having avariable but not having an assigned value to it
- NaN: indecates an invalid number.
- the triple equal operator LIES!!!! NaN !== NaNA
- NaN does mean not a number it means its a number that is not valid
### Negative zero
```javacsript
var trendRate = -0
Object.is(trendRate,-0) // true
Object.is(trendRate,0) // false
-0===0 // true
```
## TypeCheck ex 
```javascript
console.log(Object.is(42,42) === true);// true
console.log(Object.is("foo","foo") === true);// true
console.log(Object.is(false,false) === true); // true
console.log(Object.is(null,null) === true); // true 
console.log(Object.is(undefined,undefined) === true);// true 
console.log(Object.is(NaN,NaN) === true);// true 
console.log(Object.is(-0,-0) === true);// true 
console.log(Object.is(0,0) === true);// true 

console.log(Object.is(-0,0) === false);// true 
console.log(Object.is(0,-0) === false);// true 
console.log(Object.is(0,NaN) === false);// true 
console.log(Object.is(NaN,0) === false);// true 
console.log(Object.is(42,"42") === false);// true 
console.log(Object.is("42",42) === false);// true 
console.log(Object.is("foo","bar") === false);// true 
console.log(Object.is(false,true) === false);// true 
console.log(Object.is(null,undefined) === false);// true 
console.log(Object.is(undefined,null) === false);// true 
```
### Abstaract operations 
- toString
- toNumber // toNumber([null])// 0 becase it becomes a empty string first
- to boolean
