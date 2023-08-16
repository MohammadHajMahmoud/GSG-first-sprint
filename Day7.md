![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/d2a10f5d-6534-4829-9d9b-eec1ab846007)![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/e300d55b-7fdb-4100-80f5-2884d8e5b1f0)
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
  What if want to copy array and divide by 2?
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
