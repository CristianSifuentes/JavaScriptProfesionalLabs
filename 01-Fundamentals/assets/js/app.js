// console.log("Hi, from app.js!");

// comments are ignored by JavaScript interpreter
// This is a single-line comment

/*  */

/* This is a multi-line comment
   that spans multiple lines
   and is useful for longer explanations or documentation.
*/

console.log("This is a message from app.js");
 // You can run this file using Node.js or include it in an HTML file to see the output in the browser console.


 let message = "Hello from app.js!";
    console.log(message);
var anotherMessage = "This is another message.";
    console.log(anotherMessage);
const constantMessage = "This message cannot be changed.";
    console.log(constantMessage);

    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log("The sum of a and b is:", sum);


    message = "Message has been changed.";
    console.log(message);
    anotherMessage = "Another message has also been changed.";
    console.log(anotherMessage);

// const you cannot reassign a constant variable
// constantMessage = "Trying to change the constant message."; // This will throw an error

// Demonstrating variable scope
function demoScope() {
    let localVar = "I am local to this function.";
    console.log(localVar);
}
demoScope();
// console.log(localVar); // This will throw an error because localVar is not defined outside the function 

// Global object window in browsers
// In Node.js, the global object is 'global'
console.log("Global Object:", this); // In browsers, 'this' refers to the window object

// let vs var
function varLetDemo() {
    if (true) { 
        var varVariable = "I am a var variable.";
        // var is function-scoped
        // var is old way of declaring variables
        let letVariable = "I am a let variable.";
        // let is block-scoped
        // let is the modern way of declaring variables
    }       
    console.log(varVariable); // Accessible
    // console.log(letVariable); // This will throw an error because letVariable is block-scoped
}   

// in 1996: LiveScript a JavaScript precursor
// in 1995: JavaScript created by Brendan Eich at Netscape
// in 1997: ECMAScript standard established by ECMA International
// in 2009: ES5 introduced strict mode, JSON support
// ES5 suppported in all modern browsers
// in 2015: ES6 (ES2015) introduced let, const, arrow functions, classes, modules
// in 2016-2023: Annual updates with features like async/await, optional chaining, nullish coalescing, etc.
// JavaScript continues to evolve with new features and improvements.
// ES6/ES2015, ES7/ES2016, ES8/ES2017, ES9/ES2018, ES10/ES2019, ES11/ES2020, ES12/ES2021, ES13/ES2022, ES14/ES2023
// * Supported in all modern browsers and Node.js versions
// * But not for all web browsers
// * A lot characteristics you can implement with polyfills and transpilers like Babel
// * Always check compatibility if you are targeting older browsers
// * Use tools like Babel and polyfills to ensure compatibility when needed
// * Modern JavaScript development often involves using build tools and transpilers to ensure code runs across different environments


// Polyfills is code that adds a feature which the engine may lack
// Transpilers like Babel convert modern JavaScript code into a version compatible with older environments
// Always check browser compatibility for new JavaScript features using resources like MDN Web Docs or Can I Use

let x = 5, y = 10, z = 15, w = x + y + z;
console.log("The total of x, y, and z is:", w);
console.log(`The total of x, y, and z is: ${w}`); // Using template literals
console.log(`Values are - x: ${x}, y: ${y}, z: ${z}, total: ${w}`);
console.log(`Calculating: ${x} + ${y} + ${z} = ${w}`);

// javaScript is a interpreted language
// JavaScript engines interpret and execute code line by line
// Popular JavaScript engines include V8 (Chrome, Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari)
// Just-In-Time (JIT) compilation improves performance by compiling code at runtime
// JavaScript can be executed in various environments, including web browsers and server-side with Node.js


console.error("This is an error message from app.js");
console.warn("This is a warning message from app.js");
console.info("This is an informational message from app.js");
console.debug("This is a debug message from app.js");
console.table([{name: "Alice", age: 30}, {name: "Bob", age: 25}]);
console.time("appJsExecutionTime");
// Some code execution
for (let i = 0; i < 1000000; i++) {
    // Simulating code execution
}  

// Colors in console represents different kinds of messages
// purple: debug, blue: info, yellow: warning, red: error
console.timeEnd("appJsExecutionTime");

console.log({  x, y, z, w});
console.log({a, b, sum});

// A object is a collection of key-value pairs
let person = {
    name: "John",   
    age: 30,
    city: "New York"
};
console.log(person);
console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);


let string = "Hello, JavaScript!";
let number = 42;
let boolean = true;
let array = [1, 2, 3, 4, 5];
let object = { key: "value" };
let undefinedVar;
let nullVar = null;
console.log(typeof string);      // "string"
console.log(typeof number);      // "number"    
console.log(typeof boolean);     // "boolean"
console.log(typeof array);       // "object"
console.log(typeof object);      // "object"
console.log(typeof undefinedVar); // "undefined"
console.log(typeof nullVar);     // "object" (this is a known quirk in JavaScript)
console.log(Array.isArray(array)); // true
console.log(array instanceof Array); // true
console.log(object instanceof Object); // true


console.log("End of app.js execution.");


const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;
console.log(`The area of a circle with radius ${radius} is ${area}.`);

// const cannot be reassigned
// PI = 3.14; // This will throw an error   
// const is more lightweight than let and var
// Use const by default, use let if you need to reassign
// Avoid using var in modern JavaScript code    
// This helps prevent accidental reassignments and makes code easier to understand

const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
console.log(`There are ${DAYS_IN_WEEK} days in a week and ${HOURS_IN_DAY} hours in a day.`);
// Environment constants can be defined using const
// This improves code readability and maintainability
const MAX_USERS = 100;
const API_URL = "https://api.example.com/v1/";
// Use uppercase letters with underscores for constant names
// This is a common convention to indicate that these values should not change      
console.log(`Max users allowed: ${MAX_USERS}`);
console.log(`API URL: ${API_URL}`); 

// A breakpoint is a debugging tool that allows you to pause code execution at a specific line
// This helps you inspect the current state of variables and the call stack
// You can set breakpoints in browser developer tools or IDEs like Visual Studio Code
// Use breakpoints to step through code line by line and identify issues
// Debugging is an essential skill for developers to troubleshoot and fix bugs in their code    
// To set a breakpoint in Visual Studio Code, click on the left margin next to the line number
// In browser developer tools, go to the "Sources" tab and click on the line number to set a breakpoint
// Once a breakpoint is hit, you can use the debugging controls to step over, step into, or continue execution
// Inspect variable values in the scope panel to understand how data changes during execution
// Effective use of breakpoints can significantly speed up the debugging process and improve code quality

// V8 is the JavaScript engine developed by Google for Chrome and Node.js
// It compiles JavaScript to machine code for faster execution
// V8 uses Just-In-Time (JIT) compilation to optimize performance
// Understanding how V8 works can help developers write more efficient JavaScript code
// V8 is open-source and has a large community contributing to its development and improvement

var myName = "Cristian from app.js  ";
// when use var you can change window.myName = "New Name";
// is not recommended to use var in modern JavaScript code
// because it can lead to unexpected behavior due to its function-scoped nature


// let and const not override window properties
// let myName = "Cristian from app.js  ";
// const myName = "Cristian from app.js  ";