let originalArray = [1, 2, 3];
let copyArray = originalArray.slice(); // or let copyArray = [...originalArray];

copyArray.push(4);

console.log(originalArray); // Output: [1, 2, 3]
console.log(copyArray); // Output: [1, 2, 3, 4]
