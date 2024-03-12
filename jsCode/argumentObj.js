
function argObj1 (a , b, c){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

argObj1( 1 , 2 , 3);


// in arrow function we have to use rest parameters  

const argObj2 = (...arguments) => {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

argObj2( 4 , 5 , 6);