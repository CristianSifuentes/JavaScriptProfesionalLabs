

alert("Welcome to the JavaScript Alerts Demo!");
// Is block-scoped

let v = prompt("Please enter your name:", "Guest User");    
console.log("User entered name:", v); 
console.log('***' + v + ' ***'); 

let x = confirm("Do you want to proceed?");
if (x) {
} else {
    console.log("User chose not to proceed.");
}
let myName = "John Doe";
console.log(myName);

// null vs undefined
let undefinedVar;
let nullVar = null;
console.log("undefinedVar:", undefinedVar);
console.log("nullVar:", nullVar);
console.log("Type of undefinedVar:", typeof undefinedVar);
console.log("Type of nullVar:", typeof nullVar); // object (this is a known quirk in JavaScript)    
console.log("Is undefinedVar === nullVar?", undefinedVar === nullVar); // false
console.log("Is undefinedVar == nullVar?", undefinedVar == nullVar);   // true

console.log("End of alets.js execution.");

// console.log(global);

