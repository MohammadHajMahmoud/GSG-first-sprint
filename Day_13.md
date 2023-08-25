# Scopes
- in js we got compilation and execution
- in compilation we take all the declrations and store them in a global scope bucket 
- there can be buckets within butckets like when we create a function and we declare a variable in it and we assing it a vlaue
- using `use strict` at the top of our code makes the execution of a variable that wasnt declared gives an error
  Ex
  ```javascript
  'use strict'
  topic = "hey"
  console.log(topic) // this will give a refrence erro in both cases 
  function myAge(){
    age = 22
    console.log(age)
  }
  myAge()// on execution this line will cause a refrence error due to the use of 'strict mode' but in defual mode it would just print `22` in     
  console 
  ```
