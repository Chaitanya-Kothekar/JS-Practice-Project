// ---------------------------Implicit Type Casting:-------------------------------
// Implicit type casting, also known as type coercion, occurs when the programming 
// language automatically converts one data type to another during an operation
//  without requiring explicit instructions from the programmer.

let num = 10;
let str = "The number is " + num; // Implicit conversion of num to string
console.log(str); // Output: "The number is 10"

// In this example, the number 10 is implicitly converted to a string when 
// concatenated with another string



// ---------------------------------------Explicit Type Casting:-------------------
// Explicit type casting occurs when the programmer directly instructs the
//  programming language to convert a value from one data type to another 
// using built-in functions or operators.

let str = "10";
let num = Number(str); // Explicit conversion to number using Number() function
console.log(num); // Output: 10
