/* JAVASCRIP BREAKDOWN */

const { log } = require("console");

const title = "JavaScript Breakdown";

console.log(title);

/* 1. Variables */
// There are three ways to declare a variable in JavaScript: var, let, and const. The main differences between them are their scope and whether they can be reassigned or not.
// var: function-scoped, can be reassigned and redeclared
// let: block-scoped, can be reassigned but not redeclared
// const: block-scoped, cannot be reassigned or redeclared
// Declaration vs Initialization: Declaration is the process of creating a variable, while initialization is the process of assigning a value to a variable.

{
  // var (legacy)

  var nameFlorentinoVar = "Florentino";
  var ageVar = 25;
  var isMaleVar = true;

  console.log(nameFlorentinoVar); // Florentino
  console.log(ageVar); // 25
  console.log(isMaleVar); // true

  // let (block scope)

  let nameFlorentinoLet = "Florentino";
  let ageLet = 25;
  let isMaleLet = true;

  console.log(nameFlorentinoLet); // Florentino
  console.log(ageLet); // 25
  console.log(isMaleLet); // true

  // const (block scope)

  const nameFlorentinoConst = "Florentino";
  const ageConst = 25;
  const isMaleConst = true;

  console.log(nameFlorentinoConst); // Florentino
  console.log(ageConst); // 25
  console.log(isMaleConst); // true

  // Temporal Dead Zone (TDZ): let and const are hoisted but not initialized

  console.log(lastNameFlorentino); // ReferenceError: Cannot access 'lastNameFlorentino' before initialization
  let lastNameFlorentino = "Ariza";

  // Hoisting: var is hoisted and initialized with undefined

  console.log(nameFermina); // undefined
  var nameFermina = "Daza";

  // ?? (Nullish Coalescing Operator): returns the right-hand operand when the left-hand operand is null or undefined

  let lastNameFermina = null;
  let result = lastNameFermina ?? "Daza";
  console.log(result); // Daza
}

/* 1.2. Primitive Types */

{
  // 1.2.1 .String: String is a primitive type that holds a sequence of characters. String in Javascript is written within a pair of single quotation marks '', double quotation marks "", or backticks `` (template literals). All types of quotes can be used to contain a string but only if the starting quote is the same as the end quote.

  const backticksString = "backticks";

  const stringExample = "This is a string";
  const stringExampleTwo = "This is another string";
  const stringExampleThree = `This is a string with ${backticksString}`;
  const stringExampleFour = "This is " + "a concatenated string";

  console.log(stringExample); // This is a string
  console.log(stringExampleTwo); // This is another string
  console.log(stringExampleThree); // This is a string with backticks
  console.log(stringExampleFour); // This is a concatenated string

  // 1.2.2. Undefined: Whenever a variable is declared but not initialized or assigned a value, then it is stored as undefined. A function returns undefined if a value was not returned. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.

  // 1.2.3. Number: The Number data type in JavaScript represents floating-point numbers, such as 37 or -9.25. The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the Number() function.

  // 1.2.4. Bigint: BigInt is a built-in JavaScript object that allows you to work with integers of arbitrary size. Unlike the Number type, which can accurately represent integers only within the range of ±2^53 , BigInt can handle integers far beyond this limit. This makes it particularly useful for applications requiring high precision with very large numbers, such as cryptography or scientific computations.

  // Bigint examples:

  const previouslyMaxSafeInteger = 9007199254740991n;
  console.log(previouslyMaxSafeInteger);

  const alsoHuge = BigInt(9007199254740991);
  console.log(alsoHuge); // 9007199254740991n

  const hugeString = BigInt("9007199254740991");
  console.log(hugeString); // 9007199254740991n

  const hugeHex = BigInt("0x1fffffffffffff");
  console.log(hugeHex); // 9007199254740991n

  const hugeOctal = BigInt("0o377777777777777777");
  console.log(hugeOctal); // 9007199254740991n

  const hugeBin = BigInt(
    "0b11111111111111111111111111111111111111111111111111111"
  );
  console.log(hugeBin); // 9007199254740991n

  // When tested against typeof, a BigInt value (bigint primitive) will give "bigint":

  typeof 1n === "bigint"; // true
  typeof BigInt("1") === "bigint"; // true

  // A BigInt value can also be wrapped in an Object:

  typeof Object(1n) === "object"; // true
}

/* 2. DOM */

// DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages.

  /* 2.1 DOM - Events */

  // All the JS Events:
  // https://developer.mozilla.org/en-US/docs/Web/Events
{
  // Change Event: occurs when the value of an element has been changed

  const inputChanged = document.querySelector("#input");
  inputChanged.addEventListener("change", function (event) {
    console.log(event.target.value);
  });

  // Click Event: occurs when an element is clicked

  const buttonClicked = document.querySelector("#button-button-clicked");
  buttonClicked.addEventListener("click", function (event) {
    console.log("Button clicked");
  });

  // DOMContentLoaded Event: occurs when the initial HTML document has been completely loaded and parsed

  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
  });

  // Event bubbling and propagation: when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors

  document.addEventListener("click", function (event) {
    console.log("Document clicked");
    event.stopPropagation();
  });

  // Event details: event.target, event.currentTarget, event.type

  const buttonEventDetails = document.querySelector("#button-event-details");
  buttonEventDetails.addEventListener("click", function (event) {
    console.log(event.target); // event.target: the element that triggered the event
    console.log(event.currentTarget); // event.currentTarget: the element that the event listener is attached to
    console.log(event.type); // event.type: the type of event that occurred
  });

  // Focus/Blur Event: occurs when an element gets or loses focus

  const inputFocused = document.querySelector("#input-focused");
  inputFocused.addEventListener("focus", function (event) {
    console.log("Input focused");
  });

  inputFocused.addEventListener("blur", function (event) {
    console.log("Input blurred");
  });

  // Keydown/Keypress/Keyup Event: occurs when a key is pressed/released

  const inputKey = document.querySelector("#input-key");
  inputKey.addEventListener("keydown", function (event) {
    console.log("Keydown event");
  });

  inputKey.addEventListener("keypress", function (event) {
    console.log("Keypress event");
  });

  inputKey.addEventListener("keyup", function (event) {
    console.log("Keyup event");
  });

  // Scroll Event: occurs when an element's scroll position changes

  document.addEventListener("scroll", function (event) {
    console.log("Document scrolled");
  });

  // Submit Event: occurs when a form is submitted

  const formSubmitted = document.querySelector("#form-submitted");
  formSubmitted.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
    // We can here, for example:
    //Redirect to another page
    window.location.href = "https://www.google.com";
    // Send data to a server
    const formData = new FormData(formSubmitted);

    fetch("https://example.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Validate the form
    const nameToValidate = document.querySelector("#name");
    const emailToValidate = document.querySelector("#email");
    let isValid = true;

    if (!nameToValidate.value.trim()) {
      isValid = false;
      console.error("Name is required");
    }

    if (!emailToValidate.value.trim()) {
      isValid = false;
      console.error("Email is required");
    }

    if (!isValid) {
      return;
    }
  });

  // element.addEventListener(event, callback): adds an event listener to an element

  const buttonEventToListen = document.querySelector("#button-event-to-listen");

  buttonEventToListen.addEventListener("click", function (event) {
    console.log("Button clicked");
  });

  // element.removeEventListener(event, callback): removes an event listener from an element

  const buttonEventToRemove = document.querySelector("#button-event-to-remove");

  buttonEventToRemove.removeEventListener("click", function (event) {
    console.log("Button clicked");
  });

  // event.preventDefault(): prevents the default behavior of an event. Used in Submit Event example
}

/* 2.2 DOM - HTML Element */

// The HTMLElement interface represents any HTML element. It inherits properties and methods from the Element and Node interfaces. All HTML elements in the DOM are instances of the HTMLElement interface or one of its subclasses. Some frameworks like React or Angular use virtual DOMs, which are in-memory representations of the actual DOM. They allow for efficient updates and rendering of UI components by minimizing direct manipulation of the real DOM.
{
  // element.classList.add(className): adds a class to an element

  const elementClassListAdd = document.querySelector("#element-class-list-add");
  elementClassListAdd.classList.add("active");

  // element.classList.remove(className): removes a class from an element

  const elementClassListRemove = document.querySelector(
    "#element-class-list-remove"
  );
  elementClassListRemove.classList.remove("active");

  // element.classList.toggle(className): toggles a class on an element

  const elementClassListToggle = document.querySelector(
    "#element-class-list-toggle"
  );
  elementClassListToggle.classList.toggle("active");

  // element.classList.contains(className): checks if an element has a class

  const elementClassListContains = document.querySelector(
    "#element-class-list-contains"
  );
  console.log(elementClassListContains.classList.contains("active")); // true

  // element.classList.replace(oldClassName, newClassName): replaces a class on an element

  const elementClassListReplace = document.querySelector(
    "#element-class-list-replace"
  );
  elementClassListReplace.classList.replace("active", "inactive");

  // element.getAttribute(attribute): gets the value of an attribute

  const elementGetAttribute = document.querySelector("#element-get-attribute");
  console.log(elementGetAttribute.getAttribute("id")); // element-get-attribute

  // element.setAttribute(attribute, value): sets the value of an attribute

  const elementSetAttribute = document.querySelector("#element-set-attribute");
  elementSetAttribute.setAttribute("id", "new-id");

  // element.style.property = value: sets the value of a style property

  const elementStyle = document.querySelector("#element-style");
  elementStyle.style.color = "red";

  // element.textContent: sets the text content of an element

  const elementTextContent = document.querySelector("#element-text-content");
  elementTextContent.textContent = "New text content";

  // element.value: sets the value of an input element

  const elementValue = document.querySelector("#element-value");
  elementValue.value = "New value";

  // element.innerHTML: sets the HTML content of an element

  const elementInnerHTML = document.querySelector("#element-inner-html");
  elementInnerHTML.innerHTML = "<strong>New HTML content</strong>";

  // element.remove(): removes an element from the DOM

  const elementRemove = document.querySelector("#element-remove");
  elementRemove.remove();

  // HTMLElement: represents any HTML element

  const element = document.querySelector("#element");
  console.log(element); // <div id="element"></div>

  // element.insertAdjacentHTML(position, text): inserts HTML content relative to an element. The position can be 'beforebegin', 'afterbegin', 'beforeend', 'afterend'.

  const elementInsertAdjacentHTML = document.querySelector(
    "#element-insert-adjacent-html"
  );
  elementInsertAdjacentHTML.insertAdjacentHTML(
    "afterend",
    "<p>New paragraph</p>"
  );

  // element.appendChild(childElement): appends a child element to a parent element

  const parentElementAppend = document.querySelector("#parent-element-append");
  const childElementAppend = document.createElement("child-element-append");

  parentElementAppend.appendChild(childElementAppend);

  // element.removeChild(childElement): removes a child element from a parent element

  const parentElementRemove = document.querySelector("#parent-element-remove");
  const childElementRemove = document.querySelector("#child-element-remove");

  parentElementRemove.removeChild(childElementRemove);

  // element.replaceChild(newChildElement, oldChildElement): replaces a child element with a new child element

  const parentElementReplace = document.querySelector(
    "#parent-element-replace"
  );
  const newChildElementReplace = document.createElement(
    "new-child-element-replace"
  );
  const oldChildElementReplace = document.querySelector(
    "#old-child-element-replace"
  );

  parentElementReplace.replaceChild(
    newChildElementReplace,
    oldChildElementReplace
  );

  // element.createElement(): creates an element with the specified tag name

  const newElementCreateElement = document.createElement("div");
  newElementCreateElement.textContent = "New element created";
  newElementCreateElement.style.color = "000";

  console.log(newElementCreateElement); // <div>New element created</div>
}

/* 2.3 DOM - Selection */
{
  // NodeList: represents a collection of nodes. It is an array-like object but not an array

  const nodeListElements = document.querySelectorAll(".elements-node-list");

  nodeListElements.forEach(function (element) {
    console.log(element);
  }); // NodeList

  // NodeList to Array: converts a NodeList to an array

  const nodeListToArray = document.querySelectorAll(".elements-node-list");
  const arrayElements = Array.from(nodeListToArray);

  console.log(arrayElements); // Array

  arrayElements.forEach(function (element) {
    console.log(element);
  }); // Array

  // document: represents the entire HTML document

  console.log(document); // HTMLDocument

  // document.body: represents the body element

  console.log(document.body); // HTMLBodyElement

  // document.head: represents the head element

  console.log(document.head); // HTMLHeadElement

  // document.documentElement: represents the root element of the document

  console.log(document.documentElement); // HTMLHtmlElement

  // document.getElementById(id): gets an element by its id

  const elementById = document.getElementById("element-by-id");
  console.log(elementById); // HTMLElement

  // document.getElementsByClassName(className): gets elements by their class name

  const elementsByClassName = document.getElementsByClassName(
    "elements-by-class-name"
  );
  console.log(elementsByClassName); // HTMLCollection

  // document.querySelector(selector): gets the first element that matches the selector

  const elementQuerySelector = document.querySelector(
    "#element-query-selector"
  );
  console.log(elementQuerySelector); // HTMLElement

  // document.querySelectorAll(selector): gets all elements that match the selector

  const elementsQuerySelectorAll = document.querySelectorAll(
    ".elements-query-selector-all"
  );
  console.log(elementsQuerySelectorAll); // NodeList

  // element.children: gets the child elements of an element

  const parentElementChildren = document.querySelector(
    "#parent-element-children"
  );
  console.log(parentElementChildren.children); // HTMLCollection

  // element.firstElementChild: gets the first child element of an element

  const parentElementFirstElementChild = document.querySelector(
    "#parent-element-first-element-child"
  );
  console.log(parentElementFirstElementChild.firstElementChild); // HTMLElement

  // element.lastElementChild: gets the last child element of an element

  const parentElementLastElementChild = document.querySelector(
    "#parent-element-last-element-child"
  );
  console.log(parentElementLastElementChild.lastElementChild); // HTMLElement

  // element.closest(selector): gets the closest ancestor of an element that matches the selector

  const elementClosest = document.querySelector("#element-closest");
  console.log(elementClosest.closest(".parent-element-closest")); // HTMLElement
}

/* 3. Fetch API */
{
  // DELETE Request: deletes data from a server

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  // GET Request: gets data from a server

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  // POST Request: sends data to a server

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  // Error Handling: handles errors when fetching data is important because fetch() does not reject the promise on HTTP errors and to avoid unexpected behavior or breaking the application

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });

  // Fetch wrapper: creates a wrapper function for fetch() to handle errors

  async function fetchWrapper(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  // Response status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error

  function handleResponse(response) {
    switch (response.status) {
      case 200:
        console.log("OK: The request was successful.");
        // Handle the response data here
        break;
      case 201:
        console.log("Created: The resource was successfully created.");
        // Handle post-creation logic here
        break;
      case 204:
        console.log(
          "No Content: The request was successful, but there's no content to return."
        );
        // Handle cases where no response body is expected
        break;
      case 400:
        console.log(
          "Bad Request: The request could not be understood or was missing required parameters."
        );
        break;
      case 401:
        console.log("Unauthorized: Authentication is required.");
        break;
      case 403:
        console.log(
          "Forbidden: You don't have permission to access this resource."
        );
        break;
      case 404:
        console.log("Not Found: The requested resource could not be found.");
        // Handle 404 - Not Found response here
        document.body.innerHTML = `<h1>404 Not Found</h1><p>The page you're looking for does not exist.</p>`;
        break;
      case 500:
        console.log(
          "Internal Server Error: There was a problem with the server."
        );
        break;
      default:
        console.log("Unhandled status code:", response.status);
        break;
    }
  }

  // Example usage
  fetch("https://example.com/some-resource")
    .then((response) => handleResponse(response))
    .catch((error) => {
      console.error("There was an error with the request:", error);
    });
}

/* 4. Functions */

{
  // 1. Arrow Function ()=> : a shorter syntax for writing function expressions

  const arrowFunction = () => {
    console.log("Arrow function");
  };

  arrowFunction(); // Arrow function

  // 2. ?. (Optional Chaining): accesses nested properties without the need to validate each reference in the chain

  const userOptionChaining = {
    name: "Florentino",
    address: {
      city: "Cartagena",
    },
  };

  console.log(userOptionChaining?.address?.city); // Cartagena

  // The expression userOptionChaining?.address?.city checks if userOptionChaining and userOptionChaining.address exist. If they do, it accesses the city property.
  // If any part of the chain (e.g., userOptionChaining or userOptionChaining.address) is null or undefined, it returns undefined instead of throwing an error.

  // 3. Asynchronous callbacks: executes a function asynchronously after a certain time or event has passed. Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example: setTimeout, setInterval, addEventListener, fetch.

  // Making HTTP requests using fetch(): Fetch is a modern API for making HTTP requests in the browser. It is asynchronous and returns a Promise that resolves to the Response object representing the response to the request.

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  // Accessing a user’s camera or microphone using getUserMedia(): getUserMedia() is an asynchronous function that prompts the user for permission to access their camera or microphone. It returns a Promise that resolves to a MediaStream object representing the user's audio and video streams.

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      console.log("User granted access to camera and microphone");
    })
    .catch((error) => {
      console.error("Error accessing camera and microphone:", error);
    });

  // Asking a user to select files using showOpenFilePicker(): showOpenFilePicker() is an asynchronous function that prompts the user to select files from their device. It returns a Promise that resolves to an array of File objects representing the selected files.

  const filePicker = document.querySelector("#file-picker");

  filePicker.addEventListener("click", async function (event) {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      console.log("Selected file:", file.name);
    } catch (error) {
      console.error("Error selecting file:", error);
    }
  });

  // SetTimeout: executes a function after a specified delay. It is commonly used to create a delay before running a function or to schedule a function to run in the future.

  setTimeout(() => {
    console.log("Asynchronous callback");
  }, 1000);

  const buttonAsynchronousCallback = document.querySelector(
    "#button-asynchronous-callback"
  );
  buttonAsynchronousCallback.addEventListener("click", function (event) {
    setTimeout(() => {
      console.log("Button clicked asynchronously");
    }, 1000);
  });

  // 4. Callback patterns: Callbacks can be used to handle asynchronous operations, such as fetching data from a server or waiting for user input.

  function fetchDataCallback(callback) {
    setTimeout(() => {
      const data = "Data fetched";
      callback(data);
    }, 1000);
  } // Callback function

  fetchDataCallback((data) => {
    console.log(data);
  }); // Data fetched

  // 5. Closures: Closures in JavaScript allow a function to "remember" and access variables from its lexical scope, even when the function is executed outside that scope. This happens because JavaScript functions form a closure (cierre o clausura) over the scope in which they were created, keeping a reference to that scope even after the outer function has returned. When outerFunction is called, this variable is created and stored in the function's scope. However, outerFunction also defines an inner function (innerFunction) which can access outerVariable.

  // Lexical scoping: Before one can make an intuition of closures in JavaScript, it’s important to first get the hang of the term ‘lexical environment’. In simple words, the lexical environment for a function f simply refers to the environment enclosing that function’s definition in the source code. This environment consists of all the variables that are in scope at the time of the function’s definition. The lexical environment is determined by the location of the function in the source code, and it is fixed at the time of the function’s creation.

  function outerFunction() {
    const outerVariable = "Outer variable";

    function innerFunction() {
      const innerVariable = "Inner variable";
      console.log(outerVariable); // Outer variable
    }

    return innerFunction;
  }

  // 6. Generator functions: Generator functions are a special type of function that can pause and resume their execution. They are defined using the function* syntax and yield keyword. This is useful in various scenarios, such as dealing with asynchronous code, streaming data, or implementing complex iteration behaviors. Generator functions are defined using the function* (with an asterisk) syntax, followed by a block of code. Inside the function, the yield keyword is used to pause the function and return a value to the caller.

  function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
  }

  const generator = generatorFunction();
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }

  // 7. Hoisting: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. This means that you can use a variable or function before it has been declared.

  console.log(hoistedVariable); // undefined
  var hoistedVariable = "Hoisted variable";

  // 8. Immediately Invoked Function Expression (IIFE): an anonymous function that is executed immediately after it is defined. It is wrapped in parentheses to prevent it from being treated as a function declaration.

  (() => {})(); // IIFE

  (function () {
    console.log("IIFE");
  })(); // IIFE

  // 9. Lexical scope: Lexical scope is a scope in JavaScript that is determined by the placement of variables and functions in the code. It allows inner functions to access variables from their outer function, even after the outer function has finished executing. See closures example.

  // 10. Passing functions as arguments: Functions can be passed as arguments to other functions, allowing for dynamic behavior and code reusability.

  function sayHello(name) {
    return `Hello, ${name}!`;
  }

  function sayHelloToUser(sayHelloFunction, name) {
    return sayHelloFunction(name);
  }

  console.log(sayHelloToUser(sayHello, "Florentino")); // Hello, Florentino!

  // 11. Basic functions: Functions in JavaScript are defined using the function keyword, followed by the function name, parameters, and function body.

  function basicFunctionGreet(fullname) {
    return `Hello, ${fullname}!`;
  }

  console.log(basicFunctionGreet("Florentino")); // Hello, Florentino!

  // 12. Default parameters: Default parameters allow us to specify default values for function parameters in case no value is provided when the function is called.

  function greetDefaultParameters(name = "World") {
    return `Hello, ${name}!`;
  }

  console.log(greetDefaultParameters()); // Hello, World!
  console.log(greetDefaultParameters("Florentino")); // Hello, Florentino!

  // 13. Implicit return: Arrow functions with a single expression can have an implicit return, meaning the return keyword and curly braces are omitted.

  const implicitReturn = (name) => `Hello, ${name}!`;

  // 14. yield: The yield keyword is used inside generator functions to pause the function and return a value to the caller. It allows the function to be paused and resumed, enabling complex iteration behaviors and asynchronous code handling.

  function* generatorFunctionYield() {
    yield 1;
    yield 2;
    yield 3;
  }

  const generatorYield = generatorFunctionYield();

  console.log(generatorYield.next()); // { value: 1, done: false }
  console.log(generatorYield.next()); // { value: 2, done: false }
  console.log(generatorYield.next()); // { value: 3, done: false }

  // yield* : The yield* keyword is used inside generator functions to delegate the execution to another generator function or iterable object. It allows for nested iteration and delegation of generator functions.

  function* generatorFunctionYieldNested() {
    yield* [1, 2, 3];
  }

  const generatorYieldNested = generatorFunctionYieldNested();

  console.log(generatorYieldNested.next()); // { value: 1, done: false }
  console.log(generatorYieldNested.next()); // { value: 2, done: false }
  console.log(generatorYieldNested.next()); // { value: 3, done: false }

  // 15. rest parameters: Rest parameters allow a function to accept an indefinite number of arguments as an array. They are denoted by three dots (...) followed by the parameter name.

  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sum(1, 2, 3)); // 6

  // spread operator: The spread operator allows an iterable (e.g., an array) to be expanded into individual elements. It is denoted by three dots (...) followed by the iterable.

  const numbers = [1, 2, 3];
  console.log(...numbers); // 1 2 3

  // 16. Function Burrowing: Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.

  // Example with .call()

  const person = {
    name: "Florentino",
    greet: function () {
      return `Hello, ${this.name}!`;
    },
  };

  const anotherPerson = {
    name: "Fermina",
  };

  console.log(person.greet.call(anotherPerson)); // Hello, Fermina!

  // Example with .apply()

  const numbersApply = [1, 2, 3];

  function sumApply(a, b, c) {
    return a + b + c;
  }

  console.log(sumApply.apply(null, numbersApply)); // 6

  // Example with .bind()

  const personBind = {
    name: "Florentino",
    greet: function () {
      return `Hello, ${this.name}!`;
    },
  };

  const anotherPersonBind = {
    name: "Fermina",
  };

  const greetAnotherPerson = personBind.greet.bind(anotherPersonBind);
  console.log(greetAnotherPerson()); // Hello, Fermina!

  // Whe to use .call(), .apply(), or .bind(): .call() and .apply() are used when you want to invoke a function immediately, while .bind() is used when you want to create a new function that, when called, has its this keyword set to the provided value.

  // 17. Explicit binding: Explicit binding is when you use the call or apply methods to explicitly set the value of this in a function. Explicit Binding can be applied using call(), apply(), and bind(). The difference between explicit binding and function burrow is that in explicit binding, you are setting the value of this to a specific object, whereas in function burrow, you are borrowing a method from another object.

  // For example:

  const personExplicitBinding = {
    name: "Florentino",
    greet: function () {
      return `Hello, ${this.name}!`;
    },
  };

  const anotherPersonExplicitBinding = {
    name: "Fermina",
  };

  console.log(personExplicitBinding.greet.call(anotherPersonExplicitBinding)); // Hello, Fermina!

  // 18. Implicit binding: Implicit binding is when you use the this keyword to refer to the object that the function is a method of. In other words, the object that the function is called on is the object that this refers to. This is the default behavior in JavaScript.

  // For example:

  const personImplicitBinding = {
    name: "Florentino",
    greet: function () {
      return `Hello, ${this.name}!`;
    },
  };

  console.log(personImplicitBinding.greet()); // Hello, Florentino!

}

