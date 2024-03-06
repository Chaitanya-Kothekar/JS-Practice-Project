// Function with rest parameters
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

// Calling the function with different numbers of arguments
console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum());               // Output: 0
