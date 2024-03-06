function addTwoNumbers(number1 , number2){
    // let result = number1 + number2;
    // return result ;

    return number1 + number2 ;

}
// console.log(addTwoNumbers(3,9));

function loginUser (userName = "default"){ // userName= "default" means if pramater value is empty than the default value is taken
    return `${userName} ,just logged in` ;
}

console.log(loginUser("chaitanya"));