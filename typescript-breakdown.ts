/* TYPESCRIPT BREAKDOWN */
const title = "Typescript Breakdown";
console.log(title);

/* 1. What is Typescript */

{
    // 1.1 Typescript is a superset of JavaScript that adds static typing and other features to the language. It is developed and maintained by Microsoft.
    const definition = "Typescript is a superset of JavaScript that adds static typing and other features.";
    console.log(definition);

    // TypeScript is a statically-typed programming language that is a superset of JavaScript. It was developed and is maintained by Microsoft. TypeScript was created to address the challenges of building large-scale JavaScript applications and adds optional type annotations, classes, interfaces, and other features to the language.
    // The main benefits of using TypeScript include:
        // Type Safety
        // Improved Tooling
        // Improved Maintainability
        // Backwards Compatibility

    // Here are a few key differences between TypeScript and JavaScript:
        // Types: TypeScript has optional type annotations while JavaScript is dynamically-typed. This means that in TypeScript, we can specify the data type of variables, parameters, and return values, which can help catch type-related errors at compile-time.
        // Syntax: TypeScript extends JavaScript syntax with features like interfaces, classes, and namespaces. This provides a more robust and organized structure for large-scale projects.
        // Tooling: TypeScript has better tooling support, such as better editor integration, type checking, and code refactoring.
        // Backwards Compatibility: TypeScript is fully compatible with existing JavaScript code, which means we can use TypeScript in any JavaScript environment.

    // 1.2 TypeScript code needs to be compiled to JavaScript before it can be executed in a web browser or Node.js environment. This is typically done using the TypeScript compiler (tsc) or build tools like Webpack or Babel.

    // 1.3 TypeScript and JavaScript have full interoperability, meaning we can use TypeScript code in JavaScript projects and vice versa. TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.
        // - we can use JavaScript libraries in TypeScript projects by either including the JavaScript files directly or using type definitions for the library. Type definitions provide type information for JavaScript libraries, making it easier to use them in TypeScript.
        // - On the other hand, we can use TypeScript code in JavaScript projects by simply compiling the TypeScript code into JavaScript. The generated JavaScript code can be used in any JavaScript environment, and it will work the same way as regular JavaScript code.
        // - TypeScript's compiler also supports type checking for plain JavaScript code by adding the // @ts-check comment at the top of a file. This allows the compiler to validate types by inspecting the JSDoc comments:
}