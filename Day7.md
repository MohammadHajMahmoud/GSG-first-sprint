# Thread of Execution 
- JavaScript executes line by line
- JavaScript store variables , fuctions and outputs in the global memory
- Java script is single threaded 
- when javascript executes function it stores the arguments and the result in the local memory in its own exection context

# Call Stack 
- JavaScript keeps track of what function is currently running
- Run a function - add to call stack
- Finish running the function 
- JSremoves it from call stack
- Whatever is top of the call stack that's the function we are recurrently running

# DRY(dont repeat yourself)
- instead of making a function that serves the same purpose but for another case just make a function that takes a parameter 
  and we can reuse it for different cases

  ### Ex on function execution in js
  ```javascript
  // What if want to copy array and divide by 2?
  function copyArrayAndDivideBy2 (array) {
  const output =[]
  for (let i= O; i < array.length; i++") {
  output.push(array[i]/2)
    }
  return output;
  }
  const myArray =[1,2,3] ;
  const result = copyArrayAndDivideBy2 (myArray) ;
  ```
  ![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/62e05192-0f84-4081-b38a-9ab996a3ddd3)
### another Ex 
- this time im doing it :) 
```javascript
  function copyArrayAndManipulate(array, instructions) {
    const output t[]
    for (let i O; i < array. length; i") {
    output. push(instructions(array[i])) ;
  }
return output;
}
function multiplyBy2(input) { return input * 2; }
const result = copyArrayAndManipulate([1,2,3],multiplyBy(2)) ;
```
  - solution 
    ![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/18dd81f7-dfeb-4d88-912b-60e8a3758c6e)

## Callback
- the function who calls another function is the higher order function
## Deliverables 
- Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
```javascript
 const squareList = arr => {
   let  filteredArr = arr.filter(a=> a>0 && Number.isInteger(a)).map(a=>a*a)
  return filteredArr;
};
```
- Apply Functional Programming to Convert Strings to URL Slugs
```javascript
function urlSlug(title) {
  let lowerCaseTitle = title.trim().toLowerCase()
  let arrTitle = lowerCaseTitle.split(/\s+/)
  let strTitle = arrTitle.reduce((a,b)=>{
return a+"-"+b
})
return strTitle
}
```
- Implement a JavaScript function called mapAsync that takes an array and a callback function. The function should map each element of the array to a new value using the callback function asynchronously.
The final result should be returned as a Promise.
```javascript
async function mapAsync(array, callback) {
  const resultArray = [];

  for (const item of array) {
    const asyncCall = await callback(item);
    resultArray.push(asyncCall);
  }

  return resultArray;
}

const inputArray = [1, 2, 3, 4, 5];
const asyncMapCallback = async item => {
  return item ;
};

mapAsync(inputArray, asyncMapCallback)
```
- Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. The function should use recursion to handle the calculation and demonstrate understanding of the call stack.
```javascript
function sumRange(start, end) {
  if (start === end) {
    return start; // Base case: single integer in the range
  } else {
    return start + sumRange(start + 1, end); // Recursive case
  }
}
```
Explaination 
When you call the sumRange function with a range like sumRange(1, 5), it calculates the sum by repeatedly breaking down the range into smaller parts using recursion until it gets to a point where it can directly calculate the sum. 
![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/a1edd05a-0c2f-458e-90db-4599e4c160d5)
