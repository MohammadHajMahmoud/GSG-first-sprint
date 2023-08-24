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
