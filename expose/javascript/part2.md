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
