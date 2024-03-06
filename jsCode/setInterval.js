// Define a function to be executed repeatedly
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Set up an interval to execute the greet function with the parameter "Alice" every 1000 milliseconds
const intervalId = setInterval(greet, 1000, "Alice");

// After 5 seconds, stop the interval
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval stopped.");
}, 5000);