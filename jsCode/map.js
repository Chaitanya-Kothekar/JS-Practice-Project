let myMap =  new Map();

myMap.set('name' ,'chaitanya');

console.log(myMap.get('name')); //output : chaitanya

//--------------------Map------------------------------- 
// Map can have keys of any data type, including objects, functions, and primitive values.
// Map keys are ordered based on their insertion order.
// Maps have built-in methods for iteration, such as forEach, keys, values, and entries.

// -----------------objects-----------------------------
Object keys are always strings or symbols. If other data types are used as keys, they are automatically converted to strings.
// Object properties do not have a guaranteed order. While most modern JavaScript engines maintain the insertion order, it’s not specified by the language.
// Objects have a prototype chain and inherit properties and methods from their prototype objects.
