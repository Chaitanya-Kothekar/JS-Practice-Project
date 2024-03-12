let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true

// Removing obj1 from the WeakSet
weakSet.delete(obj1);

console.log(weakSet.has(obj1)); // Output: false