/* 5. Miscellaneous */

{
  // 1. Built-in objects: Built-in objects, or “global objects”, are those built into the language specification itself. There are numerous built-in objects with the JavaScript language, all of which are accessible at the global scope. Some examples are: Number, Math, Date, String, Error, Function, Boolean.

  // 2. Currying: Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. This allows for partial application of the function, where some arguments are provided upfront, and the rest are provided later.

  function multiplyCurrying(a) {
    return function (b) {
      return a * b;
    };
  }

  const multiplyByTwo = multiplyCurrying(2);
  console.log(multiplyByTwo(3)); // 6

  // 3. Deep equal" is a technique used to compare two objects to see if they are identical in terms of their properties and values, even when the objects contain nested structures such as arrays or other objects. Unlike shallow comparison (using ===), which checks only if two variables point to the same reference in memory, deep equal goes further to recursively compare the values inside the objects.

  const benjamin1 = {
    name: "Benjamin Button",
    age: 25, // Looks younger, but is older
    history: {
      birthYear: 1918,
      looksLike: "Young adult",
      lifeEvents: ["Joins Navy", "Falls in love"],
    },
  };

  const benjamin2 = {
    name: "Benjamin Button",
    age: 25, // Same age, same situation
    history: {
      birthYear: 1918,
      looksLike: "Young adult",
      lifeEvents: ["Joins Navy", "Falls in love"],
    },
  };

  // Deep Equal Function
  function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
      typeof obj1 !== "object" ||
      typeof obj2 !== "object" ||
      obj1 === null ||
      obj2 === null
    ) {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  console.log(deepEqual(benjamin1, benjamin2)); // true (They are the same even with nested objects)

  // 4. ECMAScript: ECMAScript is the standard upon which JavaScript is based. It specifies the core features of the language, such as syntax, types, and built-in objects. JavaScript is an implementation of ECMAScript, which means that it follows the rules and guidelines set by the ECMAScript standard.

  // 5. ECMAScript 6 (ES6): ECMAScript 6, also known as ES6 or ECMAScript 2015, introduced many new features to JavaScript, such as arrow functions, classes, template literals, and destructuring assignments. It was a major update to the language and laid the foundation for modern JavaScript development.

  // 6. Event Loop: The event loop is a fundamental concept in JavaScript that allows the runtime environment to efficiently handle asynchronous operations. It ensures that tasks are executed in the correct order and that the application remains responsive to user interactions.

  /*
    ───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
  */

   // Each box will be referred to as a "phase" of the event loop.

   // Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.

   // Since any of these operations may schedule more operations and new events processed in the poll phase are queued by the kernel, poll events can be queued while polling events are being processed. As a result, long running callbacks can allow the poll phase to run much longer than a timer's threshold.

   // There is a slight discrepancy between the Windows and the Unix/Linux implementation, but that's not important for this demonstration. The most important parts are here. There are actually seven or eight steps, but the ones we care about — ones that Node.js actually uses - are those above.

   /*
   Phases Overview:
   1. timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
   2. pending callbacks: executes I/O callbacks deferred to the next loop iteration.
   3. idle, prepare: only used internally.
   4. poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
   5. check: setImmediate() callbacks are invoked here.
   6. close callbacks: some close callbacks, e.g. socket.on('close', ...).
   */

   // Between each run of the event loop, Node.js checks if it is waiting for any asynchronous I/O or timers and shuts down cleanly if there are not any.

  // 7. Event loop phases: The event loop in JavaScript consists of several phases, including the callback queue, microtask queue, and rendering. These phases work together to process tasks and ensure that the application remains responsive and performs well.

  // 8. IIFE (Immediately Invoked Function Expression): An IIFE is a common JavaScript pattern that involves defining and immediately executing a function. It is often used to create a new scope for variables and avoid polluting the global namespace.

  (function () {
    console.log("IIFE executed");
  })();

  // 9. Inmutability: Inmutability is a key concept in functional programming that refers to the idea that data should not be changed once it is created. Instead of modifying existing data, new data structures are created with the desired changes. This approach helps prevent bugs and makes code easier to reason about.

  // Inmutability Example:
  const originalArray = [1, 2, 3];

  // Add an element to the original array
  const newArray = [...originalArray, 4];

  console.log(originalArray); // [1, 2, 3]
  console.log(newArray); // [1, 2, 3, 4]

  // Inmutability - Original character object
  const aldoRaine = {
    name: "Aldo Raine",
    rank: "Lieutenant",
    mission: "Take down Nazis",
    team: ["Donny Donowitz", "Hugo Stiglitz", "Omar Ulmer"],
  };

  // Let's say Aldo Raine gets promoted to 'Captain' and completes his mission.
  // Instead of modifying the original object, we'll create a new one with the updated info.

  const updatedAldoRaine = {
    ...aldoRaine, // Spread the original object
    rank: "Captain", // Update the rank
    mission: "Mission Accomplished", // Update the mission status
  };

  console.log(aldoRaine);
  // Output:
  // {
  //   name: 'Aldo Raine',
  //   rank: 'Lieutenant',
  //   mission: 'Take down Nazis',
  //   team: ['Donny Donowitz', 'Hugo Stiglitz', 'Omar Ulmer']
  // }

  console.log(updatedAldoRaine);
  // Output:
  // {
  //   name: 'Aldo Raine',
  //   rank: 'Captain',
  //   mission: 'Mission Accomplished',
  //   team: ['Donny Donowitz', 'Hugo Stiglitz', 'Omar Ulmer']
  // }

  // Now, let's say we want to add a new member to Aldo Raine's team but keep immutability. This time we'll create a new object with an updated team.

  // Aldo Raine recruits a new member to his team
  const newTeamMember = "Archie Hicox";

  // Create a new object with the updated team (without mutating the original one)
  const fullyUpdatedAldoRaine = {
    ...updatedAldoRaine,
    team: [...updatedAldoRaine.team, newTeamMember], // Create a new array with the new team member
  };

  console.log(fullyUpdatedAldoRaine);
  // Output:
  // {
  //   name: 'Aldo Raine',
  //   rank: 'Captain',
  //   mission: 'Mission Accomplished',
  //   team: ['Donny Donowitz', 'Hugo Stiglitz', 'Omar Ulmer', 'Archie Hicox']
  // }

  // 10. Regular Expressions

  // Regular expressions (regex or regexp) are patterns used to match character combinations in strings. They are a powerful tool for text processing and validation in JavaScript and other programming languages. They are primarily used for string searching and manipulation, making them extremely useful in various programming tasks, such as validation, parsing, and text processing. In JavaScript, regular expressions can be created using either the RegExp constructor or by using literal notation enclosed in slashes.

  /*
  Basic Syntax
    Literals: Characters that match themselves. For example, the regex /abc/ matches the string "abc".

    Metacharacters:
    Special characters that have specific meanings. For example:
      .: Matches any single character except newline.
      ^: Matches the beginning of a string.
      $: Matches the end of a string.
      *: Matches 0 or more repetitions of the preceding element.
      +: Matches 1 or more repetitions of the preceding element.
      ?: Matches 0 or 1 occurrence of the preceding element.
      []: Matches any one character within the brackets.
      |: Acts as an OR operator.

    Quantifiers:
      {n}: Matches exactly n occurrences of the preceding element.
      {n,}: Matches n or more occurrences.
      {n,m}: Matches between n and m occurrences.
      Escape Characters: Use \ to escape metacharacters. For example, \. matches a literal period.

    Flags
    Regular expressions can have flags that modify their behavior:
      i: Case-insensitive matching.
      g: Global matching (find all matches).
      m: Multiline matching.
  */

  // Regular Expression Example: Matching a Simple Pattern
  const regexSimplePattern = /hello/;
  const strSimplePattern = "hello world";
  console.log(regexSimplePattern.test(strSimplePattern)); // true. the regex /hello/ checks if the substring "hello" exists in the string "hello world".

  // Regular Expression Example: Using Metacharacters
  const regexMetacharacters = /h.llo/;
  const str1Metacharacters = "hello";
  const str2Metacharacters = "hallo";
  console.log(regexMetacharacters.test(str1Metacharacters)); // true. The . matches any character, so both "hello" and "hallo" return true.
  console.log(regexMetacharacters.test(str2Metacharacters)); // true. The . matches any character, so both "hello" and "hallo" return true.

  // Regular Expression Example: Anchors: Start and End of String
  const regexStart = /^hello/; // Matches "hello" at the start
  const regexEnd = /world$/; // Matches "world" at the end
  console.log(regexStart.test("hello world")); // true. The caret (^) asserts position at the start
  console.log(regexEnd.test("hello world")); // true. The dollar sign ($) asserts position at the end.

  // Regular Expression Example: Using Character Classes
  const regexCharacterClasses = /[aeiou]/; // Matches any vowel
  const strCharacterClasses = "sky";
  console.log(regexCharacterClasses.test(strCharacterClasses)); // false. The brackets [] define a character class, matching any character inside them.
  const str2CharacterClasses = "sky is blue";
  console.log(regexCharacterClasses.test(str2CharacterClasses)); // true. The brackets [] define a character class, matching any character inside them.

  // Regular Expression Example: Quantifiers
  const regexQuantifiers = /\d+/; // Matches one or more digits
  const strQuantifiers = "There are 123 apples";
  console.log(strQuantifiers.match(regexQuantifiers)); // ["123"] Here, \d matches any digit, and + ensures it matches one or more occurrences.

  // Regular Expression Example: Global and Case-Insensitive Flags
  const regexFlags = /hello/gi; // Case-insensitive and global match
  const strFlags = "Hello hello HeLLo";
  console.log(strFlags.match(regexFlags)); // ["Hello", "hello", "HeLLo"] Using the g flag finds all occurrences, while i makes the match case-insensitive.

  // Regular Expression Example: Validating Input. We can use regex to validate formats, like email addresses. In this case, the regex checks for a basic email format with local and domain parts:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailExample1 = "example@example.com";
  const emailExample2 = "invalid-email.com";
  console.log(emailRegex.test(emailExample1)); // true
  console.log(emailRegex.test(emailExample2)); // false.

  // 11. Functional programming: Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It emphasizes the use of pure functions, higher-order functions, and immutable data structures to create more predictable and maintainable code. In JavaScript, many libraries (such as Ramda or Lodash) are built to provide functional utilities and make functional programming easier to apply in day-to-day code.

  // Functional programming principles:
  // 11.1. Pure functions: Functions that always produce the same output for the same input and have no side effects. Example:
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3)); // 5

  // 11.2. Higher-order functions: Functions that take other functions as arguments or return functions as results. Example:

  function multiplyByTwo(value) {
    return value * 2;
  }

  function operateOnNumber(number, operation) {
    return operation(number);
  }
  console.log(operateOnNumber(5, multiplyByTwo)); // 10

  // 11.3. Immutability: Data that cannot be changed after it is created. Instead of modifying existing data, new data structures are created with the desired changes. Example:
  const numbers = [1, 2, 3];
  const doubledNumbers = numbers.map((number) => number * 2);
  console.log(doubledNumbers); // [2, 4, 6]

  // 11.4. Recursion: A technique where a function calls itself to solve smaller instances of the same problem. One of the most powerful and elegant concept of functions, recursion is when a function invokes itself. Such a function is called a recursive function. As recursion happens, the underlying code of the recursive function gets executed again and again until a terminating condition, called the base case, gets fulfilled. As you dive into the world of algorithms, you’ll come across recursion in many many instances. Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures. Examples:

  // Two ways of thinking:
  function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  console.log( pow(2, 3) );

  // The same using recursion
  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  console.log( pow(2, 3) ); // 8

  // Factorial using recursion
  function factorialRecursion(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorialRecursion(n - 1);
    }
  }
  console.log(factorialRecursion(5)); // 120

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log(fibonacci(6)); // 8

  // Generate the first 15 Fibonacci numbers
  for (let i = 0; i < 15; i++) {
    console.log(fibonacci(i)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
  }

  // 12. Map: A Map is a data structure in JavaScript that stores key-value pairs. Unlike objects, keys in a Map can be any type, not just strings or symbols. A Map is typically used when you need to manage dynamic key-value associations. Key Features of Map:
  //Can have keys of any type, including objects and functions.
  // Maintains the insertion order of key-value pairs.
  // Provides built-in methods to interact with the collection, like .set(), .get(), .delete(), .has(), etc.
  // Often used for scenarios where you need a dictionary-like structure with flexibility.

  const map = new Map();
  map.set(key, value); // Adds a key-value pair
  map.get(key); // Retrieves the value for a key
  map.delete(key); // Deletes a key-value pair
  map.has(key); // Checks if a key exists

  const userRoles = new Map();

  // Add key-value pairs
  userRoles.set("Alice", "Admin");
  userRoles.set("Bob", "Editor");

  // Retrieve a value by its key
  console.log(userRoles.get("Alice")); // "Admin"

  // Check if a key exists
  console.log(userRoles.has("Bob")); // true

  // Delete a key
  userRoles.delete("Bob");

  // Iterating over the map
  for (const [key, value] of userRoles) {
    console.log(`${key}: ${value}`);
  }
  // Output:
  // Alice: Admin

  // 13. Weak map: The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects, and the values can be arbitrary values. The WeakMap object is similar to the Map object, but with some key differences. The keys in a WeakMap are weakly referenced, meaning that they do not prevent the garbage collector from collecting them if there are no other references to the key. This makes WeakMap useful for scenarios where you want to associate data with objects without preventing those objects from being garbage collected. The WeakMap object is not iterable, so it does not have methods like keys(), values(), or entries(). It is used for private data storage, caching, and memoization.

  // WeakMap - Example:

  const weakMap = new WeakMap();

  const key = { id: 1 };
  const value = "Data associated with the key";

  weakMap.set(key, value);

  console.log(weakMap.get(key)); // "Data associated with the key"

  // 14. Primitive types: In JavaScript, there are six primitive data types: string, number, bigint, boolean, undefined, and symbol. These types are immutable and have corresponding wrapper objects (e.g., String, Number) that provide additional functionality.

  // 14.1 String: Represents a sequence of characters enclosed in single or double quotes. Example:
  const stringPrimitive = "Hello, World!";
  console.log(stringPrimitive); // Hello, World!

  // 14.2 Number: Represents numeric data, including integers and floating-point numbers. Example:
  const numberPrimitive = 42;
  console.log(numberPrimitive); // 42

  // 14.3 BigInt: Represents integers with arbitrary precision. Example:
  const bigIntPrimitive = 1234567890123456789012345678901234567890n;
  console.log(bigIntPrimitive); // 1234567890123456789012345678901234567890n

  // 14.4 Boolean: Represents a logical value, either true or false. Example:
  const booleanPrimitive = true;
  console.log(booleanPrimitive); // true

  // 14.5 Undefined: Represents an undefined value. Example:
  let undefinedPrimitive;
  console.log(undefinedPrimitive); // undefined

  // 14.6 Symbol: Represents a unique and immutable value used as an identifier for object properties. Example:
  const symbolPrimitive = Symbol("description");
  console.log(symbolPrimitive); // Symbol(description)

  // 15. Set: The Set object is a collection of unique values, where each value may occur only once. It is useful for storing and managing unique values, such as removing duplicates from an array or checking for the presence of specific values.

  const uniqueNumbers = new Set([1, 2, 3, 1, 2, 3]);
  console.log(uniqueNumbers); // Set { 1, 2, 3 }

  uniqueNumbers.add(4);
  console.log(uniqueNumbers); // Set { 1, 2, 3, 4 }

  uniqueNumbers.add("1");
  console.log(uniqueNumbers); // Set { 1, 2, 3, 4, '1' }

  // 16. Strict mode: Strict mode is a feature in JavaScript that allows you to place a program or a function in a "strict" operating context. It helps catch common coding errors and makes the code more secure and optimized. Strict mode can be enabled at the global level or within a specific function. It is different than typescript, because typescript is a superset of javascript, and strict mode is a feature of javascript. And typescript has its own strict mode and with strict mode JavaScript didn't have the same features, like typescript, e.g. types.

  // Enable strict mode at the global level
  ("use strict");
  // Example of strict mode behavior:
  // Variables must be declared before being used
  // Assigning a value to an undeclared variable throws an error
  // Deleting a variable or function throws an error
  // Duplicates in object literals or function parameters throw an error
  // The this keyword is undefined in functions not called as methods
  // In strict mode, var can be used to declare variables, but let and const are recommended for block-scoped variables
  // Strict mode can be enabled at the global level by adding the "use strict" directive at the beginning of a script or function. This enables strict mode for the entire script or function and helps catch common coding errors and improve code quality.

  // Enable strict mode within a function
  function strictFunction() {
    "use strict";
    // Strict mode code here
    // Example of strict mode behavior:
    // Variables must be declared before being used
    // Assigning a value to an undeclared variable throws an error
    // Deleting a variable or function throws an error
    // Duplicates in object literals or function parameters throw an error
    // The this keyword is undefined in functions not called as methods
    // Strict mode can also be enabled within a specific function by adding the "use strict" directive at the beginning of the function body. This enables strict mode only within that function and helps catch errors specific to that function.
  }

  // 17. Window: The window object represents the browser window or tab that contains the JavaScript code. It provides access to the browser's properties and methods, such as the document object, location, history, and more. The window object is the global object in client-side JavaScript and is accessible from any part of the code.

  // Window - Accessing window properties
  console.log(window.innerWidth); // Current window width
  console.log(window.innerHeight); // Current window height
  console.log(window.location.href); // Current URL
  console.log(window.navigator.userAgent); // User agent string, e.g., browser information
  console.log(window.document.title); // Document title
  console.log(window.localStorage); // Local storage object
  console.log(window.alert); // Alert function
  console.log(window.confirm); // Confirm function
  console.log(window.prompt); // Prompt function
  console.log(window.history); // Browser history object
  console.log(window.document); // Document object
  console.log(window.document.body); // Body element
  console.log(window.document.documentElement); // Root element, e.g., <html>
  console.log(window.document.getElementById("elementId")); // Get element by ID
  console.log(window.document.querySelector(".elementClass")); // Query selector
  console.log(window.document.querySelectorAll(".elementClass")); // Query selector all
  console.log(window.document.createElement("div")); // Create element
  console.log(window.document.getElementById("elementId").remove()); // Remove element
  console.log(
    (window.document.getElementById("elementId").textContent =
      "New text content")
  ); // Set text content
  console.log(
    (window.document.getElementById("elementId").value = "New value")
  ); // Set value
  console.log(
    (window.document.getElementById("elementId").innerHTML =
      "<strong>New HTML content</strong>")
  ); // Set inner HTML
  console.log(
    window.document
      .getElementById("elementId")
      .insertAdjacentHTML("afterend", "<p>New paragraph</p>")
  ); // Insert adjacent HTML
  console.log(
    window.document.getElementById("elementId").appendChild(childElement)
  ); // Append child
  console.log(
    window.document.getElementById("elementId").removeChild(childElement)
  ); // Remove child
  console.log(
    window.document
      .getElementById("elementId")
      .replaceChild(newChildElement, oldChildElement)
  ); // Replace child
  console.log(window.document.querySelectorAll(".elementsNodeList")); // Query selector all

  // Window - Main features of the window object:
  // Access to browser properties: The window object provides access to various browser properties, such as the current URL, user agent string, and window dimensions.
  // Access to browser methods: The window object provides access to browser methods, such as alert, confirm, and prompt, for displaying messages and interacting with users.
  // Access to the document object: The window object contains the document object, which represents the current HTML document and provides methods for interacting with the DOM.
  // Access to browser history: The window object provides access to the browser's history object, which allows navigation through the browser history.
  // Access to local storage: The window object provides access to the local storage object, which allows data to be stored locally in the browser.

  // 18. This: The this keyword in JavaScript refers to the object that the function is a method of. It allows functions to access and operate on the object's properties and methods. The value of this is determined by how a function is called, and it can vary depending on the context in which the function is executed.

  // This - Example 1: Method context
  const personThisMethodContext = {
    name: "Alice",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  personThisMethodContext.greet(); // Hello, my name is Alice

  // This - Example 2: Function context
  function greetThisFunctionContext() {
    console.log(`Hello, my name is ${this.name}`);
  }

  const personThisFunctionContext = {
    name: "Bob",
    greet: greetThisFunctionContext,
  };

  greetThisFunctionContext(); // Hello, my name is undefined
  personThisFunctionContext.greet(); // Hello, my name is Bob

  // When use it in arrow functions this refers to the parent object:

  const personThisArrowFunctionContext = {
      name: "Charlie",
      greet: () => {
        console.log(`Hello, my name is ${this.name}`);
      },

      greet2: function () {
        console.log(`Hello, my name is ${this.name}`);
      }
    };

    personThisArrowFunctionContext.greet(); // Hello, my name is undefined. In this case this refers to the parent object of the arrow function, which is the global object (window in browsers).

  // This - Example 3: Constructor context
  function PersonThisConstructorContext(name) {
    this.name = name;
    this.greet = function () {
      console.log(`Hello, my name is ${this.name}`);
    };
  }

  // This - Example 3: Constructor context - Create a new instance of Person
  const aliceConstructorContext = new PersonThisConstructorContext("Alice");
  aliceConstructorContext.greet(); // Hello, my name is Alice

  // This - Example 4: Event handler context
  const buttonThisEventHandlerContext = document.getElementById("button");
  buttonThisEventHandlerContext.addEventListener("click", function () {
    console.log(`Button clicked by ${this.id}`); // In event handlers, this refers to the element that triggered the event. In this case, this refers to the button element that was clicked.

  // This - Example 5: Using it alone: When used alone, this refers to the global object (window in browsers, global in Node.js). In strict mode, this will be undefined when used alone in a function.
  function logThis() {
    console.log(this);
  }
  });

  // 19. typeof operator: The typeof operator in JavaScript returns the data type of a variable or expression. It is useful for checking the type of a value and handling different data types appropriately.

  // typeof - Example 1: Checking data types
  console.log(typeof "Shalom"); // string
  console.log(typeof 38); // number
  console.log(typeof true); // boolean
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
  console.log(typeof Symbol("תֵאוּר")); // symbol
  console.log(typeof { name: "David" }); // object
  console.log(typeof [3, 5, 8]); // object
  console.log(typeof function () {}); // function

  // typeof - Example 2: Handling different data types
  function greetTypeof(name) {
    if (typeof name === "string") {
      console.log(`Hello, ${name}!`);
    } else {
      console.log("Please provide a valid name.");
    }
  }
  greetTypeof("Alice"); // Hello, Alice!
  greetTypeof(38); // Please provide a valid name.

  // typeof - Example 3: Checking for null
  const valueNull = null;
  if (valueNull === null) {
    console.log("Value is null");
  } else {
    console.log("Value is not null");
  }

  // typeof - Example 4: Checking for undefined
  let valueUndefined;
  if (typeof valueUndefined === "undefined") {
    console.log("Value is undefined");
  } else {
    console.log("Value is defined");
  }

  // typeof - Example 5: Checking for functions
  function sayHelloTypeof() {
    console.log("Hello, World!");
  }

  if (typeof sayHelloTypeof === "function") {
    console.log("sayHello is a function");
  } else {
    console.log("sayHello is not a function");
  }

  // typeof - Example 6: Checking for objects
  const personTypeof = { name: "Alice" };
  if (typeof personTypeof === "object") {
    console.log("person is an object");
  }

  // typeof - Example 7: Checking for arrays
  const numbersTypeof = [1, 2, 3];
  if (Array.isArray(numbersTypeof)) {
    console.log("numbers is an array");
  }

  // typeof - Example 8: Checking for numbers
  const ageTypeof = 25;
  if (typeof ageTypeof === "number") {
    console.log("age is a number");
  }

  // typeof - Example 9: Checking for strings
  const messageTypeof = "Hello, World!";
  if (typeof messageTypeof === "string") {
    console.log("message is a string");
  }

  // typeof - Example 10: Checking for booleans
  const isActiveTypeof = true;
  if (typeof isActiveTypeof === "boolean") {
    console.log("isActive is a boolean");
  }

  // typeof - Example 11: Checking for symbols
  const idTypeof = Symbol("id");
  if (typeof idTypeof === "symbol") {
    console.log("id is a symbol");
  }

  // typeof - Example 12: Checking for BigInt
  const bigNumberTypeof = 1234567890123456789012345678901234567890n;
  if (typeof bigNumberTypeof === "bigint") {
    console.log("bigNumber is a bigint");
  }

  // 20. Bitwise operators: Bitwise operators in JavaScript are used to perform bitwise operations on binary representations of numbers. They work at the bit level and are used to manipulate and extract specific bits from numbers. Bitwise operators are rarely used in everyday programming but can be useful for low-level operations and optimizations. Bitwise operators treat arguments as 32-bits (zeros & ones) and work on the level of their binary representation. Ex. Decimal number 9 has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

  // Bitwise operators in JavaScript are as follows:
  // & (AND)
  // | (OR)
  // ^ (XOR)
  // ~ (NOT)
  // << (Left SHIFT)
  // >> (Right SHIFT)
  // >>> (Zero-Fill Right SHIFT)

  // Bitwise operators - Example 1: Bitwise AND (&)
  const aBitwiseAND = 5; // 101
  const bBitwiseAND = 3; // 011
  console.log(aBitwiseAND & bBitwiseAND); // 1 (001)

  // Bitwise operators - Example 2: Bitwise OR (|)
  const aBitwiseOR = 5; // 101
  const bBitwiseOR = 3; // 011
  console.log(aBitwiseOR | bBitwiseOR); // 7 (111)

  // Bitwise operators - Example 3: Bitwise XOR (^)
  const aBitwiseXOR = 5; // 101
  const bBitwiseXOR = 3; // 011
  console.log(aBitwiseXOR ^ bBitwiseXOR); // 6 (110)

  // Bitwise operators - Example 4: Bitwise NOT (~)
  const aBitwiseNOT = 5; // 101
  console.log(~aBitwiseNOT); // -6 (-110)

  // Bitwise operators - Example 5: Left SHIFT (<<)
  const aLeftSHIFT = 5; // 101
  console.log(aLeftSHIFT << 1); // 10 (1010)

  // Bitwise operators - Example 6: Right SHIFT (>>)
  const aRightSHIFT = 5; // 101
  console.log(aRightSHIFT >> 1); // 2 (10)

  // Bitwise operators - Example 7: Zero-Fill Right SHIFT (>>>)
  const aZeroFillRightSHIFT = -5; // -101
  console.log(aZeroFillRightSHIFT >>> 1); // 2147483645 (01111111111111111111111111111011)
}

/* 6. Modules */

{
  // 0. As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose. Modules encapsulate all sorts of code like functions and variables and expose all this to other files. Generally, we use it to break our code into separate files to make it more maintainable. They were introduced into JavaScript with ECMAScript 6. There are two types of modules in JavaScript: ES Modules and CommonJS modules. ES Modules are the standard for working with modules in JavaScript and are supported in modern browsers and Node.js. CommonJS modules are used in Node.js and provide a way to organize code into separate files. Modules can be imported and exported using the import and export keywords.

// A module is just a file. One script is one module. As simple as that.

// Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

// export: keyword labels variables and functions that should be accessible from outside the current module.
// import: allows the import of functionality from other modules.

// For instance, if we have a file sayHi.js exporting a function:

// 📁 sayHi.js
// export function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }


// Then we can import it in another file:
// 📁 main.js
// import {sayHi} from './sayHi.js';

// alert(sayHi); // function...
// sayHi('John'); // Hello, John!s
  
  // 1. ES Modules: ES Modules (ECMAScript Modules) are a standard for working with modules in JavaScript. They provide a way to organize and structure code by splitting it into separate files, each containing a module. ES Modules use the import and export keywords to define dependencies between modules and share code between them.
  // ES Modules - Examples:
  // ES Modules - Exporting a module
  // math.js
  // export const sum = (a, b) => a + b;
  // export const subtract = (a, b) => a - b;
  // ES Modules - Importing a module
  // import { sum, subtract } from './math.js';
  // console.log(sum(5, 3)); // 8
  // console.log(subtract(5, 3)); // 2
  // ES Modules - Exporting default: In addition to named exports, ES Modules also support default exports. A default export is a single value or function that is exported as the default export of a module. When importing a module with a default export, you can choose any name for the imported value.
  // math.js
  // const sum = (a, b) => a + b;
  // const subtract = (a, b) => a - b;
  // export default { sum, subtract };
  // ES Modules - Importing a default export
  // import math from './math.js';
  // console.log(math.sum(5, 3)); // 8
  // console.log(math.subtract(5, 3)); // 2
  // ES Modules - Dynamic imports: Dynamic imports allow you to import modules asynchronously at runtime, rather than statically at compile time. This can be useful for loading modules conditionally or on-demand, reducing the initial load time of an application.
  // const module = await import('./math.js');
  // console.log(module.sum(5, 3)); // 8
  // console.log(module.subtract(5, 3)); // 2
  // 2. Importing from libraries: ES Modules can also be used to import code from external libraries and modules. Many libraries and frameworks provide ES Modules for easy integration into JavaScript projects.
  // Importing from libraries - Importing a library module
  // import { sum, subtract } from 'library-module';
  // console.log(sum(5, 3)); // 8
  // Importing from libraries - Importing a library default export
  // import library from 'library-module';
  // console.log(library.sum(5, 3)); // 8
  // Importing from libraries - Importing a library dynamically
  // const module = await import('library-module');
  // console.log(module.sum(5, 3)); // 8
  // 3. Module bundlers (empaquetador): Module bundlers are tools that combine multiple modules and dependencies into a single file or bundle. They help manage dependencies, optimize code, and improve performance by reducing the number of HTTP requests needed to load a web application.
  // Module bundlers (empaquetador) - Examples of module bundlers:
  // Webpack: A popular module bundler that supports ES Modules, CommonJS, and AMD modules. It can bundle JavaScript, CSS, and other assets, and provides features like code splitting, hot module replacement, and tree shaking.
  // Rollup: A module bundler designed for building JavaScript libraries and packages. It focuses on tree shaking and generates smaller, more optimized bundles compared to other bundlers.
  // Parcel: A zero-configuration module bundler that supports ES Modules, CommonJS, and other module formats. It automatically handles dependencies, code splitting, and optimizations, making it easy to get started with bundling.
  // Vite: A modern build tool that leverages ES Modules and native browser features for fast development and optimized production builds. It provides instant server start, hot module replacement, and optimized bundling for modern web applications.
  // Module bundlers - Tree shaking: Tree shaking is a technique used by module bundlers to eliminate dead code or unused code from the final bundle. It works by analyzing the code and dependencies of a module to determine which parts are not used and can be safely removed. Tree shaking helps reduce the size of the bundle and improve performance by removing unnecessary code.
  // 4. Namespace import: In ES Modules, you can import an entire module as a namespace object using the * as syntax. This allows you to access all the exports of the module through the namespace object.
  // Namespace import - Example:
  // math.js
  // export const sum = (a, b) => a + b;
  // export const subtract = (a, b) => a - b;
  // Importing the entire module as a namespace object. This allows you to access all the exports of the module through the math namespace object.
  // import * as math from './math.js';
  // console.log(math.sum(5, 3)); // 8
  // console.log(math.subtract(5, 3)); // 2
  // 5. Package managers: Package managers are tools that help manage dependencies and packages in a project. They automate the process of installing, updating, and removing packages, making it easier to work with external libraries and modules.
  // Package managers - Examples of package managers:
  // npm (Node Package Manager): A popular package manager for JavaScript that is used to install, manage, and publish packages. It is commonly used for Node.js projects and front-end development.
  // Yarn: A fast and secure package manager for JavaScript that is compatible with npm. It provides features like offline installation, deterministic dependency resolution, and parallel package downloads.
  // Package managers - Common commands:
  // npm install package-name: Installs a package locally in the project.
  // npm install -g package-name: Installs a package globally on the system.
  // npm install --save package-name: Installs a package and adds it to the dependencies in package.json.
  // npm install --save-dev package-name: Installs a package and adds it to the devDependencies in package.json.
  // npm update package-name: Updates a package to the latest version.
  // npm uninstall package-name: Uninstalls a package from the project.
  // npm list: Lists all installed packages in the project.
  // npm search package-name: Searches for a package in the npm registry.
  // npm init: Initializes a new project and creates a package.json file.
  // npm run script-name: Runs a script defined in the package.json file.
  // 6.package.json: The package.json file is a metadata file for Node.js projects that contains information about the project, its dependencies, and scripts. It is used by package managers like npm and Yarn to manage project dependencies and scripts.
  // package.json - Example:
  // {
  //   "name": "my-project",
  //   "version": "1.0.0",
  //   "description": "A sample Node.js project",
  //   "main": "index.js",
  //   "scripts": {
  //     "start": "node index.js",
  //     "test": "jest"
  //   },
  //   "dependencies": {
  //     "express": "^4.17.1",
  //     "lodash": "^4.17.21"
  //   },
  //   "devDependencies": {
  //     "jest": "^27.0.6"
  //   }
  // }
  // package.json - Main properties:
  // name: The name of the project.
  // version: The version number of the project.
  // description: A brief description of the project.
  // main: The entry point of the project.
  // scripts: Custom scripts that can be run using npm or Yarn.
  // dependencies: Production dependencies required for the project.
  // devDependencies: Development dependencies required for testing and development.
  // engines: Specifies the versions of Node.js and npm required by the project.
  // license: The license under which the project is distributed.
  // 7. script type="module": In HTML, you can use the script type="module" attribute to indicate that a script is an ES Module. This allows you to use ES Modules directly in the browser without the need for a module bundler. The script type="module" attribute is supported in modern browsers and provides a way to load and execute ES Modules in a web page. In the package.json file, you can specify the type of module using the "type" field.
  // script type="module" - Example:
  // <script type="module" src="main.js"></script>
  // In this example, the script tag loads the main.js file as an ES Module in the browser. The type="module" attribute indicates that the script is an ES Module and should be treated as such by the browser.
  // package.json - Specify module type:
  // {
  //   "type": "module"
  // }
  // 8. Yarn: Yarn is a fast, reliable, and secure package manager for JavaScript. It is compatible with npm and provides additional features like offline installation, deterministic dependency resolution, and parallel package downloads. Yarn is commonly used for managing dependencies in Node.js projects and front-end development. Yarn can be installed using npm or by downloading the Yarn installer from the official website. The main difference between npm and Yarn is that Yarn uses a lockfile (yarn.lock) to ensure deterministic installs, while npm uses a package-lock.json file. At the end both are package managers for JavaScript, and they have their own features and differences, but the choice of which one to use depends on the project requirements and personal preference.

  // CommonJS modules: CommonJS modules are a module format used in Node.js for organizing and structuring code. They use the require() function to import modules and the module.exports object to export values. CommonJS modules are synchronous and are loaded and executed at runtime. CommonJS modules are used in Node.js and provide a way to organize code into separate files and modules. They use the require() function to import modules and the module.exports object to export values. CommonJS modules are synchronous and are loaded and executed

  // CommonJS modules - Example:

  // math.js
  // const sum = (a, b) => a + b;
  // const subtract = (a, b) => a - b;
  // module.exports = { sum, subtract };

  // CommonJS modules - Importing a module
  // const math = require('./math.js');
  // console.log(math.sum(5, 3)); // 8
  // console.log(math.subtract(5, 3)); // 2

}

/* 7. Number */

{
  // 1. .toString(): The .toString() method in JavaScript converts a number to a string. It takes an optional parameter that specifies the base of the number system to use for the conversion. By default, .toString() converts the number to a base-10 string.

  const numberToString = 38;
  console.log(numberToString.toString()); // "38"

  // it is useful on this cases:
  // Converting numbers to strings for display or output
  // Formatting numbers for specific use cases
  // Working with numbers in string format

  // 2. Division reminder (%): The division reminder operator (%) in JavaScript returns the remainder of a division operation. It is useful for checking if a number is divisible by another number or for extracting the last digit of a number.

  const numberDivisionReminder = 17;
  console.log(numberDivisionReminder % 5); // 2

  // Real cases of use:

  // Checking if a number is even or odd

  const numberEven = 10;
  const numberOdd = 15;

  console.log(numberEven % 2 === 0); // true
  console.log(numberOdd % 2 === 0); // false

  function isEven(number) {
    return number % 2 === 0;
  }

  console.log(isEven(10)); // true

  // 3. NaN: NaN (Not-a-Number) is a special value in JavaScript that represents an invalid number. It is returned when a mathematical operation cannot produce a valid result, such as dividing by zero or performing arithmetic with non-numeric values.

  const resultNaN = 0 / 0;
  console.log(resultNaN); // NaN

  // Real cases of use:

  // Checking for invalid or missing values

  const numbersNaN = [10, 20, NaN, 30];

  function calculateAverage(numbers) {
    const filteredNumbers = numbers.filter((num) => !isNaN(num));
    if (filteredNumbers.length === 0) return 0; // Handle case with no valid numbers

    const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
    return sum / filteredNumbers.length;
  }

  console.log(calculateAverage(numbersNaN)); // 20

  // 4. Number.parseInt(): The Number.parseInt() method in JavaScript parses a string and returns an integer. It is similar to the global parseInt() function, but it is a static method of the Number object. Number.parseInt() is useful for converting strings to integers in a more explicit and predictable way.

  const stringParseInt = "38";
  console.log(Number.parseInt(stringParseInt)); // 38

  // Real cases of use - Parsing User Input in Forms:
  const ageInput = "25"; // User input from a form
  const age = Number.parseInt(ageInput);
  if (age >= 18) {
    console.log("User is an adult.");
  }

  // Real cases of use - Extracting Numbers from URL Parameters:
  const url = "https://example.com/product?id=38";
  const params = new URLSearchParams(url.split("?")[1]);
  const productId = Number.parseInt(params.get("id"));
  console.log(productId); // 38

  // Real cases of use - Parsing CSS Values for Calculations:

  const margin = "15px";
  const marginValue = Number.parseInt(margin);
  console.log(marginValue + 5); // 20

  // Real cases of use - Working with Data from External APIs:
  const apiResponse = { score: "89" }; // API returns score as a string
  const score = Number.parseInt(apiResponse.score);
  console.log(score + 1); // 90

  // Real cases of use - Converting String-Based Measurements in Calculations:
  const discount = "15%";
  const discountValue = Number.parseInt(discount);
  const total = 100;
  const discountedTotal = total - (total * discountValue) / 100;
  console.log(discountedTotal); // 85

  // 5. Numeric separators (_): Numeric separators are a feature in JavaScript that allows you to use underscores (_) as separators in numeric literals. They improve readability by breaking down large numbers into smaller, more manageable parts. Numeric separators make these numbers clearer to developers, reducing errors when reading, verifying, or editing code.

  const largeNumber = 1_000_000;
  console.log(largeNumber); // 1000000

  // Real cases of use - Representing Large Financial Values:
  const annualBudget = 12_000_000; // Easier to read as 12 million
  const transactionAmount = 5_000_000; // 5 million
  console.log(annualBudget + transactionAmount); // 17000000

  // Real cases of use - Setting Time or Date Constants in Milliseconds:
  const oneDayInMs = 86_400_000; // 24 * 60 * 60 * 1000 (milliseconds in a day)
  const fiveMinutesInMs = 300_000; // 5 * 60 * 1000 (milliseconds in five minutes)
  console.log(oneDayInMs); // 86400000
  console.log(fiveMinutesInMs); // 300000

  // Real cases of use - Representing Large Numbers in Scientific Notation:
  const speedOfLight = 299_792_458; // Speed of light in meters per second
  const earthToSunDistance = 149_597_870_700; // Approximate distance in meters
  console.log(speedOfLight); // 299792458
  console.log(earthToSunDistance); // 149597870700

  // Real cases of use - Representing Bitmasks in Readable Chunks:
  const filePermissions = 0b1111_1111_0000; // Binary representation with underscores for clarity
  console.log(filePermissions); // 4080

  // Real cases of use - Setting File Sizes and Data Limits:
  const maxFileSize = 1_073_741_824; // 1 GB in bytes
  const memoryLimit = 4_294_967_296; // 4 GB in bytes
  console.log(maxFileSize); // 1073741824
  console.log(memoryLimit); // 4294967296

  // Real case of use - Internationalization and Currency Conversion Rates:
  const usdToInrRate = 74_325; // Representing rate in paise for INR
  const largeTransactionUSD = 1_000_000; // $1 million USD
  const largeTransactionINR = largeTransactionUSD * usdToInrRate;
  console.log(largeTransactionINR); // 74325000000

  // The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the Number() function. In this example: 255 and 255.0 are equivalent, as JavaScript treats both as the same number. 0xff represents 255 in hexadecimal notation. 0b11111111 represents 255 in binary notation. 0.255e3 is 255 in exponential notation. All these different representations are equal to 255 in JavaScript.

  let num1 = 255; // integer
  let num2 = 255.0; // floating-point number with no fractional part
  let num3 = 0xff; // hexadecimal notation
  let num4 = 0b11111111; // binary notation
  let num5 = 0.255e3; // exponential notation

  console.log(num1 === num2); // true
  console.log(num1 === num3); // true
  console.log(num1 === num4); // true
  console.log(num1 === num5); // true
}

/* 8. Objects */

{
  // 1. ... (spread operator): The spread operator (...) in JavaScript is used to expand an iterable (e.g., an array) into individual elements. It allows you to copy and merge arrays, objects, and other iterables easily. The spread operator is commonly used for creating shallow copies of arrays and objects, combining multiple arrays, and passing multiple arguments to functions.

  // Spread operator - Examples:

  // Spread operator - Copying an array

  const numbersSpread = [1, 2, 3];
  const copyNumbers = [...numbersSpread];
  console.log(copyNumbers); // [1, 2, 3]

  // Spread operator - Merging arrays

  const numbers1 = [1, 2];
  const numbers2 = [3, 4];
  const mergedNumbers = [...numbers1, ...numbers2];
  console.log(mergedNumbers); // [1, 2, 3, 4]

  // Spread operator - Copying an object

  const personSpread = { name: "Alice", age: 30 };
  const copyPerson = { ...personSpread };
  console.log(copyPerson); // { name: "Alice", age: 30 }

  // Spread operator - Merging objects

  const person1 = { name: "Alice" };
  const person2 = { age: 30 };
  const mergedPerson = { ...person1, ...person2 };
  console.log(mergedPerson); // { name: "Alice", age: 30 }

  // Spread operator - Passing multiple arguments to a function

  function sum(a, b, c) {
    return a + b + c;
  }

  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // 6

  // 2. ?. (optional chaining): The optional chaining operator (?.) in JavaScript allows you to safely access nested properties of an object without causing an error if a property is null or undefined. It provides a concise way to handle optional properties and avoid "TypeError: Cannot read property 'x' of undefined" errors.

  // Optional chaining - Examples:

  // Optional chaining - Accessing nested properties

  const personOptionalChaining = {
    name: "Alice",
    address: { city: "New York" },
  };
  console.log(personOptionalChaining.address?.city); // "New York"

  // Optional chaining - Handling missing properties

  const personMissing = { name: "Alice" };
  console.log(personMissing.address?.city); // undefined

  // Optional chaining - Calling methods on optional properties

  const personMethod = {
    name: "Alice",
    greet() {
      return `Hello, ${this.name}!`;
    },
  };
  console.log(personMethod.greet?.()); // "Hello, Alice!"

  // Optional chaining - Accessing array elements

  const numbersOptionalChaining = [1, 2, 3];
  console.log(numbersOptionalChaining[2]); // 3
  console.log(numbersOptionalChaining?.[5]); // undefined
  console.log(numbersOptionalChaining[5]); // undefined  This does not use optional chaining, so it assumes numbersOptionalChaining is a defined object or array. If numbersOptionalChaining is null or undefined, trying to access [5] would throw a TypeError.

  // 3. ?? (nullish coalescing): The nullish coalescing operator (??) in JavaScript provides a way to handle default values for null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, but not for other falsy values like 0 or an empty string.

  // Nullish coalescing - Examples:

  // Nullish coalescing - Handling default values

  const nameNullishExample = null;
  const defaultNameNullishExample = "Guest";
  console.log(nameNullishExample ?? defaultNameNullishExample); // "Guest"

  // Nullish coalescing - Handling missing properties

  const personNullishExample = { name: "Alice", age: null };
  const ageNullishExample = personNullishExample.age ?? 30;
  console.log(ageNullishExample); // 30

  // 4. Advanced control flow: Advanced control flow in JavaScript refers to using conditional statements, loops, and other control structures to create complex logic and decision-making in code. It involves combining multiple conditions, handling errors, and controlling the flow of execution based on different scenarios. JavaScript supports various control flow statements like if…else, switch, for, and while to manage the execution flow of code.

  // Advanced control flow - Real life code examples:

  // Advanced control flow - Handling user authentication and authorization in web applications:

  function authenticateUser(user) {
    if (user && user.isAuthenticated) {
      return "User is authenticated";
    } else {
      return "User is not authenticated";
    }
  }

  // Advanced control flow - Handling form validation and error messages in user interfaces:

  function validateForm(formData) {
    if (!formData.email) {
      return "Email is required";
    } else if (!formData.password) {
      return "Password is required";
    } else {
      return "Form is valid";
    }
  }

  // Advanced control flow - Implementing search and filtering functionality in web applications:

  function filterProducts(products, query) {
    if (!query) {
      return products;
    }
    return products.filter((product) => product.name.includes(query));
  }

  // Advanced control flow - Implementing complex business logic and rules in applications:

  function calculateDiscount(order) {
    if (order.total >= 100) {
      return order.total * 0.1;
    } else if (order.total >= 50) {
      return order.total * 0.05;
    } else {
      return 0;
    }
  }

  // Advanced control flow - Handling asynchronous operations and error handling in JavaScript:

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // 5. Object.entries(): The Object.entries() method in JavaScript returns an array of key-value pairs from an object. It provides an easy way to iterate over the properties of an object and access both the keys and values. Object.entries() returns an array where each element is an array containing a key-value pair.

  // Object.entries - Example:

  const personEntries = { name: "Alice", age: 30 };

  for (const [key, value] of Object.entries(personEntries)) {
    console.log(`${key}: ${value}`);
  }

  // Output:
  // name: Alice
  // age: 30

  // Real cases of use:

  // Object.entries - Iterating over object properties:

  const personProperties = { name: "Alice", age: 30, city: "New York" };

  for (const [key, value] of Object.entries(personProperties)) {
    console.log(`${key}: ${value}`);
  }

  // Object.entries - Converting object properties to an array:

  const personArray = Object.entries(personProperties);
  console.log(personArray); // [["name", "Alice"], ["age", 30], ["city", "New York"]]

  // Object.entries - Filtering object properties based on conditions:

  const personFiltered = Object.entries(personProperties).filter(
    ([key, value]) => key !== "age"
  );
  console.log(personFiltered); // [["name", "Alice"], ["city", "New York"]]

  // 6. Object.keys(): The Object.keys() method in JavaScript returns an array of the keys of an object. It provides a way to access the keys of an object and iterate over them. Object.keys() returns an array of strings where each element is a key of the object. The difference between Object.keys() and Object.entries() is that Object.keys() returns only the keys, while Object.entries() returns both the keys and values.

  // Object.keys - Example:

  const personKeys = { name: "Alice", age: 30 };

  for (const key of Object.keys(personKeys)) {
    console.log(key);
  }

  // Output:
  // name
  // age

  // Real cases of use:

  // Object.keys - Iterating over object keys:

  const personKeysIterate = { name: "Alice", age: 30, city: "New York" };

  for (const key of Object.keys(personKeysIterate)) {
    console.log(key);
  }

  // Object.keys - Checking for the presence of specific keys:

  const hasAgeKey = Object.keys(personKeysIterate).includes("age");

  console.log(hasAgeKey); // true

  // 7. Object.values(): The Object.values() method in JavaScript returns an array of the values of an object. It provides a way to access the values of an object and iterate over them. Object.values() returns an array where each element is a value of the object. The difference between Object.values() and Object.entries() is that Object.values() returns only the values, while Object.entries() returns both the keys and values.

  // Object.values - Example:

  const personValues = { name: "Alice", age: 30 };

  for (const value of Object.values(personValues)) {
    console.log(value);
  }

  // Output:
  // Alice
  // 30

  // 8. Destructuring: Destructuring in JavaScript is a way to extract values from arrays and objects and assign them to variables. It provides a concise syntax for accessing and unpacking values from complex data structures. Destructuring can be used with arrays, objects, and function parameters to simplify code and improve readability.

  // Destructuring - Examples:

  // Destructuring - Destructuring an array

  const numbersDestructuring = [1, 2, 3];

  const [first, second, third] = numbersDestructuring;
  console.log(first); // 1
  console.log(second); // 2
  console.log(third); // 3

  // Destructuring - Destructuring an object

  const personDestructuring = { name: "Alice", age: 30 };

  const { name, age } = personDestructuring;
  console.log(name); // "Alice"
  console.log(age); // 30

  // 9. Dynamic properties: Dynamic properties in JavaScript refer to object properties whose names are determined at runtime. They allow you to access and modify object properties using variables or expressions. Dynamic properties are useful for working with objects whose properties are not known in advance or are generated dynamically.

  // Dynamic properties - Examples:

  // Dynamic properties - Accessing object properties using variables

  const personDynamic = { name: "Alice", age: 30 };

  const propertyName = "name";
  console.log(personDynamic[propertyName]); // "Alice"

  // Dynamic properties - Setting object properties using variables

  const personDynamicSet = {};

  const key = "name";
  const value = "Alice";

  personDynamicSet[key] = value;

  console.log(personDynamicSet); // { name: "Alice" }

  // Dynamic properties - Computed property names

  const keyName = "name";
  const personComputed = { [keyName]: "Alice" };

  console.log(personComputed.name); // "Alice"

  // Real cases of use:

  // Dynamic properties - Handling form data in web applications:

  const formData = new FormData(formElement);

  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Dynamic properties - Working with API responses and data transformations:

  const apiResponse = { "user.name": "Alice", "user.age": 30 };

  const transformedData = {};

  for (const key in apiResponse) {
    const newKey = key.split(".")[1];
    transformedData[newKey] = apiResponse[key];
  }

  // Dynamic properties - Generating dynamic CSS styles in web applications:

  const styles = {};
  styles["color"] = "red";

  const fontSize = "16px";
  styles["font-size"] = fontSize;

  // 10. in (operator): The in operator in JavaScript is used to check if a property exists in an object. It returns true if the property is present in the object, either directly on the object or in its prototype chain. The in operator is useful for checking the existence of properties and avoiding errors when accessing object properties.

  // in - Examples:

  // in - Checking if a property exists in an object

  const personIn = { name: "Alice", age: 30 };

  console.log("name" in personIn); // true

  // in - Checking if a property exists in an object's prototype chain

  const personPrototype = { name: "Alice" };

  console.log("name" in personPrototype); // true

  // Real cases of use:

  // in - Checking for required properties in form data:

  const formDataRequired = { name: "Alice", email: "email" };

  if ("name" in formDataRequired && "email" in formDataRequired) {
    console.log("Form data is valid");
  } else {
    console.log("Form data is incomplete");
  }

  // in - Handling optional properties in object transformations:

  const personOptional = { name: "Alice", age: 30 };

  const transformedPerson = {};

  if ("name" in personOptional) {
    transformedPerson.name = personOptional.name;
  }

  if ("age" in personOptional) {
    transformedPerson.age = personOptional.age;
  }

  // in - Checking for specific properties in API responses:

  const apiResponseIn = { name: "Alice", age: 30 };

  if ("name" in apiResponseIn) {
    console.log("Name is present in the API response");
  } else {
    console.log("Name is missing in the API response");
  }

  // 11. Object shorthand: Object shorthand in JavaScript is a concise way to create objects by using variable names as property names. It allows you to define object properties with the same name as the variables used to assign their values. Object shorthand is useful for reducing redundancy and improving code readability when creating objects.

  // Object shorthand - Examples:

  // Object shorthand - Creating an object with variable properties

  const nameShortHand = "Alice";
  const ageShortHand = 30;

  const personShorthand = { nameShortHand, ageShortHand };
  console.log(personShorthand); // { nameShortHand: "Alice", ageShortHand: 30 }

  // Real cases of use:

  // Object shorthand - Simplifying object creation with variable properties:

  const firstName = "Alice";
  const lastName = "Smith";

  const user = { firstName, lastName };
  console.log(user); // { firstName: "Alice", lastName: "Smith" }

  // 12. Property access: Property access in JavaScript refers to accessing and modifying object properties using dot notation (.) or bracket notation ([]). It allows you to read, write, and delete object properties dynamically based on their names. Property access is a fundamental concept in JavaScript and is used extensively when working with objects.

  // Property access - Examples:

  // Property access - Accessing object properties using dot notation

  const personAccess = { name: "Alice", age: 30 };
  console.log(personAccess.name); // "Alice"

  // Property access - Accessing object properties using bracket notation

  const propertyNameAccess = "name";
  console.log(personAccess[propertyNameAccess]); // "Alice"

  // Real cases of use:

  // Property access - Reading object properties dynamically:

  const personDynamicAccess = { name: "Alice", age: 30 };

  const property = "name";
  console.log(personDynamicAccess[property]); // "Alice"

  // Property access - Writing object properties dynamically:

  const personDynamicWrite = {};

  const keyAccess = "name";
  const valueAccess = "Alice";

  personDynamicWrite[keyAccess] = valueAccess;

  console.log(personDynamicWrite); // { name: "Alice" }

  // 13. Set: The Set object in JavaScript is a collection of unique values. It is similar to an array, but with some key differences. Sets are used to store distinct values of any type, whether primitive values or object references. The Set object provides methods for adding, removing, and checking the presence of elements in the set. Sets are commonly used in algorithms and data structures to store unique values and perform set operations.

  // Set - Examples:

  // Set - Creating a new set

  const colorsSet = new Set();

  // Adding elements to the set

  colorsSet.add("red");
  colorsSet.add("green");
  colorsSet.add("blue");

  console.log(colorsSet); // Set { "red", "green", "blue" }

  // Checking the size of the set

  console.log(colorsSet.size); // 3

  // Checking if an element is in the set

  console.log(colorsSet.has("red")); // true

  // Removing an element from the set

  colorsSet.delete("green");

  console.log(colorsSet); // Set { "red", "blue" }

  // Real cases of use:

  // Set - Removing duplicate values from an array:

  const numbersSet = [1, 2, 3, 1, 2, 3, 4, 5];

  const uniqueNumbers = new Set(numbersSet);

  console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]

  // Set - Checking for unique values in user input:

  const userInput = ["red", "green", "blue", "red", "yellow"];

  const uniqueInput = new Set(userInput);

  console.log([...uniqueInput]); // ["red", "green", "blue", "yellow"]

  // Set - Performing set operations like union, intersection, and difference:

  const setA = new Set([1, 2, 3]);
  const setB = new Set([2, 3, 4]);

  // Union

  const unionSet = new Set([...setA, ...setB]);

  console.log([...unionSet]); // [1, 2, 3, 4]

  // 14. WeakSet: The WeakSet object in JavaScript is a collection of weakly held objects. It is similar to a Set, but with some key differences. WeakSets are used to store weakly held object references, meaning that the garbage collector can remove objects from the set if they are no longer used elsewhere in the program. WeakSets are commonly used to store private or internal object references that should not prevent objects from being garbage collected.

  // WeakSet - Examples:

  // WeakSet - Creating a new weak set

  const usersWeakSet = new WeakSet();

  // Adding objects to the weak set

  const user1 = { name: "Alice" };
  const user2 = { name: "Bob" };

  usersWeakSet.add(user1);
  usersWeakSet.add(user2);

  // Checking if an object is in the weak set

  console.log(usersWeakSet.has(user1)); // true

  // Removing an object from the weak set

  usersWeakSet.delete(user2);

  console.log(usersWeakSet.has(user2)); // false

  // Real cases of use:

  // WeakSet - Storing private object references in classes:

  class PrivateData {
    #users = new WeakSet();

    addUser(user) {
      this.#users.add(user);
    }

    hasUser(user) {
      return this.#users.has(user);
    }

    removeUser(user) {
      this.#users.delete(user);
    }
  }

  const dataSet = new PrivateData();

  const userA = { name: "Alice" };
  const userB = { name: "Bob" };

  dataSet.addUser(userA);
  dataSet.addUser(userB);

  console.log(dataSet.hasUser(userA)); // true

  // WeakSet - Storing internal object references in modules:

  const internalData = new WeakSet();

  function storeData(data) {
    internalData.add(data);
  }

  function hasData(data) {
    return internalData.has(data);
  }

  function removeData(data) {
    internalData.delete(data);
  }

  // WeakSet - Storing temporary object references in functions:

  function processUserData(userData) {
    const temporaryData = new WeakSet();

    temporaryData.add(userData);

    // Perform operations on temporaryData

    temporaryData.delete(userData);
  }

  // 15. Object.is(): The Object.is() method in JavaScript is used to compare two values for strict equality. It returns true if the values are the same, taking into account edge cases like NaN and -0. Object.is() is similar to the strict equality operator (===), but with some key differences. It provides a more accurate comparison for certain values and edge cases.

  // Object.is - Examples:

  console.log(Object.is(1, 1)); // true
  console.log(Object.is(NaN, NaN)); // true
  console.log(Object.is(0, -0)); // false

  // 16. Error objects: Error objects in JavaScript are used to represent and handle errors in code. They provide information about the type of error, the error message, and the stack trace of the error. Error objects are commonly used for error handling, debugging, and logging in JavaScript applications. When a runtime error occurs, a new Error object is created and thrown. With this Error object, we can determine the type of the Error and handle it according to its type. Besides error constructors, Javascript also has other core Error constructors. Like:

  // 16.1 AggregateError - A collection of errors thrown simultaneously. For example
  const errors = [new Error("Error 1"), new Error("Error 2")];

  console.log(new AggregateError(errors)); // AggregateError: Error 1, Error 2

  // 16.2 EvalError - An error regarding the global eval() function. EvalError occurred during the evaluation of a JavaScript expression. For example:

  try {
    throw new EvalError("Error in eval() function");
  } catch (error) {
    console.er;

    // 16.3 InternalError - An internal JavaScript error, often indicating a bug in the engine. Internal error are useful to get information about the internal state of the JavaScript engine. For example:

    try {
      throw new InternalError("Internal error occurred");
    } catch (error) {
      console.error(error); // InternalError: Internal error occurred
    }

    // 16.4 RangeError - A number "out of range" has occurred. For example:

    try {
      throw new RangeError("Number out of range");
    } catch (error) {
      console.error(error); // RangeError: Number out of range
    }
  }
}

