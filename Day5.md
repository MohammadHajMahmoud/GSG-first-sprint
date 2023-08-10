# Conditionals 
if,else & else if 
- if the **if** condition is met then it block of code is executed
- if not then the **else** code block is exectued
- sometimes we get extra condtions with their own block of code using **else if**
  ```javascript
function compareNumbers(x, y) {
    if (x > y) {
        return "x is greater than y.";
    } else if (x < y) {
        return "x is less than y.";
    } else {
        return "x is equal to y.";
    }
}
```
