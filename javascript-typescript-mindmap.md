# JavaScript & TypeScript Concept Map

This mind map groups the existing JavaScript and TypeScript notes into a navigable concept structure.
It is designed to make relationships between topics easier to see and to highlight where to add or refine explanations.

```mermaid
mindmap
  root((JavaScript & TypeScript))
    JavaScript
      Fundamentals
        Variables
          var
          let
          const
          Scope
          Hoisting & TDZ
          Nullish coalescing
        Primitive types
          string
          number
          bigint
          boolean
          undefined
          symbol
        Strict mode
        typeof operator
      Functions
        Function basics
        Arrow functions
        Default parameters
        Rest & spread
        Closures
        Lexical scope
        IIFE
        Generator functions
        Callbacks
        Async patterns
      this & Binding
        Implicit binding
        Explicit binding
        call/apply/bind
        Function borrowing
      DOM
        DOM overview
        Element APIs
        Selection
        Events
          Change
          Click
          Focus/Blur
          Keydown/Keypress/Keyup
          Scroll
          Submit
      Fetch API
        GET
        POST
        DELETE
        Error handling
        Status codes
        Fetch wrapper
      Data structures
        Map
        WeakMap
        Set
        Deep equality
      Concepts
        Immutability
        Functional programming
        Recursion
        Regular expressions
      Runtime
        Window object
        Event loop
        Node vs Browser
      History
        ECMAScript
          ES1
          ES2
          ES3
          ES4 (canceled)
          ES5
          ES6+
      Review & Clarify
        removeEventListener usage
        document.createElement vs element.createElement
        Map example identifiers
        Function borrowing spelling
        Strict mode placement

    TypeScript
      Overview
        Superset of JavaScript
        Static typing
        Interoperability
      Tooling
        tsc
        ts-node
        tsconfig
        Playground
      Types
        Primitives
        any
        void
        never
        null/undefined
        object
        enum
        tuple
        array
        union
        intersection
        type aliases
        type assertions
      Object types
        Interfaces
        Classes
      Best practices
        strictNullChecks
        Type annotations
        Incremental adoption
```

## Suggested navigation pattern
- Use this map as the top-level index.
- Link each node to a dedicated section or file (if you want to split the notes later).
- Use the **Review & Clarify** branch as a backlog for tightening explanations and examples.
