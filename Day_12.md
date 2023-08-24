## Philosophy of Coercion
- A quality JS program embraces coercions, making sure the types I involved in every operation are
clear. Thus, corner cases aresafely managed.
- JavaScript's dynamic typing is not a weakness, it's one of its strong qualities
- It is irresponsible to knowingly avoid usage of afeature that can improve code readability
## Equality 
- we use `===` for strict quality and `==` for loose quality
- `undefined==null` is true while `undefined===null` is false but in some situation where i just want to make sure that the value is empty why bother and use the two terms `null` and `undefined` while i cna just prevent uselsess code and only use one
- sometimes when using double equal to compare between an array like `[42]` and a number "42" the output is true by even here this kind comparison doesnt make any sense
  
 ![image](https://github.com/MohammadHajMahmoud/GSG-first-sprint/assets/73450813/f8fff262-70e2-42d5-b234-30752ce82d31)
- AVOID USING NON-PRIMITIVE TYPES WHILE COMPARING !!!
### why using "==" is better 
-Knowing types is always better than not knowing them Static Types is not the only (or even necessarily best) way to know your types
- `==` is not about comparisons with unknown types
- `==` is about comparisons with known type(s)
- Summary: making types known and obvious leads to better code. If types are known, == is best. otherwise, fall back to ===
### static typing 
- Type Annotations: You can explicitly specify the data type of a variable using type annotations.
  ```javascript
  let age: number = 25;
  let name: string = "John";
  ```
 - so yes , typescript is just javascript with types
### typescript & flow : Pros
- They make types more obvious in code
- Familiarity: they look like other language's type systems
- They're very sophisticated and good at what they do
### typescript & flow : Cons
- Part of the problem with avoidance of whole swaths of JS, like pretending === saves
you from needing to know types, is that it tends to systemically perpetuate bugs
- You simply cannot write quality JS programs without knowingthe types involved in your operations.
- Many claim that JS's type system is too difficult for newer devs to learn, and that static types are
(somehow) more learnable
### QUESTION #1

Given the following `promisesArray`, convert the array into an object using the
`convertToObj` function.

You should apply typescript types to every promise, the input of `convertToObj`,
and the output of `convertToObj`. 

Build interfaces and types as needed.

```javascript

const sayHelloWorld = new Promise(resolve, reject => {
  resolve("Hello world!");
});

const checkBoolean = (boolean) => new Promise(resolve, reject => {
  if (boolean) {
    resolve(boolean);
  } else {
    reject(`Input is false :(`)
  }
})

const returnObj = new Promise(resolve, reject => {
  resolve({
    x: "meow",
    y: 45,
  })
})

const promisesArray = [sayHeloWorld, checkBoolean, returnObj];

const convertToObj = (array) => {
  //write your code here;
  return obj;
}

```

-------------------------------------------------------------------

### QUESTION #2:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope1();

```
**Choices:**

A) `undefined`, `undefined`, `undefined`   
B) `1`, `undefined`, `ReferenceError`  
C) `1`, `ReferenceError`, `ReferenceError`   
D) `1`, `ReferenceError`

-------------------------------------------------------------------

### QUESTION #3:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript
function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();

```

**Choices:**

A) `undefined`, `ReferenceError`   
B) `1`, `undefined`, `ReferenceError`   
C)`undefined`, `undefined`,
`ReferenceError`  
D) `1`, `ReferenceError`

-------------------------------------------------------------------

### QUESTION #4:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript

function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);
  }

  console.log([a, b, c]);
}

testScope3();

```

**choices:**

A) `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 36, 2, 3 ]`   
B) `[ 36, 100, 45 ]` | `[1, 2, 3 ]` | `[ 36, 100, 45 ]`   
C) `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 1,100, 45 ]`   
D) `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 1, 2, 3 ]`

