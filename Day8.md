# Closures
- when a function is defined within another function and has access to its parent function's variables its called a closure
- closures do memorise
- simple clousre example that memoriese a counter
- backpack is the data each closures instance have 
```javascript
function outer(){
  let counter = 0
  function increment(){
    counter++;
    console.log(counter)
  }
  return increment
}
var myFunc = outer()
myFunc()
myFunc()
// this code increments the counter for myFunc twice
// myFunc and outer are seperate from each other (both have a different execution context
var amogus = outer()
amogus()
amogus()
// this doesnt increase the outer nor the myFunc couter
// it increases its own (they both have different backpacks 
```
- Lexical scope, also known as static scope, refers to how the scope of variables and identifiers is determined based on their physical placement within the source code of a program.
- Ex
```javascript
function outer() {
  var outerVar = "I am in outer";

  function inner() {
    var innerVar = "I am in inner";
    console.log(outerVar);  // Inner function can access outer function's variable
  }

  inner();
}

outer();
```
Explaination:  the function inner has access to the variable outerVar defined in the containing outer function. This is because of lexical scope. When inner is defined, it "closes over" the scope of outer, allowing it to access variables from that scope even after outer has finished executing.
