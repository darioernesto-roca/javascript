# JavaScript & TypeScript Handbook

A structured, detailed handbook for the existing JavaScript and TypeScript notes in this repository. This is organized for quick scanning, deeper study, and future expansion.

## Table of Contents

- [JavaScript](#javascript)
  - [1. Fundamentals](#1-fundamentals)
    - [1.1 Variables: `var`, `let`, `const`](#11-variables-var-let-const)
    - [1.2 Scope, Hoisting, and the TDZ](#12-scope-hoisting-and-the-tdz)
    - [1.3 Nullish Coalescing (`??`)](#13-nullish-coalescing-)
    - [1.4 Primitive Types](#14-primitive-types)
    - [1.5 Strict Mode](#15-strict-mode)
    - [1.6 `typeof`](#16-typeof)
  - [2. Functions](#2-functions)
    - [2.1 Function Declarations vs Expressions](#21-function-declarations-vs-expressions)
    - [2.2 Arrow Functions](#22-arrow-functions)
    - [2.3 Default Parameters](#23-default-parameters)
    - [2.4 Rest and Spread](#24-rest-and-spread)
    - [2.5 Closures and Lexical Scope](#25-closures-and-lexical-scope)
    - [2.6 IIFE (Immediately Invoked Function Expressions)](#26-iife-immediately-invoked-function-expressions)
    - [2.7 Generator Functions](#27-generator-functions)
    - [2.8 Callbacks and Async Patterns](#28-callbacks-and-async-patterns)
  - [3. `this` and Binding](#3-this-and-binding)
    - [3.1 Implicit Binding](#31-implicit-binding)
    - [3.2 Explicit Binding (`call`, `apply`, `bind`)](#32-explicit-binding-call-apply-bind)
    - [3.3 Function Borrowing](#33-function-borrowing)
  - [4. DOM](#4-dom)
    - [4.1 DOM Overview](#41-dom-overview)
    - [4.2 DOM Selection APIs](#42-dom-selection-apis)
    - [4.3 DOM Element APIs](#43-dom-element-apis)
    - [4.4 DOM Events](#44-dom-events)
  - [5. Fetch API](#5-fetch-api)
    - [5.1 GET, POST, DELETE](#51-get-post-delete)
    - [5.2 Error Handling](#52-error-handling)
    - [5.3 Status Codes](#53-status-codes)
    - [5.4 A Basic Fetch Wrapper](#54-a-basic-fetch-wrapper)
  - [6. Data Structures](#6-data-structures)
    - [6.1 Map](#61-map)
    - [6.2 WeakMap](#62-weakmap)
    - [6.3 Set](#63-set)
    - [6.4 Deep Equality](#64-deep-equality)
  - [7. Core Concepts](#7-core-concepts)
    - [7.1 Immutability](#71-immutability)
    - [7.2 Functional Programming](#72-functional-programming)
    - [7.3 Recursion](#73-recursion)
    - [7.4 Regular Expressions](#74-regular-expressions)
  - [8. Runtime & Environment](#8-runtime--environment)
    - [8.1 Window (Browser Global)](#81-window-browser-global)
    - [8.2 Event Loop](#82-event-loop)
    - [8.3 Browser vs Node.js](#83-browser-vs-nodejs)
  - [9. ECMAScript History](#9-ecmascript-history)
- [TypeScript](#typescript)
  - [1. What TypeScript Is](#1-what-typescript-is)
  - [2. Running TypeScript](#2-running-typescript)
  - [3. TS/JS Interoperability](#3-tsjs-interoperability)
  - [4. Installing & Configuring](#4-installing--configuring)
  - [5. Type System](#5-type-system)
    - [5.1 Primitive Types](#51-primitive-types)
    - [5.2 Object Types (Interfaces & Classes)](#52-object-types-interfaces--classes)
    - [5.3 Advanced Types](#53-advanced-types)
    - [5.4 Best Practices](#54-best-practices)

---

# JavaScript

## 1. Fundamentals

### 1.1 Variables: `var`, `let`, `const`

**What they are:**
- `var` is the original JavaScript variable declaration. It is **function-scoped** and can be **redeclared** and **reassigned**.
- `let` is **block-scoped** and can be **reassigned**, but **cannot be redeclared** in the same scope.
- `const` is **block-scoped** and cannot be **reassigned** or **redeclared**. (Note: objects declared with `const` can still have their internal properties mutated.)

**When to use:**
- Use `const` by default for values that should not be reassigned.
- Use `let` for values that must be reassigned.
- Avoid `var` in modern code unless you need legacy behavior.

**Example:**
```js
var count = 1;
let name = "Ada";
const pi = 3.14159;
```

### 1.2 Scope, Hoisting, and the TDZ

**Scope:**
- **Function scope** means the variable exists throughout the entire function.
- **Block scope** means the variable exists only inside `{ ... }` blocks.

**Hoisting:**
- Declarations are moved to the top of their scope during compilation.
- `var` is hoisted and initialized to `undefined`.
- `let` and `const` are hoisted but **not initialized**, which leads to the **Temporal Dead Zone (TDZ)**.

**TDZ (Temporal Dead Zone):**
- The time between entering a scope and the moment a `let` or `const` variable is declared.
- Accessing the variable in this window throws a `ReferenceError`.

**Example:**
```js
console.log(a); // undefined (var is hoisted and initialized)
var a = 10;

console.log(b); // ReferenceError (TDZ)
let b = 20;
```

### 1.3 Nullish Coalescing (`??`)

**Purpose:**
- Provide a fallback only when the left side is `null` or `undefined`.
- Unlike `||`, it does not treat `0`, `false`, or `""` as missing.

**Example:**
```js
const lastName = null;
const displayName = lastName ?? "Unknown"; // "Unknown"
```

### 1.4 Primitive Types

JavaScript has the following **primitive types**:
- `string`
- `number`
- `bigint`
- `boolean`
- `undefined`
- `symbol`
- `null` (special case: `typeof null` is `"object"` for historical reasons)

**Examples:**
```js
const name = "JavaScript"; // string
const age = 30; // number
const big = 123n; // bigint
const isReady = true; // boolean
let missing; // undefined
const id = Symbol("id"); // symbol
const empty = null; // null
```

### 1.5 Strict Mode

**What it does:**
- Enables a stricter parsing and error handling in JavaScript.
- Prevents common mistakes like implicit globals and duplicate parameters.

**How to enable:**
- At the top of a file: `"use strict";`
- Or inside a function to limit scope.

**Example:**
```js
"use strict";

function strictExample() {
  // strict mode applies here
}
```

### 1.6 `typeof`

**Purpose:**
- Returns a string representing the type of a value.

**Common results:**
- `typeof "hello"` → `"string"`
- `typeof 42` → `"number"`
- `typeof true` → `"boolean"`
- `typeof undefined` → `"undefined"`
- `typeof Symbol()` → `"symbol"`
- `typeof function() {}` → `"function"`
- `typeof null` → `"object"` (legacy quirk)

---

## 2. Functions

### 2.1 Function Declarations vs Expressions

**Declarations:**
- `function greet() { ... }`
- Hoisted entirely, so they can be called before they appear.

**Expressions:**
- `const greet = function() { ... }`
- Not hoisted in the same way; the variable is hoisted but not initialized.

### 2.2 Arrow Functions

**Key traits:**
- Shorter syntax.
- Do **not** have their own `this`, `arguments`, or `prototype`.

**Example:**
```js
const add = (a, b) => a + b;
```

### 2.3 Default Parameters

**What they do:**
- Provide fallback values when an argument is `undefined`.

**Example:**
```js
function greet(name = "World") {
  return `Hello, ${name}!`;
}
```

### 2.4 Rest and Spread

**Rest:**
- Collects remaining arguments into an array.

**Spread:**
- Expands an iterable into individual values.

**Example:**
```js
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

const values = [1, 2, 3];
console.log(...values); // 1 2 3
```

### 2.5 Closures and Lexical Scope

**Lexical scope:**
- A function can access variables defined in its outer scope.

**Closure:**
- When an inner function **remembers** variables from its creation scope, even after the outer function finishes.

**Example:**
```js
function outer() {
  const count = 0;
  return function inner() {
    return count + 1;
  };
}
```

### 2.6 IIFE (Immediately Invoked Function Expressions)

**Purpose:**
- Create a private scope to avoid polluting globals.

**Example:**
```js
(function () {
  const secret = "hidden";
})();
```

### 2.7 Generator Functions

**Purpose:**
- Pause and resume execution with `yield`.

**Example:**
```js
function* idGenerator() {
  yield 1;
  yield 2;
}

const gen = idGenerator();
console.log(gen.next()); // { value: 1, done: false }
```

### 2.8 Callbacks and Async Patterns

**Callbacks:**
- Functions passed into other functions and executed later.

**Async examples:**
- `setTimeout`, `fetch`, event listeners, file access.

**Example:**
```js
setTimeout(() => {
  console.log("Delayed");
}, 1000);
```

---

## 3. `this` and Binding

### 3.1 Implicit Binding

**Rule:**
- If a function is called as a method, `this` refers to the object before the dot.

**Example:**
```js
const user = {
  name: "Ada",
  greet() {
    return `Hi ${this.name}`;
  },
};
```

### 3.2 Explicit Binding (`call`, `apply`, `bind`)

**Purpose:**
- Force what `this` should be inside a function.

**Differences:**
- `call` invokes immediately with arguments.
- `apply` invokes immediately with arguments as an array.
- `bind` returns a new function with `this` fixed.

### 3.3 Function Borrowing

**What it is:**
- Reusing a method from one object on another via `call`, `apply`, or `bind`.

**Example:**
```js
const person = { name: "A", greet() { return this.name; } };
const other = { name: "B" };
console.log(person.greet.call(other)); // "B"
```

---

## 4. DOM

### 4.1 DOM Overview

**DOM (Document Object Model):**
- A tree-like representation of HTML.
- JavaScript can query and modify this structure.

### 4.2 DOM Selection APIs

**Common methods:**
- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.querySelector()`
- `document.querySelectorAll()`

### 4.3 DOM Element APIs

**Common operations:**
- `element.classList.add/remove/toggle`
- `element.getAttribute()` / `setAttribute()`
- `element.textContent` / `innerHTML`
- `element.style.property`
- `element.remove()`

### 4.4 DOM Events

**Event patterns:**
- `addEventListener(event, handler)`
- `removeEventListener(event, handler)` (requires the **same handler reference**)

**Common events:**
- `click`, `change`, `focus`, `blur`, `keydown`, `scroll`, `submit`

---

## 5. Fetch API

### 5.1 GET, POST, DELETE

**GET:** retrieve data.
**POST:** send data.
**DELETE:** remove data.

### 5.2 Error Handling

- `fetch()` only rejects on network errors.
- For HTTP errors, check `response.ok`.

### 5.3 Status Codes

Common HTTP statuses:
- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

### 5.4 A Basic Fetch Wrapper

```js
async function fetchWrapper(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
```

---

## 6. Data Structures

### 6.1 Map

**What it is:**
- A key/value collection where keys can be any type.

**Why use it:**
- Predictable iteration order.
- Keys aren’t limited to strings.

### 6.2 WeakMap

**What it is:**
- A Map where keys must be objects and are **weakly referenced**.

**Why use it:**
- Useful for private data or caches that should be garbage collected.

### 6.3 Set

**What it is:**
- A collection of unique values.

**Common uses:**
- Deduplicating arrays.
- Fast membership checks.

### 6.4 Deep Equality

**Goal:**
- Compare objects by value rather than reference.

**Typical approach:**
- Recursively compare keys and values.

---

## 7. Core Concepts

### 7.1 Immutability

**Definition:**
- Once data is created, it is not changed in place.

**Why it matters:**
- Easier reasoning.
- Avoids unintended side effects.

### 7.2 Functional Programming

**Key ideas:**
- Pure functions
- Higher-order functions
- Immutability

### 7.3 Recursion

**Definition:**
- A function calling itself until a base case is met.

**Common examples:**
- Factorials
- Fibonacci sequences

### 7.4 Regular Expressions

**Definition:**
- Patterns for matching text.

**Core building blocks:**
- Literals (`/abc/`)
- Character classes (`/[aeiou]/`)
- Quantifiers (`+`, `*`, `{n}`)
- Anchors (`^`, `$`)

---

## 8. Runtime & Environment

### 8.1 Window (Browser Global)

**What it is:**
- The global object in browsers.
- Provides access to DOM, storage, location, and more.

### 8.2 Event Loop

**Purpose:**
- Coordinates synchronous code, macrotasks, and microtasks.
- Keeps the JS runtime responsive while handling async work.

### 8.3 Browser vs Node.js

**Browser:**
- Has DOM APIs and `window`.
- Focused on UI and events.

**Node.js:**
- Runs server-side.
- Provides filesystem, networking, and process APIs.

---

## 9. ECMAScript History

**ECMAScript** is the standard JavaScript implements.

**Milestones:**
- ES1 (1997): First standard.
- ES2 (1998): Minor fixes.
- ES3 (1999): Regular expressions, better string handling.
- ES4: Canceled.
- ES5 (2009): Strict mode, JSON, array methods.
- ES6/ES2015+: Classes, modules, arrow functions, let/const, etc.

---

# TypeScript

## 1. What TypeScript Is

TypeScript is a **superset of JavaScript** that adds **static typing** and other language features. It compiles to JavaScript, so it runs anywhere JavaScript runs.

**Why it matters:**
- Catches type errors earlier.
- Improves tooling (autocomplete, refactorings).
- Helps maintain large codebases.

---

## 2. Running TypeScript

**Typical workflow:**
1. Write TypeScript in `.ts` files.
2. Compile with `tsc`.
3. Run the output `.js` in Node.js or a browser.

**Direct execution:**
- `ts-node` lets you run `.ts` directly without a separate compile step.

---

## 3. TS/JS Interoperability

**Key idea:**
- Any valid JavaScript is valid TypeScript.
- You can incrementally migrate JS → TS.

**Type definitions:**
- Many JS libraries publish `.d.ts` files so TypeScript can understand them.

---

## 4. Installing & Configuring

**Install globally:**
```bash
npm install -g typescript
```

**Initialize config:**
```bash
tsc --init
```

**Common `tsconfig.json` options:**
- `target`
- `module`
- `strict`
- `outDir`
- `rootDir`
- `include` / `exclude`

---

## 5. Type System

### 5.1 Primitive Types

- `string`, `number`, `boolean`
- `null`, `undefined`
- `symbol`, `bigint`

### 5.2 Object Types (Interfaces & Classes)

**Interfaces:**
- Describe the shape of objects.
- Useful for structural typing.

**Classes:**
- Define blueprints with fields and methods.
- Support inheritance and encapsulation.

### 5.3 Advanced Types

**Examples:**
- `union` (`string | number`)
- `intersection` (`A & B`)
- `tuple` (`[string, number]`)
- `enum`
- `type aliases`
- `never` for impossible values

### 5.4 Best Practices

- Enable `strict` / `strictNullChecks` in most projects.
- Prefer explicit types at public boundaries.
- Keep type definitions close to the data they describe.

