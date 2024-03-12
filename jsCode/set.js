let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add(3); // Adding a duplicate value, which will be ignored

// Checking the size of the Set
console.log(mySet.size); // Output: 3


// Checking if a value exists in the Set
console.log(mySet.has(2)); // Output: true

// Removing a value from the Set
mySet.delete(2);

// Checking the size again
console.log(mySet.size); // Output: 2

// iterating set 
mySet.forEach(value =>  console.log(value));