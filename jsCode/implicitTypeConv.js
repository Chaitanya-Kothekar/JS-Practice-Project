// String Conversion: 
// When you add a string to another data type, the other data type is converted to a string.

let num = 10;
let str = "The number is " + num; // Implicit conversion of num to string
console.log(str); // Output: "The number is 10"

// --------------------------------------------------------------------------------------------------------------

// Numeric Conversion: 
// When you use operators like -, *, /, or when you apply mathematical functions, JavaScript tries to convert non-numeric types to numbers.

let result = "10" - 5; // Implicit conversion of "10" to numeric 10
console.log(result); // Output: 5


// --------------------------------------------------------------------------------------------------------------

// Boolean Conversion: In contexts requiring a boolean value (like in if conditions), JavaScript implicitly converts values to booleans. Most values convert to true, except for 0, NaN, null, undefined, '' (empty string), and false.