/* 9. Promises */

{
  // 0. Asynchronous programming: Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

  // 0.1 Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example:

  // Making HTTP requests using fetch()
  // Accessing a user’s camera or microphone using getUserMedia()
  // Asking a user to select files using showOpenFilePicker()
  // So even though you may not have to implement your own asynchronous functions very often, you are very likely to need to use them correctly.

  // 0.2 Event Handlers: Asynchronous functions might remind you of event handlers, and if it does, you'd be right. Event handlers are really a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens. If "the event" is "the asynchronous operation has completed", then that event could be used to notify the caller about the result of an asynchronous function call.

  // 0.3 An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript. However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions.

  // 0.4 For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the Promise object, which represents the eventual completion (or failure) of an asynchronous operation and its resulting value, avoiding the "callback hell" problem.

  // 1. Promise: A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a way to handle asynchronous code in a more structured and manageable way. Promises have three states: pending, fulfilled, and rejected. A Promise is created using the new Promise() constructor, which takes a function as an argument with two parameters: resolve and reject.

  // Promise - Example:

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  promise
    .then((value) => {
      console.log("Resolved:", value);
    })
    .catch((error) => {
      console.error("Rejected:", error.message);
    });

  // Real cases of use:

  // Promise - Fetching data from an API:

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  fetchData("https://api.example.com/data")
    .then((data) => console.log("Data:", data))
    .catch((error) => console.error("Error:", error));

  // Promise - Handling user authentication and authorization:

  function authenticateUser(credentials) {
    return new Promise((resolve, reject) => {
      if (isValidCredentials(credentials)) {
        resolve("User is authenticated");
      } else {
        reject(new Error("Invalid credentials"));
      }
    });
  }

  authenticateUser({ username: "alice", password: "password" })
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));

  // Promise - Loading images and resources in web applications:

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Failed to load image"));
      image.src = url;
    });
  }

  loadImage("image.jpg")
    .then((image) => console.log("Image loaded:", image))
    .catch((error) => console.error("Error loading image:", error));

  // Promise - Handling form submissions and data processing:

  function submitForm(formData) {
    return new Promise((resolve, reject) => {
      if (isValidFormData(formData)) {
        resolve("Form submitted successfully");
      } else {
        reject(new Error("Invalid form data"));
      }
    });
  }

  // 2. States: A Promise in JavaScript can be in one of three states: pending, fulfilled, or rejected. The state of a Promise determines its behavior and the value it resolves to. When a Promise is created, it starts in the pending state. It transitions to the fulfilled state when the asynchronous operation is successful and resolves with a value. It transitions to the rejected state when an error occurs during the operation and rejects with an error.

  // States - Example:

  const promiseState = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  console.log(promiseState); // Promise { <pending> }

  promiseState
    .then((value) => {
      console.log("Resolved:", value);
      console.log(promiseState); // Promise { 0.625 }
    })
    .catch((error) => {
      console.error("Rejected:", error.message);
      console.log(promiseState); // Promise { <rejected> }
    });

  // 3. new Promise(): The new Promise() constructor in JavaScript is used to create a new Promise object. It takes a function as an argument with two parameters: resolve and reject. The resolve parameter is a function that is called when the asynchronous operation is successful and the Promise is fulfilled. The reject parameter is a function that is called when an error occurs during the operation and the Promise is rejected.

  // new Promise() - Example:

  const promiseNew = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  promiseNew
    .then((value) => {
      console.log("Resolved:", value);
    })
    .catch((error) => {
      console.error("Rejected:", error.message);
    });

  // Real cases of use:

  // new Promise() - Fetching data from an API:

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  fetchData("https://api.example.com/data")
    .then((data) => console.log("Data:", data))
    .catch((error) => console.error("Error:", error));

  // 4. await keyword: The await keyword in JavaScript is used to pause the execution of an asynchronous function until a Promise is settled (resolved or rejected). It can only be used inside an async function, which allows you to write asynchronous code in a synchronous style. The await keyword simplifies working with Promises and makes asynchronous code easier to read and maintain.

  // await keyword examples:

  function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }

  f1();

  // Real cases of use:

  // await keyword - Fetching data from an API:

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const data = await fetchData("https://api.example.com/data");

  // await keyword - Handling user authentication and authorization:

  async function authenticateUser(credentials) {
    if (isValidCredentials(credentials)) {
      return "User is authenticated";
    } else {
      throw new Error("Invalid credentials");
    }
  }

  try {
    const message = await authenticateUser({
      username: "ernestico",
      password: "password",
    });
    console.log(message);
  } catch (error) {
    console.error(error.message);
  }

  // await keyword - Loading images and resources in web applications:

  async function loadImage(url) {
    const image = new Image();
    image.src = url;
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    return image;
  }

  // 5. async/await: The async/await syntax in JavaScript provides a way to write asynchronous code in a synchronous style. It allows you to define asynchronous functions using the async keyword and use the await keyword to pause the execution of asynchronous operations until they are settled (resolved or rejected). async/await simplifies working with Promises and improves the readability and maintainability of asynchronous code.

  // async/await - Examples:

  async function fetchDataAsync(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  fetchDataAsync("https://api.example.com/data");

  async function authenticateUserAsync(credentials) {
    if (isValidCredentials(credentials)) {
      return "User is authenticated";
    } else {
      throw new Error("Invalid credentials");
    }
  }

  // 6. Async Function: An async function in JavaScript is a function that returns a Promise. It allows you to write asynchronous code in a synchronous style using the async/await syntax. An async function can contain one or more await expressions, which pause the execution of the function until the Promise is settled. Async functions simplify working with Promises and make asynchronous code easier to read and maintain.

  // Async function - Example:

  async function fetchDataAsyncFunction(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  fetchDataAsyncFunction("https://api.example.com/data");

  // Async function with error handling:

  async function authenticateUserAsyncFunction(credentials) {
    if (isValidCredentials(credentials)) {
      return "User is authenticated";
    } else {
      throw new Error("Invalid credentials");
    }
  }

  // Async with arrow function: We can create async functions using arrow function syntax. This is useful when defining short asynchronous functions or when using arrow functions in combination with other features like Promises and async/await.

  const fetchDataAsyncArrow = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // 7. Top-level await: Top-level await is a feature in JavaScript that allows you to use the await keyword outside of async functions at the top level of a module. It simplifies working with asynchronous code in module scripts and provides a more straightforward way to handle asynchronous operations.

  // Note: Top-level await only works at the top level of modules. There is no support for classic scripts or non-async functions. Top-level await enables developers to use the await keyword outside of async functions. It acts like a big async function causing other modules who import them to wait before they start evaluating their body.

  // For more info: https://v8.dev/features/top-level-await

  // Top-level await - Example:

  const responseTopLevelAwait = await fetch("https://api.example.com/data");

  const dataTopLevelAwait = await response.json();

  // export default dataTopLevelAwait;

  // Real cases of use:

  // Top-level await - Fetching data from an API in module scripts:

  // const response = await fetch("https://api.example.com/data");

  // 8. Promises: Promises in JavaScript are used to handle asynchronous operations and provide a way to work with asynchronous code in a more structured and manageable way. A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises have three states: pending, fulfilled, and rejected. A Promise is created using the new Promise() constructor, which takes a function as an argument with two parameters: resolve and reject.

  // Promises - Example:

  const promisePromises = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  }, 1000);

  promisePromises
    .then((value) => {
      console.log("Resolved:", value);
    })
    .catch((error) => {
      console.error("Rejected:", error.message);
    });

  // Real cases of use:

  // Promises - Fetching data from an API:

  function fetchDataPromises(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  // 9. Promise.resolve(): The Promise.resolve() method in JavaScript returns a Promise object that is resolved with a given value. It is a convenient way to create a Promise that is already resolved with a specific value. Promise.resolve() is useful for converting non-Promise values into Promises and simplifying asynchronous code.

  // Promise.resolve() - Example:

  const resolvedPromise = Promise.resolve(42);

  resolvedPromise.then((value) => {
    console.log("Resolved:", value);
  });

  // 10. Promise.reject(): The Promise.reject() method in JavaScript returns a Promise object that is rejected with a given reason. It is a convenient way to create a Promise that is already rejected with a specific error. Promise.reject() is useful for handling errors and failures in asynchronous code.

  // Promise.reject() - Example:

  const rejectedPromise = Promise.reject(new Error("Promise rejected"));

  rejectedPromise.catch((error) => {
    console.error("Rejected:", error.message);
  });

  // 11. Promise.all(): The Promise.all() method in JavaScript takes an iterable of Promises and returns a single Promise that resolves when all of the input Promises have resolved, or rejects with the reason of the first Promise that rejects. It is useful for running multiple asynchronous operations in parallel and waiting for all of them to complete.

  // Promise.all() - Example:

  const promise1 = Promise.resolve(1);
  const promise2 = Promise.resolve(2);
  const promise3 = Promise.resolve(3);

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("Resolved:", values);
  });

  // 12. Promise.any(): The Promise.any() method in JavaScript takes an iterable of Promises and returns a single Promise that resolves as soon as one of the input Promises resolves, or rejects if all of the input Promises reject. It is useful for handling multiple asynchronous operations and waiting for the first one to complete successfully.

  // Promise.any() - Example:

  const promiseAny1 = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "one")
  );
  const promiseAny2 = new Promise((resolve, reject) =>
    setTimeout(resolve, 200, "two")
  );
  const promiseAny3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 300, "three")
  );

  Promise.any([promiseAny1, promiseAny2, promiseAny3]).then((value) => {
    console.log("Resolved:", value);
  });

  // 13. .then(): The .then() method in JavaScript is used to handle the result of a Promise after it has been resolved. It takes two optional callback functions as arguments: onFulfilled and onRejected. The onFulfilled callback is called when the Promise is resolved, and the onRejected callback is called when the Promise is rejected.

  // .then() - Example:

  const promiseThen = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  promiseThen
    .then((value) => {
      console.log("Resolved:", value);
    })
    .catch((error) => {
      console.error("Rejected:", error.message);
    });

  // 14. .finally(): The .finally() method in JavaScript is used to run cleanup code after a Promise is settled (resolved or rejected). It is called regardless of the Promise's outcome and allows you to perform cleanup tasks like closing resources, releasing memory, or logging final results.

  // .finally() - Example:

  const promiseFinally = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  promiseFinally
    .then((value) => {
      console.log("Resolved:", value);
    })
    .catch((error) => {
      console.error("Rejected:", error.message);
    })
    .finally(() => {
      console.log("Cleanup code here");
    });

  // 15. .catch(): The .catch() method in JavaScript is used to handle errors in Promises. It is a shorthand for .then(null, onRejected) and is called when a Promise is rejected. The .catch() method allows you to handle errors in a more concise and readable way.

  // .catch() - Example:

  const promiseCatch = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected"));
    }, 1000);
  });

  promiseCatch
    .then((value) => {
      console.log("Resolved:", value);
    })
    .catch((error) => {
      console.error("Rejected:", error.message);
    });
}

