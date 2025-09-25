/* A generator function (function*) returns a generator object, which is both an iterator (you can keep requesting values with .next()) and iterable (you can loop through it with for…of).
The variables inside the generator are a remembered state, because each time you use yield the function pauses and keeps everything until you call it again.
You can think of yield in Spanish as “deliver/hand over a value for now.”
And .next() is the method to request the next value. */

{
  function* userIterator(users) {
    for (let user of users) {
      yield user; // yield = "entregar uno por uno"
    }
  }

  // Data we want to consume gradually
  const users = ["Alice", "Bob", "Charlie", "Diana"];

  const iterator = userIterator(users);

  let next = iterator.next();
  while (!next.done) {
    console.log("Processing user:", next.value);
    // you could imagine saving to DB, sending email, etc.
    next = iterator.next(); // ask for the next one
  }
  // Output:
  // Processing user: Alice
  // Processing user: Bob
  // Processing user: Charlie
  // Processing user: Diana
}

{
  // A generator that yields one user at a time
  function* userIterator(users) {
    for (let user of users) {
      yield user;
    }
  }

  async function run() {
    // 1. Fetch real data from API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // 2. Create iterator
    const iterator = userIterator(users);

    // 3. Consume manually
    let next = iterator.next();
    while (!next.done) {
      console.log("Processing user:", next.value.name);
      // Example: simulate saving to DB
      await new Promise((r) => setTimeout(r, 500)); // pause 0.5s
      next = iterator.next(); // ask for next user
    }

    console.log("✅ All users processed!");
  }

  run();
}
