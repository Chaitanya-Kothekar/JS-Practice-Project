// -----------------object literals-------------------------
const mysym = Symbol("key1")
const jsUser = {
    name : "chaitanya",
    "full name" : "chaitanya kothekar",
    [mysym]:"myKey1", //symbol type
    age:18,
    location : "nagpur" ,
    email : "temp@gmail.com",
    isLoggedIn : false ,
    lastLoggedIn : ["monday" , "Tuesday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]) //another way to access object it is important to use
// console.log(jsUser["full name"])
// console.log(jsUser["age"])
// console.log(jsUser[mysym])

// -------------------------------.freeze---------------------------------------------

jsUser.email = "change@gmail.com"

//make sure to perform further operations like greeting unfreez the object .

//Object.freeze(jsUser)  // it will freeze the object and not able to change or modify anything after using this freeze
jsUser.email = "anotherChange@gmail.com" //it will not work becuase of the freeze

// console.log(jsUser)

// -----------------------------------object function()-----------------------------------------

jsUser.greeting = function(){
    console.log("hello users ");
}
jsUser.greeting2 = function(){
    console.log(`hello users , ${this.name}`); // ' ' this back tick chnage from string and this is known as string interpolation
}

// imprtant :- '' this & `` this symbols are different the backtick symbol present below the ESC buttom which is Tild symbol~ button (~ ,`)

// console.log(jsUser.greeting());
// console.log(jsUser.greeting); // it will return function refernce only (function anonymus)
// console.log(jsUser.greeting2());

// ----------------------------------------objects (singleton) , through constructor ----------------------------------

// const tinderUser = new Object() 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//it will show object o/p

// ---------------------------------------------------------------------------------

const regularUser ={
    email : "someone@gmail.com" ,
    fullName : {
        userFullname : {
            firstName : "chiatanya" ,
            lastName : "kothekar"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);
// it will shoe the object firstname value which is present object under object 

// ---------------------------------------------------------------------------------

const obj1 = { 1: "a" , 2: "b"};
const obj2 = { 3: "a" , 4: "b"};
const obj3 = { 5: "a" , 6: "b"};

// const obj4 = {obj1 , obj2} //one way to add 2 objects
const obj5  = Object.assign({} , obj1 ,obj2); // * IMORTANT * whenever you write object its first letter should be Capitl letter Object.
//in this {} act as an traget and other object act as an source 
// console.log(obj5); // 2 type & prefferd way to assign multi objects 

// --------------------------------------spread object values-------------------------------------------

const obj6 = {...obj1 , ...obj2}
// console.log(obj6);

// ---------------------------------------------------------------------------------


const objectArray = [
    {
        id : 1, 
        email : "1@gmail.com" 
    },
    {
        id : 2,
        email : "2@gmail.com"
    } ,
    {
        id :3,
        email : "3@gmail.com"
    }

]

// console.log ( objectArray[0].email); //it will give 1 array object value

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); // it will give all the keys and values in the form of array


// ------------------------------------Object Destructuring---------------------------------------------


const course = {
    course : "course1" ,
    price : 99 
}

const {price:rs}  = course ; // destructure
console.log(rs);