/* 10. Strings */

{
  // 1. [] (character access): The square brackets [] in JavaScript are used to access individual characters in a string. You can access characters by their index position, starting from 0 for the first character. The character at a specific index can be retrieved or modified using square brackets notation.

  // [] - Examples:

  // [] - Accessing characters in a string

  const textString = "Hello, Ernestico!";

  console.log(textString[0]); // "H"
  console.log(textString[7]); // "E"
  console.log(textString[13]); // "!"

  // [] - Modifying characters in a string

  const nameString = "Ernestico!";
  nameString[0] = "A"; // This does not modify the string
  console.log(nameString); // "Ernestico!"
  nameString = "A" + nameString.slice(1); // This modifies the string
  console.log(nameString); // "Arnestico!"

  // 2. Template strings: Template strings in JavaScript are a way to create strings that allow for embedded expressions and multi-line strings. They are enclosed in backticks (`) instead of single or double quotes. Template strings support string interpolation, allowing you to embed variables and expressions inside the string using ${...} syntax.

  // Template strings - Examples:

  // Template strings - String interpolation

  const nameTemplate = "Ernestico";
  const greetingTemplate = `Hello, ${nameTemplate}!`;

  console.log(greetingTemplate); // "Hello, Ernestico!"

  // Template strings - Multi-line strings

  const multiLineString = `
    This is a
    multi-line
    string.
  `;
  console.log(multiLineString); // "This is a\nmulti-line\nstring."

  // Template strings - Expressions and calculations

  const number1 = 5;
  const number2 = 10;

  const sumTemplate = `${number1} + ${number2} = ${number1 + number2}`;

  console.log(sumTemplate); // "5 + 10 = 15"

  // 3. Concatenation: Concatenation in JavaScript refers to combining multiple strings into a single string. It is commonly used to build dynamic strings by joining static text with variables, expressions, or other strings. Concatenation can be done using the + operator or template strings.

  // Concatenation - Examples:

  // Concatenation - Using the + operator

  const firstNameConcat = "Ernestico";

  const fullNameConcat = "Hello, " + firstNameConcat + "!";

  console.log(fullNameConcat); // "Hello, Ernestico!"

  // Concatenation - Using template strings

  const lastNameConcat = "Roca";

  const fullNameTemplate = `Hello, ${firstNameConcat} ${lastNameConcat}!`;

  console.log(fullNameTemplate); // "Hello, Ernestico Roca!"

  // Concatenation - Combining multiple strings

  const text1 = "Hello, ";
  const text2 = "Ernestico";

  const messageConcat = text1 + text2 + "!";

  console.log(messageConcat); // "Hello, Ernestico!"

  // 4. .trim(): The .trim() method in JavaScript is used to remove whitespace characters from the beginning and end of a string. It trims leading and trailing spaces, tabs, and line breaks, but not spaces within the string. The .trim() method is useful for cleaning up user input, normalizing strings, and comparing strings without leading or trailing whitespace.

  // .trim() - Examples:

  const textTrim = "   Hello, Ernestico!   ";
  console.log(textTrim.trim()); // "Hello, Ernestico!"

  // .trim() - Removing leading and trailing spaces

  const textLeading = "   Hello, Ernestico!";
  console.log(textLeading.trim()); // "Hello, Ernestico!"

  const textTrailing = "Hello, Ernestico!   ";
  console.log(textTrailing.trim()); // "Hello, Ernestico!"

  // .trim() - Normalizing user input

  const userInput = " Ernestico    ";
  const normalizedInput = userInput.trim();
  console.log(normalizedInput); // "Ernestico"

  // 5. .toUpperCase(): The .toUpperCase() method in JavaScript is used to convert a string to uppercase letters. It returns a new string with all characters converted to uppercase. The .toUpperCase() method is useful for normalizing text, comparing strings case-insensitively, and formatting text in a consistent way.

  // .toUpperCase() - Examples:

  const textUpper = "Hello, Ernestico!";
  console.log(textUpper.toUpperCase()); // "HELLO, ERNESTICO!"

  // 6. .toLowerCase(): The .toLowerCase() method in JavaScript is used to convert a string to lowercase letters. It returns a new string with all characters converted to lowercase. The .toLowerCase() method is useful for normalizing text, comparing strings case-insensitively, and formatting text in a consistent way.

  // .toLowerCase() - Examples:

  const textLower = "Hello, Ernestico!";
  console.log(textLower.toLowerCase()); // "hello, ernestico!"

  // 7. .substring(): The .substring() method in JavaScript is used to extract a substring from a string. It takes two parameters: the starting index (inclusive) and the ending index (exclusive) of the substring. The .substring() method returns a new string containing the characters between the specified indices.

  // .substring() - Examples:

  const textSubstring = "Hello, Ernestico!";
  console.log(textSubstring.substring(7, 16)); // "Ernestico"

  // 8. .startsWith(): The .startsWith() method in JavaScript is used to check if a string starts with a specific substring. It returns true if the string starts with the specified substring, and false otherwise. The .startsWith() method is useful for checking prefixes, patterns, or keywords at the beginning of a string. It is case-sensitive.

  // .startsWith() - Examples:

  const textStartsWith = "Hello, Ernestico!";
  console.log(textStartsWith.startsWith("Hello")); // true
  console.log(textStartsWith.startsWith("Ernestico")); // false
  console.log(textStartsWith.startsWith("H")); // true
  console.log(textStartsWith.startsWith("hello")); // false

  // 9. .split(): The .split() method in JavaScript is used to split a string into an array of substrings based on a specified separator. It takes a separator as an argument and returns an array of substrings. The .split() method is useful for parsing strings, extracting values, and splitting text into smaller parts.

  // .split() - Examples:

  const textSplit = "Hello, Ernestico!";
  console.log(textSplit.split(",")); // ["Hello", " Ernestico!"]
  console.log(textSplit.split(" ")); // ["Hello,", "Ernestico!"]
  console.log(textSplit.split("o")); // ["Hell", ", Ernestic", "!"]

  // 10. .replaceAll(): The .replaceAll() method in JavaScript is used to replace all occurrences of a specified substring with another substring in a string. It takes two parameters: the substring to be replaced and the new substring to replace it with. The .replaceAll() method returns a new string with all occurrences of the specified substring replaced.

  // .replaceAll() - Examples:

  const textReplaceAll = "Hello, Ernestico!";
  console.log(textReplaceAll.replaceAll("Hello", "Hi")); // "Hi, Ernestico!"
  console.log(textReplaceAll.replaceAll("o", "0")); // "Hell0, Ernestic0!"

  // 11. .replace(): The .replace() method in JavaScript is used to replace a specified substring with another substring in a string. It takes two parameters: the substring to be replaced and the new substring to replace it with. The .replace() method replaces only the first occurrence of the specified substring.

  // .replace() - Examples:

  const textReplace = "Hello, Ernestico!";
  console.log(textReplace.replace("Hello", "Hi")); // "Hi, Ernestico!"
  console.log(textReplace.replace("o", "0")); // "Hell0, Ernestico!"

  // 12. .length: The length property in JavaScript is used to get the number of characters in a string. It returns the length of the string as an integer value. The length property is useful for checking the size of a string, iterating over characters, and performing string manipulation operations.

  // length - Examples:

  const textLength = "Hello, Ernestico!";
  console.log(textLength.length); // 17

  // 13. .includes(): The .includes() method in JavaScript is used to check if a string contains a specific substring. It returns true if the string contains the specified substring, and false otherwise. The .includes() method is case-sensitive.

  // .includes() - Examples:

  const textIncludes = "Hello, Ernestico!";
  console.log(textIncludes.includes("Hello")); // true
  console.log(textIncludes.includes("Ernestico")); // true
  console.log(textIncludes.includes("hello")); // false
  console.log(textIncludes.includes("ello")); // true

  // 14. .indexOf(): The .indexOf() method in JavaScript is used to find the index of the first occurrence of a specified substring in a string. It returns the index of the substring if found, and -1 if the substring is not present. The .indexOf() method is case-sensitive.

  // .indexOf() - Examples:

  const textIndexOf = "Hello, Ernestico!";
  console.log(textIndexOf.indexOf("Hello")); // 0
  console.log(textIndexOf.indexOf("Ernestico")); // 7
  console.log(textIndexOf.indexOf("hello")); // -1
  console.log(textIndexOf.indexOf("o")); // 4

  // 15. .endsWith(): The .endsWith() method in JavaScript is used to check if a string ends with a specific substring. It returns true if the string ends with the specified substring, and false otherwise. The .endsWith() method is case-sensitive.

  // .endsWith() - Examples:

  const textEndsWith = "Hello, Ernestico!";
  console.log(textEndsWith.endsWith("Ernestico!")); // true
  console.log(textEndsWith.endsWith("Hello")); // false

  // 16. .charAt(): The .charAt() method in JavaScript is used to get the character at a specific index in a string. It takes an index as an argument and returns the character at that index. The .charAt() method is useful for accessing individual characters in a string.

  // .charAt() - Examples:

  const textCharAt = "Hello, Ernestico!";
  console.log(textCharAt.charAt(0)); // "H"
  console.log(textCharAt.charAt(7)); // "E"
  console.log(textCharAt.charAt(13)); // "!"

  // 17. .at(): The .at() method in JavaScript is used to get the character at a specific index in a string. It takes an index as an argument and returns the character at that index. The .at() method is similar to the .charAt() method but supports negative indices and Unicode characters. The difference between .at() and .charAt() is that .at() returns an empty string for out-of-bounds indices, while .charAt() returns an empty string for negative indices.

  // .at() - Examples:

  const textAt = "Hello, Ernestico!";
  console.log(textAt.at(0)); // "H"
  console.log(textAt.at(7)); // "E"
  console.log(textAt.at(13)); // "!"

  // 18. Null: The null value in JavaScript signifies the deliberate absence of any object value. It is considered as one of JavaScript’s primitive values and a falsy value. Deliberate absence emphasises the intentional use of null to indicate that a variable does not point to any object. This explicit declaration conveys the purposeful nature of null, showing that the variable is meant to be empty or non-existent at execution time. In essence, null is a way to reset a variable, signalling that it should not reference any object.

  // Null examples:

  // Initializing a Variable to Indicate No Value. Why null? It explicitly communicates that the variable is intentionally empty, not undefined by accident.

  let selectedCountry = null;

  // Later in the code
  if (selectedCountry === null) {
    console.log("No country selected yet.");
  }

  // Resetting a Variable. Why null? It signifies the deliberate removal of the object data, indicating that there’s no active session.

  let userSession = {
    id: 123,
    name: "John Doe",
  };

  // When the user logs out
  userSession = null;

  console.log(userSession); // Output: null

  // Representing Missing Data. Why null? It clarifies that the middle name is intentionally left blank, rather than being undefined due to an error.

  let user = {
    firstName: "Alice",
    middleName: null, // Middle name is not provided
    lastName: "Smith",
  };

  console.log(user.middleName); // Output: null
}

