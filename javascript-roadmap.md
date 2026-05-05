# JavaScript Learning Roadmap (Practice-First)

This roadmap is based on the topics covered in `javascript-breakdown.js` and turns them into a practical learning path.

## How to use this roadmap

- Move step by step.
- Build the mini-practice before moving forward.
- Keep one folder per step and commit your work.

---

## Step 1: Variables, Scope, and Hoisting

### Learn
- `var`, `let`, `const`
- Declaration vs initialization
- Block scope vs function scope
- Hoisting and Temporal Dead Zone (TDZ)
- Nullish coalescing (`??`)

### Practice
1. Create `01-variables.js` with 8-10 examples using `var`, `let`, and `const`.
2. Write one snippet that fails because of TDZ, then fix it.
3. Build a small `profile` object and safely default missing fields with `??`.

### Checkpoint
- You can explain when **not** to use `var`.
- You can predict which lines fail before running the file.

---

## Step 2: Primitive Types and Core Values

### Learn
- `string`, `number`, `undefined`, `null`, `boolean`, `bigint`
- Template literals
- `typeof` basics

### Practice
1. Create `02-types.js` and log examples of each primitive.
2. Convert user input strings to numbers and handle invalid values.
3. Create one `bigint` exercise using values larger than `Number.MAX_SAFE_INTEGER`.

### Checkpoint
- You understand when `bigint` is useful.
- You can avoid accidental string-number concatenation bugs.

---

## Step 3: DOM Fundamentals

### Learn
- `document.querySelector`
- Selecting elements by id/class
- Reading/updating text and values

### Practice
1. Build a one-page “Live Greeting” app:
   - Input for name
   - Button to update greeting text
2. Add validation for empty input.

### Checkpoint
- You can select elements reliably and update the UI from JS.

---

## Step 4: Events and Event Objects

### Learn
- `addEventListener`
- Common events: `click`, `change`, `focus`, `blur`, keyboard events, `submit`
- `event.target`, `event.currentTarget`, `event.type`
- `preventDefault`, `stopPropagation`

### Practice
1. Build a form with name + email.
2. On submit:
   - Prevent default
   - Validate both fields
   - Show inline errors
3. Add a click handler to parent + child to observe propagation.

### Checkpoint
- You can explain bubbling and stop it only when truly needed.

---

## Step 5: Forms + Validation Flow

### Learn
- Form submission lifecycle
- Basic client-side validation patterns
- User-friendly error states

### Practice
1. Create `contact-form-practice/`:
   - Required fields
   - Email format check
   - Success message after valid submit
2. Disable submit button while processing (simulate delay).

### Checkpoint
- Form cannot be submitted with invalid data.
- User sees clear errors and success state.

---

## Step 6: Async JavaScript and Fetch

### Learn
- Promises, `.then/.catch`
- `async/await`
- Fetching JSON data
- Basic error handling

### Practice
1. Fetch users from `https://jsonplaceholder.typicode.com/users`.
2. Render names in a list.
3. Add loading and error UI states.

### Checkpoint
- You can write the same flow with both promise chains and async/await.

---

## Step 7: Iterators and Generators

### Learn
- `function*`
- `yield`
- `.next()` and `done/value`
- Incremental data processing

### Practice
1. Build a generator that yields tasks one by one.
2. Create a loop that “processes” each task with a delay.
3. Compare full-array processing vs incremental generator processing.

### Checkpoint
- You can describe why generators help with controlled iteration.

---

## Step 8: Integration Mini-Project

### Build
Create one browser app that combines the core topics:
- DOM updates
- Event handling
- Form validation
- Fetch data
- Simple async state management

Suggested idea: **“User Search Dashboard”**
- Input for username
- Button to fetch users
- Filter list live
- Show loading/error/empty states

### Done definition
- No uncaught console errors
- Clear UI feedback for all states
- Code split into small reusable functions

---

## Step 9: Review and Improve

### Practice
- Refactor repeated logic into helpers.
- Add comments only where intent is not obvious.
- Add one “stretch” feature (sorting, pagination, dark mode, etc.).

### Final checkpoint
- You can independently build small DOM apps without copy-pasting tutorials.
