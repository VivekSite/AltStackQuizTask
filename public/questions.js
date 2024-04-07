const questions = [
    {
      question: "What does Node.js use to manage dependencies and facilitate code reuse?",
      options: {
        a: "Packages",
        b: "Modules",
        c: "Functions",
        d: "Objects"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is NOT a core module in Node.js?",
      options: {
        a: "fs (File System)",
        b: "http (HTTP)",
        c: "path (Path)",
        d: "express (Express.js)"
      },
      correctAnswer: "d"
    },
    {
      question: "In Node.js, what is used to handle asynchronous operations?",
      options: {
        a: "Callbacks",
        b: "Promises",
        c: "Synchronous functions",
        d: "Events"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the primary function of the event loop in Node.js?",
      options: {
        a: "Manage network requests",
        b: "Handle database operations",
        c: "Execute asynchronous tasks",
        d: "Control the flow of synchronous code"
      },
      correctAnswer: "c"
    },
    {
      question: "Which function in Node.js is used to include external modules?",
      options: {
        a: "require()",
        b: "import()",
        c: "include()",
        d: "use()"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following is NOT true about the 'http' module in Node.js?",
      options: {
        a: "It can be used to create HTTP servers",
        b: "It can be used to make HTTP requests",
        c: "It provides built-in encryption features",
        d: "It is a core module"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the purpose of the 'npm' command in Node.js?",
      options: {
        a: "To create new Node.js projects",
        b: "To install Node.js modules",
        c: "To start a Node.js server",
        d: "To execute JavaScript files"
      },
      correctAnswer: "b"
    },
    {
      question: "Which method is used to register an event listener in Node.js?",
      options: {
        a: "addEventListener()",
        b: "on()",
        c: "listen()",
        d: "subscribe()"
      },
      correctAnswer: "b"
    },
    {
      question: "What does the 'fs' module in Node.js stand for?",
      options: {
        a: "File System",
        b: "Function Stream",
        c: "Format String",
        d: "File Sync"
      },
      correctAnswer: "a"
    },
    {
      question: "Which command is used to start a Node.js application?",
      options: {
        a: "node start",
        b: "npm run start",
        c: "node app.js",
        d: "npm start"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the purpose of the 'process' global object in Node.js?",
      options: {
        a: "To manage system processes",
        b: "To interact with the filesystem",
        c: "To provide information about the current process",
        d: "To handle network requests"
      },
      correctAnswer: "c"
    },
    {
      question: "Which method is used to write data to a file asynchronously in Node.js?",
      options: {
        a: "writeFile()",
        b: "writeFileSync()",
        c: "writeFileAsync()",
        d: "saveFile()"
      },
      correctAnswer: "a"
    },
    {
      question: "Which module is commonly used for building web servers in Node.js?",
      options: {
        a: "http",
        b: "fs",
        c: "path",
        d: "os"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the purpose of the 'module.exports' object in Node.js?",
      options: {
        a: "To import modules",
        b: "To export functions, objects, or primitive values from a module",
        c: "To define global variables",
        d: "To handle HTTP requests"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is NOT a valid way to handle errors in Node.js?",
      options: {
        a: "Using try-catch blocks",
        b: "Using the 'error' event",
        c: "Using callback functions",
        d: "Using the 'catchError' method"
      },
      correctAnswer: "d"
    }
];
  
  
export default questions;