# Part 2: A Little More of a Challenge

1. **What will happen at line 12 and why?**  
   It will print `3`, no error, because `i` is declared with `var` and remains accessible after the loop with its final value.

2. **What will happen at line 13 and why?**  
   It will print `150`, no error, because `discountedPrice` is declared with `var` and retains the last computed value outside the loop.

3. **What will happen at line 14 and why?**  
   It will print `150`, no error, because `finalPrice` is declared with `var` and holds the last rounded value after the loop.

4. **What will this function return?**  
   `[50, 100, 150]`, the array of all discounted prices; no errors occur.

5. **What will happen at line 12 and why?**  
   Throws a `ReferenceError: i is not defined`, because `i` was declared with `let` inside the loop and is not visible outside that block.

6. **What will happen at line 13 and why?**  
   Throws a `ReferenceError: discountedPrice is not defined`, because `discountedPrice` was declared with `let` inside the loop and cannot be accessed afterward.

7. **What will happen at line 14 and why?**  
   It will print `150`, no error, because `finalPrice` was declared with `let` in the outer function scope and retains its last value.

8. **What will this function return?**  
   `[50, 100, 150]`, the array of all discounted prices; no errors occur.

9. **What will happen at line 11 and why?**  
   Throws a `ReferenceError: i is not defined`, because `i` was declared with `let` in the loop and is not accessible outside.

10. **What will happen at line 12 and why?**  
    It will print `3`, no error, because `length` is declared with `const` in the outer scope and remains accessible.

11. **What will this function return?**  
    `[50, 100, 150]`, the array of all discounted prices; no errors occur.

12. A. Accessing the value of the name property in the student object:  
     `student.name`

    B. Accessing the value of the Grad Year property in the student object:  
     `student['Grad Year']`

    C. Calling the function for the greeting property in the student object:  
    `student.greeting()`

    D. Accessing the name property of the object in the Favorite Teacher property in student:  
    `student['Favorite Teacher'].name`

    E. Accessing index zero in the array of the courseLoad property of the student object:  
    `student.courseLoad[0]`

13. A. `'3' + 2` → `'32'`  
    Because `+` with a string concatenates.

    B. `'3' - 2` → `1`  
    Because `-` forces numeric conversion: `'3'` → `3`.

    C. `3 + null` → `3`  
    `null` is converted to `0` in numeric contexts.

    D. `'3' + null` → `'3null'`  
    Because `+` with a string coerces `null` to `'null'`.

    E. `true + 3` → `4`  
    `true` converts to `1`.

    F. `false + null` → `0`  
    `false` → `0`, `null` → `0`, sum is `0`.

    G. `'3' + undefined` → `'3undefined'`  
    `undefined` coerces to `'undefined'` in string concatenation.

    H. `'3' - undefined` → `NaN`  
    `undefined` converts to `NaN`, and any arithmetic with `NaN` stays `NaN`.

14. A. `'2' > 1` → `true`  
    `'2'` coerces to `2`.

    B. `'2' < '12'` → `false`  
    Both are strings, compared lexicographically: `'2'` > `'1'`.

    C. `2 == '2'` → `true`  
    Loose equality coerces `'2'` → `2`.

    D. `2 === '2'` → `false`  
    Strict equality checks type as well.

    E. `true == 2` → `false`  
    `true` → `1`, so `1 == 2` is `false`.

    F. `true === Boolean(2)` → `true`  
    `Boolean(2)` is `true`, so `true === true`.

15. **Explain the difference between `==` and `===` operators.**  
    `==` performs type coercion before comparison, whereas `===` checks both type and value without coercion.

16. See file `part2-question16.js` for the implementation.

```
21
45
5
2
```

17. **What is the result of `modifyArray([1,2,3], doSomething)`?**  
    `[2, 4, 6]`.  
    Each element is passed into `doSomething(num)`, which returns `num * 2`.

18. See file `part2-question18.js` for the implementation.

19. **What is the output of the `printNums()` function?**

```
1
4
3
2
```

Explanation: `console.log(1)` runs first, `console.log(4)` runs next, then the zero-delay `setTimeout` prints `3` after the call stack clears, and the 1s timeout prints `2` last.