/* 11. Syntax */

{
  // 1. try...catch...finally: The try...catch...finally statement in JavaScript is used to handle exceptions and errors in code. It consists of three blocks: try, catch, and finally. The try block contains the code that may throw an exception. The catch block is executed when an exception is thrown, and it handles the error. The finally block is executed after the try and catch blocks, regardless of whether an exception occurred.

  // try...catch...finally - Example:

  try {
    // Code that may throw an exception
    throw new Error("An error occurred");
  } catch (error) {
    // Handle the error
    console.error("Error:", error.message);
  } finally {
    // Cleanup code
    console.log("Finally block executed");
  }

  // Real cases of use:

  // try...catch...finally - Handling file operations in Node.js:

  const fs = require("fs");

  try {
    const data = fs.readFileSync("file.txt", "utf8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  } finally {
    console.log("File operation completed");
  }

  // try...catch...finally - Handling database operations in web applications:

  try {
    const data = await fetchDataFromDatabase();
    console.log("Data from database:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  } finally {
    console.log("Database operation completed");
  }

  // 2. throw: The throw statement in JavaScript is used to throw an exception or error. It interrupts the execution of the code and transfers control to the nearest enclosing try...catch block. The throw statement is useful for signaling errors, handling exceptional conditions, and customizing error messages.

  // throw - Example:

  const ageThrow = -1;

  if (ageThrow < 0) {
    throw new Error("Age cannot be negative");
  }

  // Real cases of use:

  // throw - Validating user input in web forms:

  function validateUserInput(input) {
    if (!input) {
      throw new Error("Input is required");
    }
  }

  // throw - Handling invalid arguments in functions:

  function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid dimensions");
    }
    return width * height;
  }

  // 3. return: The return statement in JavaScript is used to end the execution of a function and specify the value to be returned. It returns the value of the expression following the return keyword to the caller of the function. The return statement is used to provide the output of a function and exit the function's execution.

  // return - Example:

  function sum(a, b) {
    return a + b;
  }

  const result = sum(5, 10);
  console.log(result); // 15

  // Real cases of use:

  // return - Calculating total price in a shopping cart:

  function calculateTotalPrice(items) {
    let total = 0;
    for (const item of items) {
      total += item.price;
    }
    return total;
  }

  // 4. Ternary operator: The ternary operator in JavaScript is a conditional operator that evaluates a condition and returns one of two expressions based on the result of the condition. It consists of three parts: a condition, a true expression, and a false expression. The ternary operator is a concise way to write conditional statements and is often used for simple if-else checks. It is like a shorthand for an if-else statement.

  // Ternary operator - Example:

  const ageTernary = 25;
  const messageTernary =
    ageTernary >= 18 ? "You are an adult" : "You are a minor";

  console.log(messageTernary); // "You are an adult"

  // 5. if...else: The if...else statement in JavaScript is used to execute different blocks of code based on a condition. It consists of an if block, an optional else block, and one or more else if blocks. The if block contains the code to be executed if the condition is true. The else block contains the code to be executed if the condition is false. The else if block allows for multiple conditions to be checked.

  // if...else - Example:

  const temperature = 25;

  if (temperature > 30) {
    console.log("It's hot outside");
  } else if (temperature > 20) {
    console.log("It's warm outside");
  } else {
    console.log("It's cold outside");
  }

  // Real cases of use:

  // if...else - Validating user input in a web form:

  if (input === "") {
    console.log("Input is required");
  } else {
    console.log("Input is valid");
  }

  // if...else - Handling user authentication in a web application:

  if (isValidCredentials(credentials)) {
    console.log("User is authenticated");
  } else {
    console.log("Invalid credentials");
  }

  // 6. for...of: The for...of statement in JavaScript is used to iterate over the elements of an iterable object, such as an array, string, or collection. It provides a concise and readable way to loop through the elements of an iterable without using traditional index-based loops. The for...of statement works with any object that has a Symbol.iterator method. It is commonly used for iterating over arrays, strings, and other iterable objects. The diffence with the for...in loop is that for...of iterates over the values of an iterable, while for...in iterates over the keys or indices.

  // for...of - Example:

  const forOfNumbers = [1, 2, 3, 4, 5];

  for (const number of forOfNumbers) {
    console.log(number); // 1, 2, 3, 4, 5
  }

  // Real cases of use:

  // for...of - Processing items in a shopping cart:

  const shoppingCart = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];

  let totalPrice = 0;

  for (const item of shoppingCart) {
    totalPrice += item.price;
  }

  console.log("Total price:", totalPrice);

  // 7. for (loops): The for loop in JavaScript is used to iterate over a block of code a specified number of times. It consists of three parts: an initialization, a condition, and an increment or decrement. The for loop executes the code block as long as the condition is true. It is commonly used for iterating over arrays, generating sequences, and performing repetitive tasks.

  // for (loops) - Example:

  for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }

  // Real cases of use:

  // for (loops) - Generating a sequence of numbers:

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  // for (loops) - Iterating over an array:

  const numbersFor = [1, 2, 3, 4, 5];

  for (let i = 0; i < numbersFor.length; i++) {
    console.log(numbersFor[i]);
  }

  // for (loops) - Calculating the sum of an array:
  const numbersSum = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < numbersSum.length; i++) {
    sum += numbersSum[i];
  }
  console.log("Sum:", sum);

  // for (loops) - Iterating over a string:

  const textFor = "Hello";
  for (let i = 0; i < textFor.length; i++) {
    console.log(textFor[i]);
  }
  console.log("Length:", textFor.length);

  // for to create a Dynamic To-Do List with Persistence
  const todoList = [];
  function addTodoItem(item) {
    todoList.push(item);
    console.log(`Added: ${item}`);
    console.log("Current To-Do List:", todoList);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  addTodoItem("Learn JavaScript");
  addTodoItem("Build a project");
  addTodoItem("Review code");
  addTodoItem("Test the application");
  addTodoItem("Deploy to production");
  addTodoItem("Celebrate success!");


  for (let i = 0; i < todoList.length; i++) {
    console.log(`To-Do Item ${i + 1}: ${todoList[i]}`);
  }


  // 8. while: The while loop in JavaScript is used to execute a block of code as long as a specified condition is true. It consists of a condition that is evaluated before each iteration of the loop. The while loop continues to execute the code block until the condition becomes false. It is commonly used for repeating tasks with an unknown number of iterations.

  // while - Example:

  let count = 0;

  while (count < 5) {
    console.log(count);
    count++;
  }

  // Real cases of use:

  // while - Processing user input until valid:

  let userInput = "";

  while (userInput === "") {
    userInput = prompt("Enter your name:");
  }

  console.log("User input:", userInput);

  // while - Generating a sequence of random numbers:

  let randomNumbers = [];

  while (randomNumbers.length < 5) {
    randomNumbers.push(Math.random());
  }

  console.log("Random numbers:", randomNumbers);

  // While Example - Processing a Queue (FIFO structure): Useful in async tasks, messaging, or jobs processing. Good for task scheduling, async job runners, or simulating message queues.

  const jobQueue = [
    { id: 1, task: "Send email" },
    { id: 2, task: "Generate report" },
    { id: 3, task: "Backup database" }
  ];

  while (jobQueue.length > 0) {
    const currentJob = jobQueue.shift(); // Get the first job in the queue
    console.log(`Processing job ${currentJob.id}: ${currentJob.task}`);
    // Simulate job processing with a delay (for demonstration purposes)
    // In real scenarios, this could be an async operation
  }

  // 9. Semi-colons: Semi-colons in JavaScript are used to terminate statements and separate multiple statements on the same line. While semi-colons are optional in JavaScript due to automatic semicolon insertion (ASI), it is recommended to use them to avoid potential issues and improve code readability. Semi-colons are used to indicate the end of a statement and prevent syntax errors.

  // Semi-colons - Examples:

  const messageSemiColon = "Hello, Ernestico!"; // Semi-colon at the end of the statement

  let countSemiColon = 0; // Semi-colon at the end of the statement

  countSemiColon++; // Semi-colon at the end of the statement

  // Real cases of use:

  // Semi-colons - Terminating statements in JavaScript:

  const firstNameSemiColon = "Ernestico"; // Semi-colon at the end of the statement

  let ageSemiColon = 25; // Semi-colon at the end of the statement

  // 10. Exceptions: Exceptions in JavaScript are used to handle errors, exceptional conditions, and unexpected behavior in code. They provide a way to gracefully handle errors and prevent the program from crashing. Exceptions can be thrown using the throw statement and caught using try...catch blocks. They allow you to handle errors, recover from failures, and provide meaningful error messages to users.

  // Exceptions - Example:

  try {
    throw new Error("An error occurred");
  } catch (error) {
    console.error("Error:", error.message);
  }

  // Real cases of use:

  // Exceptions - Handling file operations in Node.js:

  const fs = require("fs");

  try {
    const data = fs.readFileSync("file.txt", "utf8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }

  // Exceptions - Validating user input in web forms:

  function validateUserInput(input) {
    if (!input) {
      throw new Error("Input is required");
    }
  }

  try {
    validateUserInput("");
    console.log("Input is valid");
    validateUserInput("Some input");
    console.log("Input is valid");
  } catch (error) {
    console.error("Error validating user input:", error.message);
  }

  // Exceptions - Handling database operations in web applications:

  async function fetchDataFromDatabase() {
    // Simulating a database operation that may fail
    throw new Error("Database connection failed");
  }
  
  try {
    const data = await fetchDataFromDatabase();
    console.log("Data from database:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

/* 12. Arrays */

{
  // 1. ... (spread operator): The spread operator (...) in JavaScript is used to expand an iterable object, such as an array or string, into individual elements. It allows you to split an array into individual elements or combine multiple elements into an array. The spread operator is useful for creating copies of arrays, merging arrays, and passing multiple arguments to functions.

  // ... (spread operator) - Examples:

  // ... (spread operator) - Splitting an array into individual elements

  const numbersSpread = [1, 2, 3, 4, 5];

  console.log(...numbersSpread); // 1 2 3 4 5

  // ... (spread operator) - Combining multiple elements into an array

  const numbersCombined = [...numbersSpread, 6, 7, 8, 9, 10];

  console.log(numbersCombined); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // 2. .at(): The .at() method in JavaScript is used to get the element at a specific index in an array. It takes an index as an argument and returns the element at that index. The .at() method is similar to the .charAt() method for strings but works with arrays. The difference between .at() and .charAt() is that .at() returns undefined for out-of-bounds indices, while .charAt() returns an empty string for negative indices. The bracket notation (array[index]) can also be used to access elements in an array, but it does not support negative indices.

  // .at() - Examples:

  const numbersAt = [1, 2, 3, 4, 5];

  console.log(numbersAt.at(0)); // 1
  console.log(numbersAt.at(2)); // 3
  console.log(numbersAt.at(4)); // 5

  // 3. .every(): The .every() method in JavaScript is used to check if all elements in an array pass a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .every() method returns true if all elements satisfy the condition, and false otherwise. It is useful for checking if all elements meet a specific criteria or condition.

  // .every() - Examples:

  const numbersEvery = [1, 2, 3, 4, 5];
  const isPositive = numbersEvery.every((number) => number > 0);
  console.log(isPositive); // true

  const arrayNames = ['name1', 'name2', 'name3', 'name4'];
  const allHaveFourLetters = arrayNames.every((name) => name.length === 4);
  console.log(allHaveFourLetters); // true

  // A more complex example for .every():
  const words = ["apple", "banana", "cherry"];
  const allHaveFiveLetters = words.every((word) => word.length === 5);
  console.log(allHaveFiveLetters); // false

  // Real cases of use:
  // .every() - Validating user input in a web form:
  const userInputs = ["John", "Jane", "Doe"];
  const allInputsValid = userInputs.every((input) => input.length > 0);
  console.log(allInputsValid); // true
  // .every() - Checking product availability in an inventory system:
  const productsEvery = [
    { name: "Product 1", inStock: true },
    { name: "Product 2", inStock: true },
    { name: "Product 3", inStock: false },
  ];
  const allProductsInStock = productsEvery.every((product) => product.inStock);
  console.log(allProductsInStock); // false

  // 4. .filter(): The .filter() method in JavaScript is used to create a new array with elements that pass a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .filter() method returns a new array containing only the elements that satisfy the condition. It is useful for selecting or filtering elements based on a specific criteria. The difference with .every() is that .every() returns a boolean value, while .filter() returns a new array with the elements that pass the condition.

  // .filter() - Examples:

  const numbersFilter = [1, -2, 3, -4, 5];

  const positiveNumbers = numbersFilter.filter((number) => number > 0);

  console.log(positiveNumbers); // [1, 3, 5]

  // Real cases of use:

  // .filter() - Filtering products in an e-commerce website:

  const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];

  const affordableProducts = products.filter((product) => product.price < 20);

  console.log(affordableProducts); // [{ name: "Product 1", price: 10 }]

  // Here's a more complex example for .filter():
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 },
  ];

  const adults = people.filter((person) => person.age >= 18);
  console.log(adults); // [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

  // Real cases of use:
  // .filter() - Filtering tasks in a to-do list application:
  const tasks = [
    { title: "Arias web development", completed: true },
    { title: "Write blog post", completed: false },
    { title: "Read a book", completed: true },
    { title: "Go for a walk", completed: false },
  ];

  const completedTasks = tasks.filter((task) => task.completed);
  console.log(completedTasks); // [{ title: "Arias web development", completed: true }, { title: "Read a book", completed: true }]

  // To change the status of a task to completed:

  function completeTask(title) {
    const task = tasks.find((task) => task.title === title);
    if (task) {
      task.completed = true;
      console.log(`Task "${title}" marked as completed.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
  completeTask("Write blog post");
  console.log(tasks);
  

  // 5. .find(): The .find() method in JavaScript is used to find the first element in an array that passes a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .find() method returns the first element that satisfies the condition, or undefined if no element matches the condition. It is useful for searching for a specific element in an array.

  // .find() - Examples:

  const numbersFind = [1, 2, 3, 4, 5];

  const foundNumber = numbersFind.find((number) => number > 3);

  console.log(foundNumber); // 4

  // A more complex example for .find():

  const studentsFind = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 90 },
    { name: "Eve", score: 88 },
  ];

  const findTopStudent = studentsFind.find((student) => student.score > 90);
  console.log(findTopStudent); // { name: "Bob", score: 92 }

  // 6. .findIndex(): The .findIndex() method in JavaScript is used to find the index of the first element in an array that passes a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .findIndex() method returns the index of the first element that satisfies the condition, or -1 if no element matches the condition. It is useful for finding the position of a specific element in an array.

  // .findIndex() - Examples:

  const numbersFindIndex = [1, 2, 3, 4, 5];

  const index = numbersFindIndex.findIndex((number) => number > 3);

  console.log(index); // 3 This means that the first element greater than 3 is at index 3 (which is the number 4).

  // A more complex example for .findIndex():
  const studentsFindIndex = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 90 },
    { name: "Eve", score: 88 },
  ];

  const indexTopStudent = studentsFindIndex.findIndex((student) => student.score > 90);
  console.log(indexTopStudent); // 1 This means that the first student with a score greater than 90 is at index 1 (which is Bob).

  // 7. .foreach(): The .forEach() method in JavaScript is used to iterate over the elements of an array and perform a specified action for each element. It takes a callback function as an argument, which is called for each element in the array. The .forEach() method does not return a new array but executes the callback function for each element. It is useful for performing side effects, such as logging, updating variables, or interacting with the DOM.

  // .forEach() - Examples:

  const numbersForEach = [1, 2, 3, 4, 5];

  numbersForEach.forEach((number) => {
    console.log(number);
  });

  // More complex example for .forEach():

  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 90 },
    { name: "Eve", score: 88 },
  ];

  let totalScore = 0;
  let highestScore = 0;
  let topStudent = "";

  students.forEach((student) => {
    totalScore += student.score;
    if (student.score > highestScore) {
      highestScore = student.score;
      topStudent = student.name;
    }
  });

  const averageScore = totalScore / students.length;
  console.log(`Average Score: ${averageScore}`); // Average Score: 86.6
  console.log(`Top Student: ${topStudent} with a score of ${highestScore}`); // Top Student: Bob with a score of 92

  // Real cases of use:

  // .forEach() - Logging items in a shopping cart:

  const shoppingCart = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];

  shoppingCart.forEach((item) => {
    console.log(item.name, item.price);
  });

  // 8. .includes(): The .includes() method in JavaScript is used to check if an array contains a specific element. It returns true if the array includes the element, and false otherwise. The .includes() method is case-sensitive and works with primitive values, objects, and arrays. It is useful for checking the presence of an element in an array.

  // .includes() - Examples:

  const numbersIncludes = [1, 2, 3, 4, 5];

  console.log(numbersIncludes.includes(3)); // true
  console.log(numbersIncludes.includes(6)); // false

  // A more complex example for .includes():

  const fruitsIncludes = ["apple", "banana", "orange"];
  console.log(fruitsIncludes.includes("banana")); // true
  console.log(fruitsIncludes.includes("grape")); // false

  // Real cases of use:
  // .includes() - Checking if a product is in stock:
  const productsIncludes = [
    { name: "Product 1", inStock: true },
    { name: "Product 2", inStock: false },
    { name: "Product 3", inStock: true },
  ];
  const productNames = productsIncludes.map((product) => product.name);
  console.log(productNames.includes("Product 2")); // true
  console.log(productNames.includes("Product 4")); // false

  // .includes() - Validating user input in a web form:
  const validUsernames = ["user1", "user2", "user3"];
  const inputUsername = "user2";
  if (validUsernames.includes(inputUsername)) {
    console.log("Username is valid");
  } else {
    console.log("Username is not valid");
  }

  // 9. .join(): The .join() method in JavaScript is used to join the elements of an array into a string. It takes an optional separator as an argument, which is inserted between the elements in the resulting string. The .join() method returns a new string containing the elements of the array joined together. It is useful for converting arrays into strings with custom separators.

  // .join() - Examples:

  const fruits = ["apple", "banana", "orange"];

  console.log(fruits.join(", ")); // "apple, banana, orange"
  console.log(fruits.join(" | ")); // "apple | banana | orange"

  // A more complex example for .join():

  const wordsJoin = ["Hello", "world", "this", "is", "JavaScript"];
  const sentence = wordsJoin.join(" ");
  console.log(sentence); // "Hello world this is JavaScript"

  const csvData = [
    ["Name", "Age", "City"],
    ["Alice", 30, "New York"],
    ["Bob", 25, "Los Angeles"],
    ["Charlie", 35, "Chicago"],
  ];

  const csvString = csvData.map((row) => row.join(",")).join("\n");
  console.log(csvString);
  // Output:
  // Name,Age,City
  // Alice,30,New York
  // Bob,25,Los Angeles
  // Charlie,35,Chicago

  // Real cases of use:

  // .join() - Formatting a list of items for display:

  const items = ["item1", "item2", "item3"];
  const formattedList = items.join(", ");
  console.log("Items:", formattedList); // "Items: item1, item2, item3"

  // .join() - Creating list of tags for a blog post:

  const tags = ["JavaScript", "Programming", "Web Development"];
  const tagString = tags.join(" | ");
  console.log("Tags:", tagString); // "Tags: JavaScript | Programming | Web Development"

  // 10. .map(): The .map() method in JavaScript is used to create a new array by applying a specified function to each element in an existing array. It takes a callback function as an argument, which is called for each element in the array. The .map() method returns a new array containing the results of applying the callback function to each element. It is useful for transforming, modifying, or extracting values from an array. The difference between .map() and .forEach() is that .map() returns a new array with the transformed elements, while .forEach() does not return a new array. In general is recommend to use .map() when you want to transform the elements of an array and create a new array with the transformed values. .map() is a type of keyed collection, where each element is associated with a key or index. That practice of copy a collection and transform it is called immutability and it is a good practice in functional programming.

  // .map() - Examples:

  const numbersMap = [1, 2, 3, 4, 5];
  const squaredNumbers = numbersMap.map((number) => number ** 2);
  console.log(squaredNumbers); // [1, 4, 9, 16, 25]

  // Real cases of use:

  // .map() - Formatting data for display in a web application:

  const data = [10, 20, 30, 40, 50];
  const formattedData = data.map((value) => `$${value}`);
  console.log("Formatted data:", formattedData.join(", ")); // Formatted data: "$10, $20, $30, $40, $50"

  // .map() - Extracting specific properties from an array of objects:

  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const userNames = users.map((user) => user.name);
  console.log("User names:", userNames.join(", ")); // User names: Alice, Bob, Charlie

  // A more complex example for .map():
  const productsMap = [
    { name: "Product 1", price: 10, category: "Electronics" },
    { name: "Product 2", price: 20, category: "Clothing" },
    { name: "Product 3", price: 30, category: "Electronics" },
    { name: "Product 4", price: 40, category: "Home" },
    { name: "Product 5", price: 50, category: "Clothing" },
  ];

  const productNamesMap = productsMap.map((product) => product.name);
  console.log("Product names:", productNamesMap.join(", ")); // Product names: Product 1, Product 2, Product 3, Product 4, Product 5

  // 10.1. .flatMap(): The .flatMap() method in JavaScript is used to first map each element of an array using a mapping function, and then flatten the result into a new array. It combines the functionality of .map() and .flat() methods. The .flatMap() method is useful for transforming and flattening nested arrays in a single step. It is particularly useful when you want to apply a transformation to each element and then flatten the resulting arrays into a single array.
  
  // .flatMap() - Examples:
  const numbersFlatMap = [1, 2, 3];
  const flatMapped = numbersFlatMap.flatMap((number) => [number, number * 2]);
  console.log(flatMapped); // [1, 2, 2, 4, 3, 6]

  // Real cases of use:

  // .flatMap() - Transforming and flattening nested arrays:
  const nestedArrays = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  const flattened = nestedArrays.flatMap((array) => array.map((num) => num * 2));
  console.log(flattened); // [2, 4, 6, 8, 10, 12]

  // 11. .push(): The .push() method in JavaScript is used to add one or more elements to the end of an array. It takes one or more arguments, which are appended to the array in the order they are provided. The .push() method modifies the original array and returns the new length of the array. It is useful for adding elements to an array dynamically.

  // .push() - Examples:

  const numbersPush = [1, 2, 3, 4, 5];
  numbersPush.push(6);
  console.log(numbersPush); // [1, 2, 3, 4, 5, 6]

  numbersPush.push(7, 8, 9);
  console.log(numbersPush); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // A more complex example for .push():
  const arrayPush = [];
  for (let i = 1; i <= 10; i++) {
    arrayPush.push(i);
  }
  console.log(arrayPush); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Real cases of use:

  // .push() - Adding items to a shopping cart:

  const shoppingCartPush = [];

  shoppingCartPush.push({ name: "Product 1", price: 10 });
  shoppingCartPush.push({ name: "Product 2", price: 20 });

  console.log("Shopping cart:", shoppingCartPush); // Shopping cart: [{ name: "Product 1", price: 10 }, { name: "Product 2", price: 20 }]

  // .push() - Building a list of tasks in a to-do list application:
  const todoListPush = [];
  todoListPush.push("Learn JavaScript");
  todoListPush.push("Build a project");
  todoListPush.push("Review code");
  console.log("To-Do List:", todoListPush); // To-Do List: ["Learn JavaScript", "Build a project", "Review code"] We can then use an HTML interface to display and manage the to-do list.
  

  // 12. .reduce(): The .reduce() method in JavaScript is used to reduce an array to a single value by applying a specified function to each element in the array. It takes a callback function and an optional initial value as arguments. The callback function is called for each element in the array, and the result is accumulated into a single value. The .reduce() method returns the final accumulated value. It is useful for calculating totals, aggregating data, and performing complex transformations on arrays. The difference between .reduce() and .map() is that .reduce() reduces an array to a single value, while .map() transforms each element of an array and returns a new array with the transformed values.
  // The value of 0 in the second argument of the .reduce() method is the initial value of the accumulator. The first argument of the reduce method is a callback function that takes two parameters: the accumulator and the current value of the array. The callback function returns the new value of the accumulator after processing the current value.
  // reduce is also a type of keyed collection, where each element is associated with a key or index. That practice of copy a collection and transform it is called immutability and it is a good practice in functional programming.
  // For strings, you can use .reduce() to concatenate all the strings in an array into a single string.

  // .reduce() - Examples:

  const numbersReduce = [1, 2, 3, 4, 5];

  const sumReduce = numbersReduce.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(sumReduce); // 15

  // Real cases of use:

  // .reduce() - Calculating the total price of items in a shopping cart:

  const shoppingCartReduce = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];

  const totalPriceReduce = shoppingCartReduce.reduce(
    (total, item) => total + item.price,
    0
  );

  console.log("Total price:", totalPriceReduce); // Total price: 60

  // .reduce() - Counting occurrences of elements in an array:

  const fruitsReduce = ["apple", "banana", "orange", "apple", "banana", "apple"];
  const fruitCount = fruitsReduce.reduce((count, fruit) => { // count is the accumulator, fruit is the current value
    count[fruit] = (count[fruit] || 0) + 1; // Count occurrences of each fruit
    return count; // Return the updated count object
  }, {});
  console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }

  // A more complex example for .reduce():

  const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 75 },
  ];
  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === "deposit"
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);
  console.log("Balance:", balance); // Balance: 175

  // .reduce() - Concatenating strings in an array:
  const wordsReduce = ["Hello", "world", "this", "is", "JavaScript"];
  const sentenceReduce = wordsReduce.reduce((acc, word) => acc + " " + word, "");
  console.log(sentenceReduce.trim()); // "Hello world this is JavaScript"

  // .reduce() - Grouping objects by a property:
  const peopleReduce = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 },
  ];

  const groupedByAge = peopleReduce.reduce((acc, person) => {
    const ageGroup = person.age;
    if (!acc[ageGroup]) {
      acc[ageGroup] = [];
    }
    acc[ageGroup].push(person.name);
    return acc;
  }, {});

  console.log(groupedByAge);
  // Output: { '25': [ 'Alice', 'Charlie' ], '30': [ 'Bob', 'David' ], '35': [ 'Eve' ] }

  // 13. .some(): The .some() method in JavaScript is used to check if at least one element in an array passes a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .some() method returns true if at least one element satisfies the condition, and false otherwise. It is useful for checking if any element meets a specific criteria or condition.

  // .some() - Examples:

  const numbersSome = [1, 2, 3, 4, 5];

  const hasNegativeNumber = numbersSome.some((number) => number < 0);

  console.log(hasNegativeNumber); // false

  // Other examples for .some():
  const wordsSome = ["apple", "banana", "cherry"];
  const hasLongWord = wordsSome.some((word) => word.length > 6);
  console.log(hasLongWord); // false

  const hasWordWithA = wordsSome.some((word) => word.includes("a"));
  console.log(hasWordWithA); // true

  const finishWordWithY = wordsSome.some((word) => word.endsWith("y"));
  console.log(finishWordWithY); // true

  // Real case of use:

  // .some() - Checking if any item is on sale in an e-commerce website:

  const productsSome = [
    { name: "Product 1", price: 10, onSale: false },
    { name: "Product 2", price: 20, onSale: true },
    { name: "Product 3", price: 30, onSale: false },
  ];

  const hasSale = productsSome.some((product) => product.onSale);

  console.log("Sale available:", hasSale); // Sale available: true

  // 14. .sort(): The .sort() method in JavaScript is used to sort the elements of an array in place. By default, the .sort() method sorts the elements as strings in ascending order. It modifies the original array and returns the sorted array. The .sort() method can also take a compare function as an argument to specify a custom sorting order. It is useful for arranging elements in a specific order, such as alphabetical, numerical, or custom sorting criteria.

  // .sort() - Examples:

  const numbersSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

  numbersSort.sort();

  console.log(numbersSort); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

  // A more complex example for .sort():

  const wordsSort = ["banana", "apple", "cherry", "date"];

  wordsSort.sort();

  console.log(wordsSort); // ["apple", "banana", "cherry", "date"]

  // .sort() example with another string, but changing the order to descending:
  const wordsDesc = ["banana", "apple", "cherry", "date"];
  wordsDesc.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
  console.log(wordsDesc); // ["date", "cherry", "banana", "apple"]

  // .sort() example with string length:
  const wordsByLength = ["banana", "apple", "cherry", "date"];
  wordsByLength.sort((a, b) => a.length - b.length);
  console.log(wordsByLength); // ["date", "apple", "banana", "cherry"]

  // .sort() example with string length in descending order:
  const wordsByLengthDesc = ["banana", "apple", "cherry", "date"];
  wordsByLengthDesc.sort((a, b) => b.length - a.length);
  console.log(wordsByLengthDesc); // ["date", "banana", "cherry", "apple"]

  // Sorting numbers in ascending order
  const numbersAsc = [10, 5, 20, 15];
  numbersAsc.sort((a, b) => a - b);
  console.log(numbersAsc); // [5, 10, 15, 20]

  // Real cases of use:

  // .sort() - Sorting products by price in an e-commerce website:

  const productsSort = [
    { name: "Product 1", price: 30 },
    { name: "Product 2", price: 10 },
    { name: "Product 3", price: 20 },
  ];

  productsSort.sort((a, b) => a.price - b.price);

  console.log("Sorted products:", productsSort); // Sorted products: [{ name: "Product 2", price: 10 }, { name: "Product 3", price: 20 }, { name: "Product 1", price: 30 }]

  // 15. .splice(): The .splice() method in JavaScript is used to add or remove elements from an array at a specified index. It takes three arguments: the start index, the number of elements to remove, and optional elements to add. The .splice() method modifies the original array and returns the removed elements as a new array. It is useful for inserting, removing, or replacing elements in an array.

  // .splice() - Examples:

  const numbersSplice = [1, 2, 3, 4, 5];

  const removedNumbers = numbersSplice.splice(2, 2);

  console.log(removedNumbers); // [3, 4]
  console.log(numbersSplice); // [1, 2, 5]

  numbersSplice.splice(2, 0, 3, 4);
  console.log(numbersSplice); // [1, 2, 3, 4, 5]

  // Real cases of use:

  // .splice() - Removing items from a shopping cart:

  const shoppingCartSplice = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];

  const removedItems = shoppingCartSplice.splice(1, 2);

  console.log("Removed items:", removedItems); // Removed items: [{ name: "Product 2", price: 20 }, { name: "Product 3", price: 30 }]
  console.log("Updated shopping cart:", shoppingCartSplice); // Updated shopping cart: [{ name: "Product 1", price: 10 }]

  const addedItems = shoppingCartSplice.splice(1, 0, { name: "Product 2", price: 20 }, { name: "Product 3", price: 30 });
  console.log("New shopping cart:", shoppingCartSplice); // New shopping cart: [{ name: "Product 1", price: 10 }, { name: "Product 2", price: 20 }, { name: "Product 3", price: 30 }]

  // 16. ?. (optional chaining): The optional chaining operator (?.) in JavaScript is used to access properties of an object without causing an error if the property is undefined or null. It allows you to safely navigate nested object properties without checking for each level of existence. The optional chaining operator returns undefined if any property in the chain is null or undefined. It is useful for handling optional properties, nested objects, and avoiding "TypeError: Cannot read property 'x' of undefined" errors.

  // ?. (optional chaining) - Examples:

  let userOptionalChaining = {
    name: "Ernestico",
    address: {
      city: "San Francisco",
    },
  };

  console.log(userOptionalChaining.address?.city); // "San Francisco

  userOptionalChaining = {
    name: "Ernestico",
  };

  console.log(userOptionalChaining.address?.city); // undefined

  // A more complex example for optional chaining:
  const order = {
    id: 123,
    customer: {
      name: "John Doe",
      address: {
        street: "123 Main St",
        city: "Anytown",
      }, 
    },
  };

  console.log(order.customer?.address?.city); // "Anytown"
  console.log(order.shipping?.address?.city); // undefined

  // Real cases of use:
  // ?. (optional chaining) - Accessing nested properties in API responses:

  const apiResponseOptionalChaining = {
    data: {
      user: {
        name: "Alice",
        profile: {
          age: 30,
        },
      },
    },
  };
  console.log(apiResponseOptionalChaining.data.user?.profile?.age); // 30
  console.log(apiResponseOptionalChaining.data.user?.settings?.theme); // undefined

  // ?. (optional chaining) - Handling optional properties in configuration objects:

  const config = {
    database: {
      host: "localhost",
      port: 5432,
    },
    server: {
      host: "localhost",
      port: 3000,
    },
  };

  console.log(config.database?.username); // undefined
  console.log(config.server?.port); // 3000

  // 17. Arrays of objects: Arrays of objects in JavaScript are used to store collections of related data in a structured format. Each element in the array is an object that contains key-value pairs of properties and values. Arrays of objects are useful for representing complex data structures, such as lists of products, users, or items. They allow you to group related data together and perform operations on the collection as a whole.

  // Arrays of objects - Examples:

  const productsArray = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];

  console.log(productsArray[0].name); // "Product 1"
  console.log(productsArray[1].price); // 20
  console.log(productsArray.length); // 3

  // Real cases of use:

  // Arrays of objects - Storing user information in a web application:

  const usersArray = [
    { name: "User 1", email: "user1@email.com" },
    { name: "User 2", email: "user2@email.com" },
    { name: "User 3", email: "user3@email.com" },
  ];

  console.log(usersArray[0].name); // "User 1"
  console.log(usersArray[1].email); // "user2@email.com"
  console.log(usersArray.length); // 3

  // Arrays of objects - Managing a list of tasks in a to-do list application:

  const tasksArray = [
    { title: "Task 1", completed: false },
    { title: "Task 2", completed: true },
    { title: "Task 3", completed: false },
  ];
  console.log(tasksArray[0].title); // "Task 1"
  console.log(tasksArray[1].completed); // true
  console.log(tasksArray.length); // 3

  // Arrays of objects - Filtering tasks by completion status:
  const completedTasksStatus = tasksArray.filter((task) => task.completed);
  console.log(completedTasksStatus); // [{ title: "Task 2", completed: true }]

  // 18. [] get item: The [] operator in JavaScript is used to access elements in an array by their index. It takes an index as an argument and returns the element at that index. The [] operator is used to retrieve, update, or remove elements from an array. It is useful for working with arrays and accessing individual elements by their position.

  // [] get item - Examples:

  const numbersGetItem = [1, 2, 3, 4, 5];

  console.log(numbersGetItem[0]); // 1

  const firstNumber = numbersGetItem[0];
  console.log(firstNumber); // 1

  // 19. Destructuring: Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner. It allows you to unpack values from arrays or objects into individual variables using a syntax that mirrors the structure of the array or object. Destructuring is useful for working with complex data structures, such as arrays of objects or nested objects.

  // Destructuring - Examples:

  const numbersDestructuring = [1, 2, 3];

  const [first, second, third] = numbersDestructuring;

  console.log(first); // 1
  console.log(second); // 2
  console.log(third); // 3

  const userDestructuring = {
    name: "Ernestico",
    age: 25,
  };

  const { name, age } = userDestructuring;

  console.log(name); // "Ernestico"
  console.log(age); // 25

  // Real cases of use:

  // Destructuring - Extracting data from an API response:

  const apiResponse = {
    data: {
      id: 1,
      name: "Product 1",
      price: 10,
    },
  };

  const { id, nameApi, price } = apiResponse.data;

  console.log(nameApi); // "Product 1"
  console.log(price); // 10
  console.log(id); // 1

  // Destructuring - Simplifying function parameters:

  function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }

  const user = {
    name: "Ernestico",
    age: 25,
  };

  printUser(user);

  function printUserWithoutDestructuring(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  }

  const userNoDestructuring = {
    name: "Roca",
    age: 25,
  };

  printUserWithoutDestructuring(userNoDestructuring); // Name: Roca, Age: 25


  // Destructuring in React components:

  const UserComponent = ({ name, age }) => {
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
      </div>
    );
  };

  const userProps = {
    name: "Ernestico",
    age: 25,
  };

  <UserComponent {...userProps} />;

  // 20. [] set item: The [] operator in JavaScript is used to update elements in an array by their index. It takes an index and a new value as arguments and assigns the new value to the element at that index. The [] operator is used to update, add, or remove elements from an array. It is useful for modifying arrays and updating individual elements by their position.

  // [] set item - Examples:

  const numbersSetItem = [1, 2, 3, 4, 5];

  numbersSetItem[0] = 10;

  console.log(numbersSetItem); // [10, 2, 3, 4, 5]

  numbersSetItem[2] = 30;

  console.log(numbersSetItem); // [10, 2, 30, 4, 5]

  // Real cases of use:

  // [] set item - Updating items in a shopping cart:

  const shoppingCartSetItem = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];

  shoppingCartSetItem[1].price = 25;

  console.log(shoppingCartSetItem); // [{ name: "Product 1", price: 10 }, { name: "Product 2", price: 25 }, { name: "Product 3", price: 30 }]

  // 21. Typed arrays: Typed arrays in JavaScript are used to store and manipulate binary data in a structured format. They provide a way to work with raw binary data, such as integers, floats, and bytes, in a memory-efficient manner. Typed arrays are optimized for performance and memory usage and are commonly used in web development for handling network data, file I/O, and graphics processing.

  // ArrayBuffer is a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create a typed array or a DataView object that represents the buffer in a specific format, and use that to read and write the contents of the buffer.

  // DataView provides a low-level interface for reading and writing multiple number types in an ArrayBuffer irrespective of the platform's endianness.

  // Buffer refers to a region of memory allocated to store binary data. It is an instance of the ArrayBuffer class.

  // Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, and Float64Array are typed array classes that represent arrays of 8-bit, 16-bit, 32-bit integers (signed and unsigned), and 32-bit and 64-bit floating-point numbers, respectively.

  // Typed arrays - Examples:

  const buffer = new ArrayBuffer(16); // 16 bytes
  const view = new DataView(buffer);

  view.setUint8(0, 1);
  const int32Array = new Int32Array(buffer); // interprets memory as 4 x 4-byte integers
  const int16Array = new Int16Array(buffer); // interprets memory as 8 x 2-byte integers
  const int8Array = new Int8Array(buffer); // interprets memory as 16 x 1-byte integers


  console.log(buffer); // ArrayBuffer { byteLength: 16 }
  console.log(int32Array); // Int32Array(4) [ 67305985, 0, 0, 0 ]
  console.log(int16Array); // Int16Array(8) [ 257, 258, 0, 0, 0, 0, 0, 0 ]
  console.log(int8Array); // Int8Array(16) [ 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

  buffer.byteLength; // 16
  int32Array.length; // 4


  int32Array[0] = 42;
  console.log(int32Array[0]); // 42

  /* ✅ ArrayBuffer = raw memory
    ✅ Int32Array = interprets it as 4 integers
    ✅ Memory-efficient, fast, fixed-size, perfect for binary operations
 */ 

  // Real cases of use:

  // Typed arrays - Processing binary data in a web application:

  const bufferTyped = new ArrayBuffer(8);

  const float64Array = new Float64Array(bufferTyped);

  float64Array[0] = 3.14;

  console.log(float64Array[0]); // 3.14
}

/* 13. Classes */

{
  // 1. Classes: Classes in JavaScript are used to define blueprints for creating objects with shared properties and methods. They provide a way to create objects with similar characteristics and behaviors by encapsulating data and functionality into a single unit. Classes are a fundamental concept in object-oriented programming (OOP) and are used to model real-world entities, such as users, products, or vehicles.

  // In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

  // Classes - Examples:

  // class MyClass {
  //   // class methods
  //   constructor() { ... }
  //   method1() { ... }
  //   method2() { ... }
  //   method3() { ... }
  //   ...
  // }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old`
      );
    }
  }

  const person = new Person("Ernestico", 25);
  person.greet(); // "Hello, my name is Ernestico and I am 25 years old"

  // 2. Getters: Getters in JavaScript are used to define computed properties that are accessed like object properties but are computed on the fly. They allow you to define custom behavior when accessing a property of an object. Getters are useful for calculating derived values, formatting data, or performing validation logic.

  // Getters - Examples:

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    get area() {
      return Math.PI * this.radius ** 2;
    }
  }

  const circle = new Circle(5);
  console.log(circle.area); // 78.54

  // Real cases of use:

  // Getters - Calculating the total price of items in a shopping cart:

  class ShoppingCart {
    constructor(items) {
      this.items = items;
    }

    get totalPrice() {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  }

  const shoppingCart = new ShoppingCart([
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ]);

  console.log(shoppingCart.totalPrice); // 60

  // 3. Inheritance: Inheritance in JavaScript is a mechanism that allows a class to inherit properties and methods from another class. It enables code reuse and promotes a hierarchical structure of classes. Inheritance is a fundamental concept in object-oriented programming (OOP) and is used to model relationships between objects.

  {
    // 3.1. Class vs Function: The class keyword in JavaScript is used to define a class, which is a blueprint for creating objects with shared properties and methods. Classes provide a way to create objects with similar characteristics and behaviors by encapsulating data and functionality into a single unit. Classes are a fundamental concept in object-oriented programming (OOP) and are used to model real-world entities, such as users, products, or vehicles. Functions in JavaScript are used to define reusable blocks of code that can be called and executed multiple times. Functions can take parameters, return values, and perform specific tasks. They are a fundamental building block of JavaScript and are used for organizing and structuring code.

    // 3.2 Private class fields: Private class fields in JavaScript are used to define private properties and methods that are accessible only within the class. They provide encapsulation and data hiding by restricting access to internal class members. Private class fields are declared using the # symbol before the field name. They are useful for protecting sensitive data, preventing external modifications, and enforcing encapsulation.

    // Private class fields - Examples:

    class Counter {
      #count = 0;

      increment() {
        this.#count++;
      }

      decrement() {
        this.#count--;
      }

      getCount() {
        return this.#count;
      }
    }

    const counter = new Counter();

    counter.increment();
    counter.increment();
    counter.decrement();

    console.log(counter.getCount()); // 1

    // 3.3. Public class fields: Public class fields in JavaScript are used to define public properties and methods that are accessible outside the class. They provide a way to expose class members to external code and allow for interaction with the class. Public class fields are declared without the # symbol before the field name. They are useful for defining properties and methods that can be accessed and modified from external code.

    // Public class fields - Examples:

    class Person {
      name = "Ernestico";
      age = 25;

      greet() {
        console.log(
          `Hello, my name is ${this.name} and I am ${this.age} years old`
        );
      }
    }

    const person = new Person();

    console.log(person.name); // "Ernestico"

    person.greet(); // "Hello, my name is Ernestico and I am 25 years old"

    // 3.4. Inheritance: Inheritance in JavaScript is a mechanism that allows a class to inherit properties and methods from another class. It enables code reuse and promotes a hierarchical structure of classes. Inheritance is a fundamental concept in object-oriented programming (OOP) and is used to model relationships between objects.

    // Inheritance - Examples:

    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`${this.name} makes a sound`);
      }
    }

    class Dog extends Animal {
      speak() {
        console.log(`${this.name} barks`);
      }
    }

    const dog = new Dog("Buddy");
  }

  // 3.5. Prototypal inheritance: Prototypal inheritance in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. It is based on the prototype chain, where objects inherit from other objects through a prototype link. Prototypal inheritance is a fundamental concept in JavaScript and is used to model relationships between objects. The relation between prototypal inheritance and inheritance is that prototypal inheritance is a specific type of inheritance that is based on the prototype chain. Other types of inheritance, such as class-based inheritance, are also used in object-oriented programming.

  // Prototypal inheritance - Examples:

  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
  };

  function Dog(name) {
    Animal.call(this, name);
  }

  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.speak = function () {
    console.log(`${this.name} barks`);
  };

  const dog = new Dog("Buddy");

  dog.speak(); // "Buddy barks"

  //  3.6. Prototype chain: The prototype chain in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects through a prototype link. It is a fundamental concept in JavaScript and is used to model relationships between objects. The prototype chain is a chain of objects linked through their prototype property, where each object inherits from its prototype object. The prototype chain enables objects to share behavior and functionality through inheritance.

  // Prototype chain - Examples:

  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
  };

  function Dog(name) {
    Animal.call(this, name);
  }

  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.speak = function () {
    console.log(`${this.name} barks`);
  };

  const dog2 = new Dog("Buddy");

  console.log(dog2 instanceof Dog); // true
  console.log(dog2 instanceof Animal); // true

  // 3.7. Super keyword: The super keyword in JavaScript is used to call methods on the superclass within a subclass. It is used to access and invoke methods defined on the superclass from the subclass. The super keyword is useful for reusing behavior and functionality from the superclass in the subclass. It allows you to call the constructor, methods, and properties of the superclass from the subclass.

  // Super keyword - Examples:

  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }

    speak() {
      super.speak();
      console.log(`${this.name} barks`);
    }
  }

  const dog3 = new Dog("Buddy", "Golden Retriever");

  dog3.speak(); // "Buddy makes a sound" "Buddy barks"

  // Real cases of use:

  // Super keyword - Extending built-in classes in JavaScript:

  class CustomArray extends Array {
    constructor(...args) {
      super(...args);
    }

    unique() {
      return [...new Set(this)];
    }
  }

  const numbers = new CustomArray(1, 2, 3, 1, 2, 3);

  console.log(numbers.unique()); // [1, 2, 3]

  // 4. Instance methods: Instance methods in JavaScript are methods that are defined on the prototype of a class and are accessible on instances of the class. They provide behavior and functionality that can be shared across multiple instances of the class. Instance methods are used to define actions and operations that can be performed on individual objects created from the class.

  // Instance methods examples:

  // Example 1: Basic Class with Instance Methods
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // Instance method
    startEngine() {
      return `${this.make} ${this.model}'s engine has started.`;
    }

    // Instance method
    displayDetails() {
      return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
    }
  }

  // Creating instances
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Honda", "Civic", 2022);

  // Using instance methods
  console.log(car1.startEngine()); // Output: Toyota Corolla's engine has started.
  console.log(car2.displayDetails()); // Output: Car: Honda Civic, Year: 2022

  // Example 2: Advanced Instance Methods with Operations
  class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }

    // Instance method: Deposit money
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be positive.";
      }
      this.balance += amount;
      return `Deposited $${amount}. New balance: $${this.balance}.`;
    }

    // Instance method: Withdraw money
    withdraw(amount) {
      if (amount > this.balance) {
        return "Insufficient funds.";
      }
      this.balance -= amount;
      return `Withdrew $${amount}. Remaining balance: $${this.balance}.`;
    }
  }

  // Creating an instance
  const myAccount = new BankAccount("John Doe", 500);

  // Using instance methods
  console.log(myAccount.deposit(200)); // Output: Deposited $200. New balance: $700.
  console.log(myAccount.withdraw(100)); // Output: Withdrew $100. Remaining balance: $600.

  // 5. Instance variables: Instance variables in JavaScript are properties that are defined on individual instances of a class. They store data specific to each instance and are accessible through the this keyword within instance methods. Instance variables are used to store state and data associated with individual objects created from the class. They provide a way to encapsulate data within objects and maintain separate state for each instance.

  // Instance variables - Examples:

  class Counter {
    constructor() {
      this.count = 0;
    }

    increment() {
      this.count++;
    }

    decrement() {
      this.count--;
    }

    getCount() {
      return this.count;
    }
  }

  const counter = new Counter();

  counter.increment();

  console.log(counter.getCount()); // 1

  counter.decrement();

  console.log(counter.getCount()); // 0

  // Real cases of use:

  // Instance variables - Tracking user interactions in a web application:

  class UserActivity {
    constructor() {
      this.actions = [];
    }

    logAction(action) {
      this.actions.push(action);
    }

    getActions() {
      return this.actions;
    }
  }

  const userActivity = new UserActivity();

  userActivity.logAction("Clicked on button");

  console.log(userActivity.getActions()); // ["Clicked on button"]

  // 6. Setters: In JavaScript, setters are special methods within classes that allow you to define logic for setting a value to a property. They are part of the getter/setter concept, enabling controlled access to an object's properties. When you assign a value to a property, the setter method for that property is automatically called instead of directly changing the property.

  // Key Features of Setters:
  // Encapsulation: They allow you to control how values are assigned to object properties.
  // Validation: You can add logic to validate or manipulate the data before assigning it to a property.
  // Syntax: Setters are defined using the set keyword.

  // Setters - Examples:

  class BankAccount {
    constructor(owner, initialBalance) {
      this.owner = owner;
      this._balance = initialBalance; // Use an internal property for encapsulation
    }

    // Getter for balance
    get balance() {
      return this._balance;
    }

    // Setter for balance
    set balance(amount) {
      if (amount < 0) {
        console.error("Error: Balance cannot be negative.");
      } else {
        this._balance = amount;
      }
    }

    // Deposit method
    deposit(amount) {
      if (amount > 0) {
        this.balance = this._balance + amount; // Use setter
        console.log(`Deposited: $${amount}`);
      } else {
        console.error("Deposit amount must be positive.");
      }
    }

    // Withdraw method
    withdraw(amount) {
      if (amount > this._balance) {
        console.error("Insufficient funds.");
      } else if (amount > 0) {
        this.balance = this._balance - amount; // Use setter
        console.log(`Withdrew: $${amount}`);
      } else {
        console.error("Withdrawal amount must be positive.");
      }
    }
  }

  // Example Usage
  const account = new BankAccount("Alice", 1000);

  console.log(`Initial Balance: $${account.balance}`); // Getter used

  account.deposit(500); // Adds $500 to balance
  console.log(`Updated Balance: $${account.balance}`);

  account.withdraw(300); // Deducts $300 from balance
  console.log(`Updated Balance: $${account.balance}`);

  account.balance = -100; // Setter blocks this, shows error
  console.log(`Final Balance: $${account.balance}`);

  // Output:
  // Initial Balance: $1000
  // Deposited: $500
  // Updated Balance: $1500
  // Withdrew: $300
  // Updated Balance: $1200
  // Error: Balance cannot be negative.
  // Final Balance: $1200

  // 7. Static Methods: In JavaScript, static methods are methods defined on the class itself rather than on instances of the class. They are used for functionality that doesn't depend on an individual instance of the class and can be called directly on the class without creating an object.

  // Syntax: Static methods are defined using the static keyword:
  class MyClass {
    static myStaticMethod() {
      return "I am a static method!";
    }
  }

  // You call them directly on the class:
  console.log(MyClass.myStaticMethod()); // Output: I am a static method!

  // Static methods cannot be called on instances of the class.
  // They are typically used for utility or helper functions, factory methods, or to define application-wide constants.
}

