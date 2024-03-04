// // -----------------object literals-------------------------
// const mysym = Symbol("key1")
// const jsUser = {
//     name : "chaitanya",
//     "full name" : "chaitanya kothekar",
//     [mysym]:"myKey1", //symbol type
//     age:18,
//     location : "nagpur" ,
//     email : "temp@gmail.com",
//     isLoggedIn : false ,
//     lastLoggedIn : ["monday" , "Tuesday"]
// }

// console.log(jsUser.email)
// console.log(jsUser["email"]) //another way to access object it is important to use
// console.log(jsUser["full name"])
// console.log(jsUser["age"])
// console.log(jsUser[mysym])

// // -------------------------------.freeze---------------------------------------------

// jsUser.email = "change@gmail.com"

// //make sure to perform further operations like greeting unfreez the object .

// //Object.freeze(jsUser)  // it will freeze the object and not able to change or modify anything after using this freeze
// jsUser.email = "anotherChange@gmail.com" //it will not work becuase of the freeze

// // console.log(jsUser)

// // -----------------------------------object function()-----------------------------------------

// jsUser.greeting = function(){
//     console.log("hello users ");
// }
// jsUser.greeting2 = function(){
//     console.log(`hello users , ${this.name}`); // ' ' this back tick chnage from string and this is known as string interpolation
// }

// // imprtant :- '' this & `` this symbols are different the backtick symbol present below the ESC buttom which is Tild symbol~ button (~ ,`)

// console.log(jsUser.greeting());
// console.log(jsUser.greeting); // it will return function refernce only (function anonymus)
// console.log(jsUser.greeting2());

const box = {
    item1 : 5,
    item2 : "marker"
} 

const box2 = {
    item3 : "4 Item",
    item4 :"5 Item"
}
const combine = {...box , ...box2};
console.log( typeof combine);
console.log( typeof box.item1);
