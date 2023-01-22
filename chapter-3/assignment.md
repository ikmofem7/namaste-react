# JSX

JSX is a syntax extension for JavaScript. It allows you to write HTML-like elements in your JavaScript code, which are then transpiled into regular JavaScript elements. It is commonly used with React, a JavaScript library for building user interfaces.

# Superpowers of JSX

- It makes it easy to read and understand the structure of your component. The HTML-like elements in JSX make it easy to see how the component is laid out, whereas using JavaScript functions to create elements can be more difficult to understand.

- JSX makes it easy to create reusable components. By using JSX to describe the structure of a component, you can easily create multiple instances of that component with different properties.

- JSX allows you to use JavaScript expressions within HTML elements, which makes it easy to create dynamic components. You can use variables, loops, and other JavaScript constructs to create dynamic content.

- JSX is more efficient than using JavaScript functions to create elements. Because JSX is transpiled into JavaScript, the browser can optimize how it renders the elements.

- JSX helps in solving security issues, as it allows you to write HTML and JavaScript in the same file, so your code is more maintainable and less prone to errors.

- It makes the development process faster, as you can write the same code in JSX and it will be transpiled into JavaScript. This is a lot easier and faster than writing in JavaScript.

# Role of type attribute in script tag? What options can I use there?

- The type attribute in a <script> tag is used to specify the type of script being used. It is used to help the browser understand the type of script and how it should be executed.

- The most common value for the type attribute is "text/javascript", which is the default value and indicates that the script is written in JavaScript.

Other values that can be used are:

- "module" which indicates that the script is an ECMAScript (ES) module
- "text/babel" or "text/jsx" when using babel to transpile JSX or es6
- "text/coffeescript" for scripts written in CoffeeScript
- "text/typescript" for scripts written in TypeScript
- "application/ld+json" for scripts containing JSON-LD data