/* 14. Type Casting */
/* Type conversion (or typecasting) means the transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. The source code can also explicitly require a conversion to take place. */

{
  // 1. Implicit Type Conversion: Implicit type conversion, also known as coercion, is an automatic type conversion by the compiler. It is performed when data types are mixed in expressions. For example, in JavaScript, the addition operator (+) can concatenate strings and add numbers. When a string and a number are added, the string is converted to a number.

  // Implicit Type Conversion - Examples:

  // Example 1: String and Number
  const num = 10;
  const str = "20";

  console.log(num + str); // Output: "1020"

  // Example 2: Boolean and Number

  const bool = true;
  const num2 = 10;

  console.log(bool + num2); // Output: 11

  // 2. Type Conversion/Coercion: Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they convert values from one data type to another with one key difference — type coercion is implicit. In contrast, type conversion can be either implicit or explicit.

  // Type Conversion/Coercion - Examples:

  // Example 1: String to Number

  const strToNum = "10";
  const numFromString = Number(strToNum);

  console.log(numFromString); // Output: 10

  // Example 2: Number to String

  const numToStr = 10;
  const strFromNumber = String(numToStr);

  console.log(strFromNumber); // Output: "10"

  // Example 3: Boolean to Number

  const boolToNum = true;
  const numFromBoolean = Number(boolToNum);

  console.log(numFromBoolean); // Output: 1

  // 3. Explicit Type Casting: Type casting means transferring data from one data type to another by explicitly specifying the type to convert the given data to. Explicit type casting is normally done to make data compatible with other variables. Examples of typecasting methods are parseInt(), parseFloat(), toString().

  // Explicit Type Casting - Examples:

  // Example 1: String to Number

  const strToNumExplicit = "10";
  const numFromStringExplicit = parseInt(strToNumExplicit);

  console.log(numFromStringExplicit); // Output: 10

  // Example 2: Number to String

  const numToStrExplicit = 10;
  const strFromNumberExplicit = numToStrExplicit.toString();

  console.log(strFromNumberExplicit); // Output: "10"

  // Example 3: Boolean to Number

  const boolToNumExplicit = true;
  const numFromBooleanExplicit = Number(boolToNumExplicit);

  console.log(numFromBooleanExplicit); // Output: 1

  // Real cases of use:

  // Explicit Type Casting - Parsing user input in a web application:

  const userInput = "10";
  const numberFromUserInput = parseInt(userInput);

  console.log(numberFromUserInput); // 10
}

