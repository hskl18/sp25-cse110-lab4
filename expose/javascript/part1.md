# Part 1: A Quick Introduction

1. **What is printed by line 9 (var version)?**  
   `values added: 20`, no error.

2. **What is printed by line 13 (var version)?**  
   `final result: 20`, no error.

3. **Why should you not use var?**  
   var is function-scoped whichs hoisted to the top of its function. This means a var declared inside an if or loop can still be accessed outside that block, that will leading to naming conflicts and hard-to-trace bugs.

4. **What is printed by line 9 (let version)?**  
   `final result: 20`, no error.

5. **What is printed by line 13 (let version)?**  
   Throws a `ReferenceError: result is not defined`, because let is block-scoped and result only exists inside the if block.

6. **What is printed by line 9 (const version)?**  
   Throws a `TypeError: Assignment to constant variable`, because result was declared with const and cannot be reassigned.

7. **What is printed by line 13 (const version)?**  
   throw a `ReferenceError: result is not defined`, because result is block-scoped; However, the script has already crashed on the const reassignment before reaching line 13.
