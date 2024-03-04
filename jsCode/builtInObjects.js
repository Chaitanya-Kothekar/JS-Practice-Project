// Number
let num  = 10 ;
console.log(num); // Output :10

// Math
let randomNumber = Math.random();
console.log(randomNumber); // Output: A random number between 0 and 1

//Date

let currentDate  = new Date();
console.log(currentDate); // Output: Current date and time

//String
let string = "hello world" ;
console.log(string);



//Function

function greet(name) {
    console.log("hello "+name+" !");
}
greet("chaitanya"); // hello chaitanya !


// Boolean
let isLoggedin = true;
console.log(isLoggedin); // Output: true

// Array
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

// JSON
let jsonData = '{"name": "John", "age": 30}';
let parsedData = JSON.parse(jsonData);
console.log(parsedData); // Output: { name: 'John', age: 30 }

//promise

let promise = new Promise ( (resolve , reject) => {
    //Asynchronus operation 
    setTimeout(() => {
        resolve('operation completed successfully');
    },1000);
});
promise.then( result => console.log(result));

//Map
let map = new Map();
map.set('name' , 'chaitanya');
map.set('age',30);
console.log(map);