/* 15 Data Structures */
/* A Data structure is a format to organize, manage and store data in a way that allows efficient access and modification. JavaScript has primitive (built-in) and non-primitive (not built-in) data structures. Primitive data structures come by default with the programming language and you can implement them out of the box (like arrays and objects). Non-primitive data structures don’t come by default and you have to code them up if you want to use them. */

{
  // 1. Stack Data Structure: A stack is a linear data structure that follows the Last In First Out (LIFO) principle. In a stack, elements are added and removed from the same end, known as the top of the stack. The last element added to the stack is the first one to be removed. Stacks are used in programming for function calls, expression evaluation, and undo mechanisms.

  // Stack Data Structure - Examples:

  class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      this.items.push(element);
    }

    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }

  const stack = new Stack();

  console.log(stack.isEmpty()); // true

  stack.push(10);

  console.log(stack.printStack()); // 10

  stack.push(20);

  console.log(stack.printStack()); // 10 20

  stack.push(30);

  console.log(stack.printStack()); // 10 20 30

  console.log(stack.peek()); // 30

  console.log(stack.pop()); // 30

  console.log(stack.printStack()); // 10 20

  // Real cases of use:

  // Stack Data Structure - Implementing a browser history feature:

  class BrowserHistory {
    constructor() {
      this.history = new Stack();
    }

    visit(url) {
      this.history.push(url);
    }

    goBack() {
      return this.history.pop();
    }

    getCurrentPage() {
      return this.history.peek();
    }
  }

  const browser = new BrowserHistory();

  browser.visit("https://www.google.com");

  browser.visit("https://www.facebook.com");

  console.log(browser.getCurrentPage()); // "https://www.facebook.com"

  browser.visit("https://www.twitter.com");

  console.log(browser.getCurrentPage()); // "https://www.twitter.com"

  console.log(browser.goBack()); // "https://www.facebook.com"

  console.log(browser.getCurrentPage()); // "https://www.facebook.com"

  // 2. Queue Data Structure: A queue is a linear data structure that follows the First In First Out (FIFO) principle. In a queue, elements are added at the rear end and removed from the front end. The first element added to the queue is the first one to be removed. Queues are used in programming for task scheduling, breadth-first search, and printer queues.

  // Queue Data Structure - Examples:

  class Queue {
    constructor() {
      this.items = [];
    }

    enqueue(element) {
      this.items.push(element);
    }

    dequeue() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.shift();
    }

    front() {
      if (this.items.length === 0) {
        return "No elements in Queue";
      }
      return this.items[0];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }

  const queue = new Queue();

  console.log(queue.isEmpty()); // true

  queue.enqueue(10);

  console.log(queue.printQueue()); // 10

  queue.enqueue(20);

  console.log(queue.printQueue()); // 10 20

  queue.enqueue(30);

  console.log(queue.printQueue()); // 10 20 30

  console.log(queue.front()); // 10

  console.log(queue.dequeue()); // 10

  console.log(queue.printQueue()); // 20 30

  // Real cases of use:

  // Queue Data Structure - Implementing a task scheduler in a web application:

  class TaskScheduler {
    constructor() {
      this.queue = new Queue();
    }

    addTask(task) {
      this.queue.enqueue(task);
    }

    processTasks() {
      while (!this.queue.isEmpty()) {
        const task = this.queue.dequeue();
        console.log(`Processing task: ${task}`);
      }
    }
  }

  const scheduler = new TaskScheduler();

  scheduler.addTask("Task 1");
  scheduler.addTask("Task 2");
  scheduler.addTask("Task 3");

  scheduler.processTasks();

  // Output:

  // Processing task: Task 1
  // Processing task: Task 2
  // Processing task: Task 3

  // 3. Recursion: Recursion is a programming technique where a function calls itself to solve a problem. It is a powerful concept that allows functions to break down complex problems into simpler subproblems. Recursion is commonly used in algorithms, data structures, and mathematical computations. In computer science, recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem. Recursion solves such recursive problems by using functions that call themselves from within their own code. For example, we can define the operation "find your way home" as: If you are at home, stop moving. Take one step toward home. Recursively apply this operation until you are home.

  // Recursion - Examples:

  // Example 1: Factorial using Recursion

  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(5)); // Output: 120

  // Example 2: Fibonacci using Recursion

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log(fibonacci(6)); // Output: 8

  // Real cases of use:

  // Recursion - Traversing a directory structure in a file system:

  function traverseDirectory(directory) {
    const files = directory.getFiles();
    files.forEach((file) => {
      if (file.isDirectory()) {
        traverseDirectory(file);
      } else {
        console.log(file.getName());
      }
    });
  }

  const rootDirectory = new Directory("root");

  traverseDirectory(rootDirectory);

  // 4. Binary Tree Algorithms for Technical Interviews: Binary trees are a fundamental data structure in computer science used to represent hierarchical relationships between elements. They consist of nodes, each with a value and two child nodes (left and right). Binary trees are commonly used in algorithms and data structures, such as binary search trees, binary heaps, and expression trees. Understanding binary trees and their algorithms is essential for technical interviews in software engineering and computer science.

  // Binary Tree Algorithms for Technical Interviews - Examples:

  // Example 1: Binary Search Tree (BST) Implementation

  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newNode = new Node(value);

      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    search(value) {
      return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
      if (node === null) {
        return false;
      }

      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else if (value > node.value) {
        return this.searchNode(node.right, value);
      } else {
        return true;
      }
    }
  }

  const bst = new BinarySearchTree();

  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);

  console.log(bst.search(7)); // Output: true

  console.log(bst.search(20)); // Output: false

  // Example 2: Depth-First Search (DFS) Algorithm

  class NodeDFS {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTreeDFS {
    constructor() {
      this.root = null;
    }

    dfsInOrder() {
      const result = [];

      function traverse(node) {
        if (node.left) traverse(node.left);
        result.push(node.value);
        if (node.right) traverse(node.right);
      }

      traverse(this.root);

      return result;
    }
  }

  const btdfs = new BinaryTreeDFS();

  btdfs.root = new NodeDFS(10);
  btdfs.root.left = new NodeDFS(5);
  btdfs.root.right = new NodeDFS(15);
  btdfs.root.left.left = new NodeDFS(3);
  btdfs.root.left.right = new NodeDFS(7);

  console.log(btdfs.dfsInOrder()); // Output: [3, 5, 7, 10, 15]

  // Real cases of use:

  // Binary Tree Algorithms for Technical Interviews - Implementing a binary search tree in a search algorithm:

  class BinarySearchTreeSearch {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newNode = new Node(value);

      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    search(value) {
      return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
      if (node === null) {
        return false;
      }

      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else if (value > node.value) {
        return this.searchNode(node.right, value);
      } else {
        return true;
      }
    }
  }

  const bstSearch = new BinarySearchTreeSearch();

  bstSearch.insert(10);
  bstSearch.insert(5);
  bstSearch.insert(15);
  bstSearch.insert(3);
  bstSearch.insert(7);

  console.log(bstSearch.search(7)); // true

  // 5. Graph Algorithms for Technical Interviews: Graphs are a fundamental data structure in computer science used to represent relationships between elements. They consist of nodes (vertices) connected by edges (links). Graphs are commonly used in algorithms and data structures, such as depth-first search, breadth-first search, and shortest path algorithms. Understanding graphs and their algorithms is essential for technical interviews in software engineering and computer science.

  // Graph Algorithms for Technical Interviews - Examples:

  // Example 1: Depth-First Search (DFS) Algorithm

  class GraphDFS {
    constructor() {
      this.adjacencyList = {};
    }

    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }

    dfs(startingVertex) {
      const result = [];
      const visited = {};

      const dfsHelper = (vertex) => {
        if (!vertex) {
          return null;
        }

        visited[vertex] = true;
        result.push(vertex);

        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfsHelper(neighbor);
          }
        });
      };

      dfsHelper(startingVertex);

      return result;
    }
  }

  const graphDFS = new GraphDFS();

  graphDFS.addVertex("A");
  graphDFS.addVertex("B");
  graphDFS.addVertex("C");
  graphDFS.addVertex("D");
  graphDFS.addVertex("E");
  graphDFS.addVertex("F");

  graphDFS.addEdge("A", "B");
  graphDFS.addEdge("A", "C");
  graphDFS.addEdge("B", "D");
  graphDFS.addEdge("C", "E");
  graphDFS.addEdge("D", "E");
  graphDFS.addEdge("D", "F");
  graphDFS.addEdge("E", "F");

  console.log(graphDFS.dfs("A")); // Output: ["A", "B", "D", "E", "C", "F"]

  // 6. Dynamic Programming: Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is a powerful technique used in algorithms and computer science to optimize the time and space complexity of solutions. Dynamic programming is commonly used in problems that involve overlapping subproblems and optimal substructure. It is essential for technical interviews in software engineering and computer science.

  // Dynamic Programming - Examples:

  // Example 1: Fibonacci using Dynamic Programming

  function fibonacciDP(n) {
    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
  }

  console.log(fibonacciDP(6)); // Output: 8
  console.log(fibonacciDP(50)); // Output: 12586269025

  // Example 2: Longest Common Subsequence (LCS) using Dynamic Programming

  function lcsDP(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[m][n];
  }

  console.log(lcsDP("AGGTAB", "GXTXAYB")); // Output: 4

  // Real cases of use:

  // Dynamic Programming - Solving the knapsack problem in a shopping application:

  function knapsackDP(capacity, weights, values, n) {
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            values[i - 1] + dp[i - 1][w - weights[i - 1]],
            dp[i - 1][w]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    return dp[n][capacity];
  }

  const capacity = 50;
  const weights = [10, 20, 30];
  const values = [60, 100, 120];

  console.log(knapsackDP(capacity, weights, values, weights.length)); // Output: 220

  // 7. Structured data: Structured data is used by search-engines, like Google, to understand the content of the page, as well as to gather information about the web and the world in general. It is also coded using in-page markup on the page that the information applies to.

  // Structured data - Examples:

  // Example 1: JSON (JavaScript Object Notation)

  const person = {
    name: "Alice",
    age: 30,
    city: "New York",
  };

  console.log(JSON.stringify(person)); // Output: {"name":"Alice","age":30,"city":"New York"}

  // Example 2: XML (Extensible Markup Language)

  const xml = `
    <person>
      <name>Alice</name>
      <age>30</age>
      <city>New York</city>
    </person>
    `;

  console.log(xml);

  // Real cases of use:

  // Structured data - Adding schema markup to a web page for search engine optimization (SEO):

  /* <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alice",
      "jobTitle": "Software Engineer",
      "email": "example@example.com
    }
    </script>*/

  // 8. JSON: JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa). JSON is language-independent and can be parsed and generated by many programming languages, including JavaScript, Python, and Java.

  // JSON - Examples:

  // Example 1: JSON Object

  const personJSON = `{
      "name": "Alice",
      "age": 30,
      "city": "New York"
    }`;

  const personObject = JSON.parse(personJSON);

  console.log(personObject.name); // Output: "Alice"

  // Example 2: JSON Array

  const fruitsJSON = `["Apple", "Banana", "Orange"]`;

  const fruitsArray = JSON.parse(fruitsJSON);

  console.log(fruitsArray[0]); // Output: "Apple"

  // Real cases of use:

  // JSON - Fetching and parsing JSON data from an API in a web application:

  /* fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data)); */

  // 9. Indexed collections: Indexed collections are data structures that store elements in a specific order and allow for efficient access to elements by their index. Common examples of indexed collections include arrays and strings. Indexed collections are used in programming for storing and accessing data in a structured manner.

  // Indexed collections - Examples: Array, String, TypedArray, Map, Set, WeakMap, WeakSet, ArrayBuffer, SharedArrayBuffer, DataView, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array.
}

