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
- 
