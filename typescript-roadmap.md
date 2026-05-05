# TypeScript Learning Roadmap (Practice-First)

This roadmap is based on the topics covered in `typescript-breakdown.notes.ts` and organizes them into a practical sequence.

## How to use this roadmap

- Complete each step in order.
- Keep strict mode on while learning.
- Treat every type error as a learning opportunity.

---

## Step 1: TypeScript Setup and Tooling

### Learn
- What TypeScript is and why it helps
- `tsc` compile flow (`.ts` -> `.js`)
- `ts-node` for fast local execution
- Role of `tsconfig.json`

### Practice
1. Initialize a sandbox project with `npm init -y`.
2. Install TypeScript and run `npx tsc --init`.
3. Create `hello.ts`, compile it, and run JS output with Node.
4. Run the same file with `ts-node`.

### Checkpoint
- You can explain when to use `tsc` vs `ts-node`.
- You can locate key compiler options in `tsconfig.json`.

---

## Step 2: Primitive Types and Annotations

### Learn
- `string`, `number`, `boolean`, `undefined`, `null`, `void`
- Type inference vs explicit annotations
- Why strict null checks matter

### Practice
1. Create `01-primitives.ts` with explicit types.
2. Write 5 functions with typed parameters and return types.
3. Enable strict checks and fix all reported errors.

### Checkpoint
- You avoid `any` for beginner-level code.
- You know how null/undefined affect function design.

---

## Step 3: Object Types, Interfaces, and Type Aliases

### Learn
- Object type annotations
- `interface` for reusable object shapes
- `type` aliases for unions/tuples and clarity

### Practice
1. Model `User`, `Product`, and `Order` with interfaces.
2. Create a typed function that formats an order summary.
3. Add optional properties and test narrowing logic.

### Checkpoint
- You can choose between interface vs type alias with confidence.

---

## Step 4: Arrays, Tuples, and Enums

### Learn
- `T[]` and `Array<T>`
- Tuples for fixed positions/types
- Enums and when they help readability

### Practice
1. Build `02-collections.ts` with typed arrays and tuples.
2. Create an enum for status (`Pending`, `Active`, `Done`) and consume it.
3. Add a function that safely reads tuple values.

### Checkpoint
- You can enforce shape and order constraints in data collections.

---

## Step 5: Top Types (`unknown` vs `any`) and Safer Narrowing

### Learn
- Risks of `any`
- `unknown` as safer alternative
- Type narrowing with `typeof`, `in`, and custom guards

### Practice
1. Write `parseInput(value: unknown)` and return normalized output.
2. Replace `any` with `unknown` in one sample and add guards.
3. Create one custom type guard function.

### Checkpoint
- You can process unknown data without disabling type safety.

---

## Step 6: Functions, Return Types, and API Contracts

### Learn
- Parameter typing
- Return type design
- Function signatures as contracts

### Practice
1. Build a small “billing utils” module with typed functions.
2. Add edge cases (empty arrays, invalid inputs).
3. Ensure return types reflect all outcomes (including errors).

### Checkpoint
- Function signatures are self-documenting and predictable.

---

## Step 7: TS/JS Interoperability

### Learn
- Using JS files in TS projects
- Type-checking JavaScript with `// @ts-check` + JSDoc
- Gradual migration strategies

### Practice
1. Take one plain JS utility file and type-check it with JSDoc.
2. Convert that utility to `.ts` incrementally.
3. Compare DX improvements (autocomplete, errors, refactor safety).

### Checkpoint
- You can migrate JS to TS without big-bang rewrites.

---

## Step 8: Real Mini-Project in TypeScript

### Build
Create a small CLI or browser app using strict types.

Suggested ideas:
- **Task Tracker CLI** (typed task model, filters, persistence simulation)
- **Budget Planner** (typed categories, totals, validations)

### Requirements
- No `any` in app code
- Reusable interfaces/types in separate files
- Clear error-handling path
- Project compiles with `npx tsc` cleanly

---

## Step 9: Quality Pass and Refactoring

### Practice
- Tighten types (remove broad unions where possible).
- Enable additional tsconfig checks if currently off.
- Rename unclear types for readability.
- Add short docs/comments to public utility functions.

### Final checkpoint
- You can design types first, then implement logic with fewer runtime surprises.
