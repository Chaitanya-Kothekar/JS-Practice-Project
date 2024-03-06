const myArr = [0, 1, 2, 3, 4, 5];
// myArr.push(9);
// myArr.pop();

// console.log(myArr);
// console.log(myArr.includes(9));
//it will give you result in boolean that the value you are entering is present or not
// --------------------.indexof()------------------------------

// console.log(myArr.indexOf(3));
//it will give en elemtent number present at index value which you will give
// --------------------.unshift------------------------------

// myArr.unshift(9);
// console.log(myArr);
//  it will add 9 element in starting of an array
// --------------------.shift------------------------------

// myArr.shift(9);
// console.log(myArr);
// it will remove first  element from an array

// --------------slice, splice-----------------

// const show1 = myArr.slice( 1,3);

// console.log(show1);
// it will show elements index starting from 1 to 2 (important it will not include the last index which is 3 so o/p will be [1,2])

// ----------------------.splice----------------------------

// const show2 = myArr.splice(1,3)
// console.log(show2);
//it will remove the element fom 1 index to 3 index from the orignal array

// ---------------------.push-----------------------------

const crypto = ["btc", "eth", "mana"];
const exchange = ["wazirx", "binance"];

// crypto.push(exchange);
// console.log(crypto);
//it will add exchnage array in crypto on 3 index in th form of another array(array have another array)

// ---------------------conacat-----------------------------

const combineArray = crypto.concat(exchange);
// console.log(combineArray);
// console.log(typeof combineArray);
// now it will combine the array in only one array

const newArray = [
  "btc",
  "eth",
  "mana",
  ["wazirx", "binance"],
  ["huobi", "okex"],
];
const oneArray = newArray.flat(Infinity); // in this braccess you have to write how deep array you want to go
// console.log(oneArray);
// from all subarray it wll make a new array

// -------------------quetion Asking-------------------------------

console.log(Array.isArray("name")); //it will check name array is there or not

console.log(Array.from("chaitanya")); //it will make array from given value

console.log(Array.from({ name: "chaitanya" })); //it will give empty array to avoid we have to define that give array using key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
// it will combine all score1,2,3 array
