# Values and Data Types
- Values are the chunks of information that we store 
- Data types represent the type of value that we have stored and what kind of operations it can go through

### typeof
```javascript
typeof x // outputs the data type of the X variable depedning on it value 
```
## JS two kinds of data 
- primitive (string, number , boolean , undefined , null)
- Objects
  
### null vs undefined 
- null is an assigned value that is meant for a variable
- undefined means a variable exists but it assinged gived a value yet
- typeof null is object ?!

### IndexOf && include
- used to find the index of an input argument 
```javascript
"ALOHA".indexOf("L") // outputs 1
"ALOHA".includes("A") // outputs true
```
## Exercises with Strings
```javascript
//add your last name in the players listing
document.getElementyById("pl-name").append("haj mahmoud") =
//find whether page title contains javascript
document.title.includes("JavaScript")
//Captlise The Heading Tic tac toe
document.querySelector("header h1").testContent.toUpperCase()
```
# Operators 
Exercise
Use arithmetic operators to compute:
```javascript
//The total number of siblings of your parents
8+7 // output 15
//The average number of hours you slept this week
(3+3+12+5+6+7+4)/7 //output 5.7
//The number of dogs you'd pet in a week if you pet 1 dog per hour while awake
(24-5.7)*7 // output 128.1
```
Exercise
Use equality operators to compute:
```javascript
//1==1 && 1==1
true 
//1===1 is true but 1==="1" is false because it takes type into consideration 
```
#Expressions 
an expression is a piece of code that produce a value  

## let, const 
- **let** assings a value to a variable ex ```let name = moha```
- **const** does the same but its changable  ```const id = 4056445416```
  
#Variables 
variables point to values and do not contain them 

## Expression vs Statment
Statment tells js to do something while an expression asks js for a value  
```javascript
 //Expression Ex 
document.getElementById("id")pp
//Statment Ex
let fruits = [banana , apple]
```
#DELIEVERABLES 
# Learning sprint (1), week (3), day (2) delieverables

### QUESTION #1

Consider the following JavaScript code:

```javascript
let a = 0;
let b = "0";
let c = false;
let d = "false";

console.log(a == b); // true , == doesnt compare data type /not strict 
console.log(b === c); false because they are not the same type
console.log(!!d); //true because every its a non-empty string which has the value of true 
                 // and !!true == true 
```


-------------------------------------------------------------------

### QUESTION #2:


Consider the following JavaScript expression:

```javascript
console.log(4 + 5 * "7");
//5*7 goes first because multiplication got higher prio and 7 gets converted to num data type
//so 4 +35 = 39 is the final output

```


-------------------------------------------------------------------

### QUESTION #3:

Evaluate the following expression:

```javascript
let result = 5 + 2 * 3 - 1;
// 5 + 6 - 1 = 10 
// multiplication goes first then the other operations 
```

-------------------------------------------------------------------

### QUESTION #4:

Consider the following code:

```javascript
let x = 10;
let y = '10';
console.log(x == y);
console.log(x === y);
```
What will be the output of each `console.log` statement? **_You MUST explain WHY_**.

-------------------------------------------------------------------

### QUESTION #5:

Given the code below:

```javascript
let num = "15";
let isPositive = true;
let result = (num > 10 && isPositive) || num < 0;
console.log(result);
```

What is the value of result? **_You MUST explain the steps of evaluation taken by JS_**
