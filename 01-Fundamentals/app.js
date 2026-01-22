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

// javaScript is a interpreted language
// JavaScript engines interpret and execute code line by line
// Popular JavaScript engines include V8 (Chrome, Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari)
// Just-In-Time (JIT) compilation improves performance by compiling code at runtime
// JavaScript can be executed in various environments, including web browsers and server-side with Node.js