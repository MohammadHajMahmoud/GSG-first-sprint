
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
