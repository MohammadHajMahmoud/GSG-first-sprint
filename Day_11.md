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
## Coearcion
Coearcion is the automatic conversion of values from one data type to another in certain contexts
### Boxing 
- indirect way of using coearcion like when we use the .length method
### some corner cases 
![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/6acd5ceb-9557-447a-b671-031f48404c34)![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/86859182-10d1-4c33-b298-65d6e416ac09)

## Delieverables 
## Question 1:

Write a function called `convertStringToNumber` that converts a string to a
number using the unary plus operator. 

If the input is not a string, return an object of the input's value and type.

```javascript
function convertStringToNumber(input) {
  if (typeof input === 'string') {
    return +input;
  } else {
    return {value: input,type: typeof input}
  }
}
-------------------------------------------------------------------

## Question 2:

Write a function called `checkNaN` that takes a single argument and returns
`true` if the argument is `NaN` and `false` otherwise. 

```javascript
function checkNaN(value) {
  return value !== value; // NaN is the only value that is not equal to itself
}
```

-------------------------------------------------------------------

## Question 3: 

Write a function called `isEmptyValue` that checks if a given input is an empty value (undefined,
null, or empty string). 

```javascript
function isEmptyValue(value) {
  return value === undefined || value === null || value === '';
}
```

-------------------------------------------------------------------

## Question 4: 

Write a function called `compareObjects` that takes 2 arguments of type
`"object"` and compares them. If both arguments are equal, return `true`. If
not, return `false`.

If either argument is not of type `"object"`, the function should return an
array of the arguments. 

```javascript
function compareObjects(input1, input2) {
  if (typeof input1 === "object" && typeof input2 === "object") {
    const keys1 = Object.keys(input1);
    const keys2 = Object.keys(input2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (input1[key] !== input2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return [input1, input2];
  }
}
```
another solution could be done by using Json.Stringfy() then comparing them  but i felt like it might be wrong cuz i dont trust it :)
-------------------------------------------------------------------

## Question 5: 

Write a function called `complexCoercion` that takes a single argument and
checks if its type is primitive, and if so returns a coerced value according to
the rules below.

coercion rules: 
- if input is primive and:
  - if input is a number, convert to string and then return a boolean. 
  - if input is a string, return a boolean.
  - if input is `null` or `undefined`, return `false`.

If input is not a primitive type, return the argument.

```javascript
const complexCoercion = (input) => {
  if (typeof input === "number") {
    return Boolean(String(input));
  } else if (typeof input === "string") {
    return Boolean(input);
  } else if (input === null || input === undefined) {
    return false;
  } else {
    return input;
  }
};
```