/* 17.Working with APIs */

{
  // 1. Making network requests with JavaScript: JavaScript provides several ways to make network requests to APIs and servers. The most common methods for making network requests in JavaScript are the Fetch API and XMLHttpRequest. These methods allow you to send HTTP requests to servers, retrieve data, and handle responses asynchronously. Another very common task in modern websites and applications is making network requests to retrieve individual data items from the server to update sections of a webpage without having to load an entire new page. This seemingly small detail has had a huge impact on the performance and behavior of sites, so in this article, we'll explain the concept and look at technologies that make it possible: in particular, the Fetch API.

  // Example 1: Fetch API

  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data));

  // Example 2: XMLHttpRequest

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.example.com/data", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  xhr.send();

  // 2. Fetch API: The Fetch API provides a modern way to make network requests in JavaScript. It is a promise-based API that allows you to send HTTP requests and handle responses asynchronously. The Fetch API is supported by all modern browsers and provides a more flexible and powerful alternative to the older XMLHttpRequest object. The Fetch API supports various HTTP methods, headers, and request options, making it easy to work with APIs and servers.

  // Fetch API - Examples:

  // Example 1: Fetching JSON data

  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data));

  // Example 2: Fetching text data

  fetch("https://api.example.com/text")
    .then((response) => response.text())
    .then((data) => console.log(data));

  // Example 3: Fetching binary data

  fetch("https://api.example.com/image")
    .then((response) => response.blob())
    .then((data) => console.log(data));

  // 3. XMLHttpRequest: The XMLHttpRequest object is a built-in JavaScript object that allows you to make network requests to servers. It is commonly used to send and receive data from APIs and servers asynchronously. The XMLHttpRequest object provides methods and properties for configuring and sending HTTP requests, handling responses, and working with server data. While the Fetch API is the modern and recommended way to make network requests in JavaScript, the XMLHttpRequest object is still widely used and supported in web browsers.


}

/* 18. Memory Management */

{
  // 1. Memory Management: Memory management is the process of managing computer memory resources, including allocating and deallocating memory for data storage and ensuring efficient use of memory. In JavaScript, memory management is primarily handled by the JavaScript engine, which automatically allocates and frees memory as needed. However, developers can also optimize memory usage in their applications by following best practices and using tools to monitor memory consumption. Low-level languages like C, have manual memory management primitives such as malloc() and free(). In contrast, JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). This automaticity is a potential source of confusion: it can give developers the false impression that they don’t need to worry about memory management.

  // 2. Garbage Collection: Garbage collection is the automatic process of identifying and reclaiming memory that is no longer in use by a program. In JavaScript, garbage collection is performed by the JavaScript engine, which periodically scans the memory for objects that are no longer reachable or referenced by the program. When an object is no longer reachable, it is considered "garbage" and can be safely removed from memory. This process helps prevent memory leaks and ensures efficient use of memory resources.

  // Reachability: Reachability is a concept in memory management that refers to whether an object can be accessed or referenced by the program. In JavaScript, an object is considered reachable if it can be accessed through a variable, property, or function. If an object is no longer reachable, it is eligible for garbage collection and can be removed from memory. For example:

  // 3. Memory Lifecicle: Regardless of the programming language, the memory life cycle is pretty much always the same:
      // - Allocate the memory you need
      // - Use the allocated memory (read, write)
      // - Release the allocated memory when it is not needed anymore
  // The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.

  // Example: 

  // Creating an object and checking its reachability
  
  const obj = { name: "Alice" };

  console.log(obj); // Output: { name: "Alice" }
  console.log(obj.name); // Output: "Alice"
  console.log(obj === null); // Output: false
  console.log(obj === undefined); // Output: false
}

/* 19. JavaScript Chrome Dev Tools */
// These are a set of tools built into the browser to aid frontend developers diagnose and solve various issues in their applications — such as JavaScript and logical bugs, CSS styling issues or even just making quick temporary alterations to the DOM. To enter the dev tools, right click and click Inspect (or press ctrl+shift+c/cmd+opt+c) to enter the Elements panel. Here you can debug CSS and HTML issues. If you want to see logged messages or interact with javascript, enter the Console tab from the tabs above (or press ctrl+shift+j or F12 / cmd+opt+j to enter it directly). Another very useful feature in the Chrome dev tools is the Lighthouse (for checking performance).

{
  // 1. JavaScript Chrome Dev Tools: The Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. It provides a powerful suite of tools for debugging, profiling, and optimizing web applications. The DevTools allow developers to inspect and modify HTML and CSS, debug JavaScript code, analyze network requests, and monitor performance. The DevTools are essential for modern web development and are widely used by developers to improve the quality and performance of their applications.
  // The DevTools are accessible by right-clicking on a web page and selecting "Inspect" or by pressing F12 or Ctrl+Shift+I (Cmd+Option+I on Mac). The DevTools consist of several panels, including Elements, Console, Sources, Network, Performance, Memory, Application, Security, and Lighthouse. Each panel provides specific functionality for inspecting and debugging different aspects of a web application.

  // Debug JavaScript with Chrome Dev Tools: https://www.youtube.com/watch?v=H0XScE08hy8

  // 1. Debugging issues: The DevTools provide a powerful JavaScript debugger that allows developers to set breakpoints, step through code, and inspect variables and call stacks. This helps identify and fix issues in JavaScript code.

  // 2. Debugging Memory Leaks: The DevTools provide tools for analyzing memory usage and identifying memory leaks in web applications. Developers can use the Memory panel to take heap snapshots, record allocation timelines, and analyze memory usage patterns. This helps identify objects that are not being properly garbage collected and can lead to memory leaks.

  // 3. Debugging Performance Issues: The DevTools provide tools for analyzing the performance of web applications. Developers can use the Performance panel to record and analyze CPU usage, rendering performance, and network activity. This helps identify performance bottlenecks and optimize the performance of web applications. Lighthouse is a tool that audits the performance of web applications and provides recommendations for improving performance, accessibility, and SEO.
  // Developers can use Lighthouse to generate reports on the performance of their web applications and identify areas for improvement.
}

/* 20. JS Frameworks */

{
  // 1. React: React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers. React allows developers to create reusable UI components and build complex user interfaces with ease. React uses a declarative programming style, which makes it easier to reason about the application's state and how it changes over time. React is widely used in web development for building single-page applications, progressive web apps, and mobile apps.
  // React - Features:
  // 1. Component-Based Architecture: React follows a component-based architecture where UI elements are broken down into reusable components. Components can be composed together to build complex user interfaces.
  // 2. Virtual DOM: React uses a virtual DOM to optimize the rendering of UI components. The virtual DOM is a lightweight copy of the actual DOM, which allows React to efficiently update the UI when the application state changes.
  // 3. JSX: JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to create UI components and define their structure and behavior.
  // 4. State Management: React provides a simple and efficient way to manage the state of an application. State can be stored in components and updated using the setState() method.
  // 5. React Hooks: React Hooks are functions that allow developers to use state and other React features in functional components. Hooks provide a more flexible and concise way to manage state and side effects in React applications.
  // 6. React Router: React Router is a popular library for handling routing in React applications. It allows developers to define routes and navigate between different views in a single-page application.
  // 7. Context API: React's Context API allows developers to share state between components without having to pass props down the component tree. Context provides a way to manage global state in React applications.
  // Steps to initialize a React App with vite:
  // 1. Install Vite globally:
  // npm install -g create-vite
  // 2. Create a new React project:
  // create-vite react-app
  // 3. Change directory to the project folder:
  // cd react-app
  // 4. Start the development server:
  // npm run dev
  // 5. Open the project in a web browser:
  // http://localhost:3000
  // After this, typically you would start building your React application by creating components, defining routes, managing state, and fetching data from APIs. For example:
  // Example: Creating a simple React component
  // src/App.js file:
  /*
  
  import React from "react";

  function App() {
    return (
      <div>
        <h1>Hello, React!</h1>
      </div>
    );
  }
  
  */
}
