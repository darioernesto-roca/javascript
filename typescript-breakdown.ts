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

/* 2. Running TypeScript */

{
    // 2.1 To run TypeScript code, we'll need to have a TypeScript compiler installed. Here's a general process to run TypeScript code:
        // Write TypeScript code in a .ts file (e.g. app.ts)
        // Compile the TypeScript code into JavaScript using the TypeScript compiler:
            // tsc app.ts
        // Run the generated JavaScript code using a JavaScript runtime environment such as Node.js:
            // node app.js
        // These steps can also be automated using build tools like Webpack or task runners like Gulp. Some frameworks, such as Angular, have built-in support for TypeScript and provide their own tools for compiling and running TypeScript code. Others like React and Vue.js can be configured to work with TypeScript using additional libraries and tools.

    // 2.2 tsc: is the command line tool for the TypeScript compiler. It compiles TypeScript code into JavaScript code, making it compatible with the browser or any JavaScript runtime environment. We can use the tsc command to compile TypeScript code by running the following command in our terminal or command prompt: tsc
    // This command will compile all TypeScript files in the project that are specified in the tsconfig.json file. If we want to compile a specific TypeScript file, we can specify the file name after the tsc command, like this: tsc index.ts
    // The tsc command has several options and flags that we can use to customize the compilation process. For example, we can use the --target option to specify the version of JavaScript to compile to, or the --outDir option to specify the output directory for the compiled JavaScript files.
    // We can also use the --watch option to automatically recompile TypeScript files whenever they change. This is useful for development, as it allows us to see the changes in real-time without having to manually run the tsc command each time we make a change.
    // We can run 'tsc --help' to see a list of all available options and flags for the tsc command.

    // 2.3 ts-node: is a command line tool that allows us to run TypeScript code directly without the need to compile it into JavaScript first. It combines the functionality of the TypeScript compiler (tsc) and the Node.js runtime environment, allowing us to execute TypeScript code in a single step.
    // To use ts-node, we need to have it installed globally or as a dev dependency in our project. Once installed, we can run TypeScript files directly using the ts-node command followed by the file name, like this: ts-node app.ts
    // This command will compile the TypeScript code on-the-fly and execute it using Node.js. This is particularly useful for development and testing, as it eliminates the need to manually compile TypeScript code before running it.
    // ts-node also supports various options and flags that we can use to customize its behavior. For example, we can use the --project option to specify a custom tsconfig.json file, or the --transpile-only option to skip type checking and only transpile the code.
    // We can run 'ts-node --help' to see a list of all available options and flags for the ts-node command.

    // TS Playground: https://www.typescriptlang.org/play/ An online tool provided by the TypeScript team that allows us to write, compile, and run TypeScript code directly in our web browser. It provides a simple and convenient way to experiment with TypeScript features and test code snippets without the need to set up a local development environment.
}

/* 3. TS/JS Interoperability */
{
    // TypeScript is designed to be fully interoperable with JavaScript, meaning that we can use both languages in the same project.
    // This interoperability allows us to gradually migrate existing JavaScript codebases to TypeScript, or to use TypeScript alongside existing JavaScript libraries and frameworks.
    // When we write TypeScript code, it is compiled into JavaScript code, which means that the resulting JavaScript code can be executed in any JavaScript runtime environment.
    // This means that we can use TypeScript in a variety of contexts, including web browsers, Node.js servers, and mobile applications.
    // The interoperability between TypeScript and JavaScript also means that we can use existing JavaScript libraries and frameworks in our TypeScript projects without any issues.

    // TypeScript and JavaScript have full interoperability, meaning we can use TypeScript code in JavaScript projects and vice versa. TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.
    // We can use JavaScript libraries in TypeScript projects by either including the JavaScript files directly or using type definitions for the library. Type definitions provide type information for JavaScript libraries, making it easier to use them in TypeScript.
    // On the other hand, we can use TypeScript code in JavaScript projects by simply compiling the TypeScript code into JavaScript. The generated JavaScript code can be used in any JavaScript environment, and it will work the same way as regular JavaScript code.
    // TypeScript's compiler also supports type checking for plain JavaScript code by adding the // @ts-check comment at the top of a file. This allows the compiler to validate types by inspecting the JSDoc comments.
}

/* 4. Install and Configure */
{
    // 4.1 To install TypeScript globally using npm, we can run the following command in our terminal or command prompt:
    // npm install -g typescript
    // This command will install the latest version of TypeScript globally on our system, allowing us to use the tsc command from any directory.

    // 4.2 To create a tsconfig.json file in our project, we can run the following command in our terminal or command prompt:
    // tsc --init
    // This command will generate a basic tsconfig.json file in the current directory with default settings. We can then customize the settings in the file to suit our project's needs.

    // 4.3 To install and configure TypeScript in our project, we need to perform the following steps:
        // - Initialize npm in our project directory by running the following command:
        // - npm init
        // - Install TypeScript as a project dependency by running the following command:
        // - npm install --save-dev typescript
        // - Create a tsconfig.json file in our project directory to specify the compiler options for building our project. For example:
        // - { "compilerOptions": { "target": "es5", "module": "commonjs", "strict": true, "outDir": "./dist", "rootDir": "./src" }, "exclude": ["node_modules"] }
        // - Compile our TypeScript code using the following command:
        // - npx tsc
    // Note: we can also compile individual TypeScript files by specifying the file path after the tsc command. For example: npx tsc ./src/index.ts

    // 4.4 tsconfig.json
       // tsconfig.json is a configuration file in TypeScript that specifies the compiler options for building our project. It helps the TypeScript compiler understand the structure of our project and how it should be compiled to JavaScript. Some common options include:
         // "target": Specifies the version of JavaScript to compile to (e.g., "es5", "es6", "esnext").
         // "module": Specifies the module system to use (e.g., "commonjs", "es6", "amd").
         // "strict": enables/disables strict type checking options.
         // "outDir": Specifies the output directory for the compiled JavaScript files.
         // "rootDir": Specifies the root directory of the TypeScript source files.
         // "include": Specifies an array of file patterns to include in the compilation.
         // "exclude": Specifies an array of file patterns to exclude from the compilation.
       // Given below is the sample tsconfig.json file:
         /*
            {
                "compilerOptions": {
                    "target": "es5",
                    "module": "commonjs",
                    "strict": true,
                    "outDir": "./dist",
                    "rootDir": "./src"
                },
                "exclude": ["node_modules"],
                "include": ["src"]
            }
            */

        // 4.5 Compiler options: TypeScript compiler accepts a number of command line options that allow you to customize the compilation process. These options can be passed to the compiler using the -- prefix, for example: tsc --target ES5 --module commonjs
        // We can check all available compiler options by running: tsc --help and refer to the official documentation for more details: https://www.typescriptlang.org/docs/handbook/compiler-options.html
}

/* 4. TypeScript Types */

{
    // 4.1 Types:
    // TypeScript provides several built-in types, including:
       // number
       // string
       // boolean
       // any
       // void
       // null and undefined
       // never
       // object
       // symbol
       // Enumerated types (enum)
       // Tuple types
       // Array types
       // Union types
       // Intersection types
       // Type aliases
       // Type assertions
}