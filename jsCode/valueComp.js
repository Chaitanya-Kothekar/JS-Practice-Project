// == (Equality Operator): 

console.log(5 == '5'); // true, because the string '5' is coerced into a number
console.log(5 == 5);    // true, because both operands are of the same value

// === (Strict Equality Operator): 

console.log(5 === '5'); // false, because the types are different
console.log(5 === 5);    // true, because both value and type are the same

// Object.is()

console.log(Object.is(5, '5')); // false, because the types are different
console.log(Object.is(5, 5));    // true, because both value and type are the same
console.log(Object.is(NaN, NaN)); // true, because Object.is treats NaN values as equal
console.log(Object.is(0, -0));    // false, because Object.is treats -0 and +0 differently
