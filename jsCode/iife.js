// (IIFE) => Imediately Invoked Function Expression

// ---------------------- Named IIFE --------------------------

(function func(){
    console.log(`chaitanya's , Database is connected`);
})();  // important to add semicolon otherwise another IIFE will not execute


// ------------------- Arrow Function (IIFE) -------------------

((name)=>{
    console.log(` ${name} Database is connected`)
})("Another"); // in the last parenthesis the argument is passed 