function greet (name) {
    return 'hello '+ name + '!' ;
}

console.log(greet("chaitanya")); //output: hello chaitanya!


// ----------Types----------------

// Named function
function greet(name) {
    return "Hello, " + name + "!";
}

// Anonymous function assigned to a variable
var greetAnonymous = function(name) {
    return "Hello, " + name + "!";
};

// Arrow function
var greetArrow = (name) => {
    return "Hello, " + name + "!";
};

// Function expression
var greetExpression = function(name) {
    return "Hello, " + name + "!";
};

// Immediately Invoked Function Expression (IIFE)
(function() {
    var x = 10;
    console.log("Inside IIFE: " + x); // Output: Inside IIFE: 10
})();

// Higher-order function
function applyOperation(x, operation) {
    return operation(x);
}

function double(x) {
    return x * 2;
}

console.log("Using higher-order function: " + applyOperation(5, double)); // Output: Using higher-order function: 10

// Callback function
setTimeout(function() {
    console.log("Delayed message");
}, 1000);

console.log("Named function: " + greet("chaitanya")); // Output: Named function: Hello, chaitanya!
console.log("Anonymous function: " + greetAnonymous("Aman")); // Output: Anonymous function: Hello, Aman!
console.log("Arrow function: " + greetArrow("Tom")); // Output: Arrow function: Hello, Tom!
console.log("Function expression: " + greetExpression("Jerry")); // Output: Function expression: Hello, Jerry!