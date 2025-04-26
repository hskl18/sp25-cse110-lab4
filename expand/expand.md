1. Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.

   - **Asynchronous Nature**: Things like callbacks and promises let your page keep running while waiting for data—but it can be hard to follow what happens when.

   - **Loose Typing**：JS changes types on its own.

   - **Web Platform Constraints**: JS runs inside the browser. Different browsers and security rules mean you sometimes fight the environment instead of your code.

2. Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?

   Yes, JS was invented to be super quick to write right in an HTML page no extra setup. And browsers freeze if you do slow work in a loop. Async methods like fetch let you get data without hanging the page.

3. What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?

   Compiled, transforms to machine code ahead-of-time like C, C++, yielding fast runtime but slower build.
   Interpreted, parsed at runtime like python and JS, offering instant feedback but potential performance overhead and only runtime error discovery.
   JS can be immediate testing in the browser, though sometimes slower and errors appear only during execution.

4. The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?

   Learning core JS builds a solid foundation, can be explode more security. Frameworks become straightforward afterward, and debugging deep issues stays manageable. Skipping vanilla JS risks blind reliance on boilerplate and difficulty fixing framework internals.

5. Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?

   Understanding scope protects against variable collisions, type coercion avoids data-handling bugs, async/timers coordinate API calls and UI updates, and mastering these fundamentals leads to cleaner, more predictable project code.
