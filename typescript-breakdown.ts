/* TYPESCRIPT BREAKDOWN */
const title = "Typescript Breakdown";
console.log(title);

/* 1. What is Typescript */

{
    var nombre = "Dario";
    var edad = 30;

    var resultado = nombre + edad;
    console.log(resultado); // Output: Dario30

}

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

    // 4.2 Primitive Types:
        // boolean: represents logical values, either true or false.
            // let boolValue: boolean = true;
            // let isDone: boolean = false;
        // number: represents numeric values, both integers and floating-point numbers.
            // let intValue: number = 42;
            // let floatValue: number = 3.14;
        // string: represents textual data, enclosed in single or double quotes.
            // let strValue: string = "Hello, TypeScript!";
            // let name: string = 'John Doe';
        // void: represents the absence of a value, typically used for functions that do not return anything. In JavaScript, a function that doesn’t return any value will implicitly return the value undefined. However, void and undefined are not the same thing in TypeScript.
            // function noop() { {
            //       return;
            // }
        // undefined: a variable that has been declared but not assigned a value. JavaScript has two primitive values used to signal absent or uninitialized value: null (absent) and undefined (uninitialized). TypeScript has two corresponding types by the same names. How these types behave depends on whether you have the strictNullChecks option on.
            // let undefValue: undefined = undefined;
        // null and undefined: represent the absence of a value or an uninitialized variable. With strictNullChecks off, values that might be null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs; TypeScript always recommend people turn strictNullChecks on if it’s practical to do so in the codebase.

    // 4.2 Object Types:
        // Interface: Defines the shape of an object, including its properties and methods. TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects.
            // interface Person {
            //   name: string;
            //   age: number;
            // }
            // 
            // function greet(person: Person) {
            //   return 'Hello ' + person.name;
            // }
        // Class: Defines a blueprint for creating objects with properties and methods. In TypeScript, a class is a blueprint for creating objects with specific properties and methods. Classes are a fundamental concept in object-oriented programming. Here is an example of a simple class in TypeScript:
            // class Car {
            //   make: string;
            //   model: string;
            //   year: number;
            // 
            //   constructor(make: string, model: string, year: number) {
            //     this.make = make;
            //     this.model = model;
            //     this.year = year;
            //   }
            // 
            //   drive() {
            //     console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
            //   }
            // }
        // Enum: defines a set of named constants, which can be either numeric or string values. Enums is not a type-level extension of JavaScript. It allows a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums. Here is an example of a numeric enum in TypeScript:
            // enum Direction {
            //   Up = 1,
            //   Down,
            //   Left,
            //   Right
            // }
            // Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4. If we left off the initializer for Up, it would have the value 0 and the rest of the members would be auto-incremented from there.
            // let dir: Direction = Direction.Up;
            // console.log(dir); // Output: 1
            // let dirName: string = Direction[2];
            // console.log(dirName); // Output: Down
        // Array: represents a collection of values of the same type. To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing.
            const numbers: number[] = [1, 2, 3];
            console.log(numbers); // Output: [1, 2, 3]
            const strings: Array<string> = ["a", "b", "c"];
            console.log(strings); // Output: ['a', 'b', 'c']
        // Tuple: represents a fixed-size collection of values of different types. A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
            type StringNumberPair = [string, number]; // A tuple type with a string and a number. type is used to create a new name for a type.
            const pair: StringNumberPair = ['hello', 42]; // On TypesCript the variables are declared with const, let or var, and the type is specified after the variable name, separated by a colon, then the name of the type and the value is assigned with =. In JavaScript, the type is inferred from the value assigned to the variable. If we express the same thing in JavaScript, it would look like this: const pair = ['hello', 42]; Here, the type of pair is inferred to be (string | number)[]. However, this does not enforce the fixed size and types of the tuple. ¿Why this is important? Because in TypeScript, if we try to access an index that is out of bounds, the compiler will throw an error. In JavaScript, it would simply return undefined, and that could lead to runtime errors if we try to use that undefined value, which is a common source of bugs in JavaScript code, mainly in large codebases.
            const first = pair[0];
            const second = pair[1];
            console.log(first); // Output: 'hello'
            console.log(second); // Output: 42
            // Error: Index out of bounds
        // const third = pair[2];
        // Object: represents a non-primitive type that can have properties and methods. To define an object type, we simply list its properties and their types. For example, here’s a function that takes a point-like object:
        // The parameter's type annotation is an object type
            function printCoord(pt: { x: number; y: number }) {
                console.log("The coordinate's x value is " + pt.x);
                console.log("The coordinate's y value is " + pt.y);
            }

            printCoord({ x: 3, y: 7 });

    // 4.3 Top Types
        // unknown: represents any value, but requires type checking before performing operations on it. unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.
            function f1(a: any) {
                a.b(); // OK
            }

            function f2(a: unknown) {
            // Error: Property 'b' does not exist on type 'unknown'.
                // a.b();
            }
        // any: represents any type of value, allowing for dynamic typing. When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal. 
        let objAny: any = { x: 0 };
            // None of the following lines of code will throw compiler errors.
            // Using `any` disables all further type checking, and it is assumed
            // you know the environment better than TypeScript.
            objAny.foo();
            objAny();
            objAny.bar = 100;
            objAny = 'hello';
            const nAny: number = objAny;
        //

    // 4.4 Bottom Types
        // never: represents a value that never occurs, typically used for functions that always throw an error or never return. The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.
            // Function returning never must not have a reachable end point
            function error(message: string): never {
            throw new Error(message);
            }

            // Inferred return type is never
            function fail() {
            return error('Something failed');
            }

            // Function returning never must not have a reachable end point
            function infiniteLoop(): never {
            while (true) {}
            }

}
