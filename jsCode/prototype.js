

// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.chaitanya = function(){
//     console.log(`chaitanya is present in all objects`);
// }

// Array.prototype.heyChaitanya = function(){
//     console.log(`Chaitanya says hello`);
// }

// heroPower.chaitanya();
// myHeros.heyChaitanya();




let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.chaitanyaObj = function(){
    console.log(`chaitanya is present in all objects`);
}

heroPower.chaitanyaObj(); // output : chaitanya is present in all objects
