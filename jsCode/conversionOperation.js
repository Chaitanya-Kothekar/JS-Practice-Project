let score = "33abca";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// uska type change ho jaynga but valueInNumber ka o/p NaN show karenga

// values change karne ke baad ye o/p denga
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = "chaitanya"
let booleanIsLoogedIn = Boolean(isLoggedIn);

console.log(booleanIsLoogedIn);

// 1 => true 
// 0 => false
// "" => false
// "chaitany" => true

let someNumber = 3;
let stringNumber = String(someNumber)
console.log(typeof stringNumber);