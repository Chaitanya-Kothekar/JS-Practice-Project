function divide(a,b) {
    if(b === 0) {
        throw new Error ("Division by 0 is not allowed");

    }
    return a/b;
}
try{
    console.log(divide(10,0));
}catch(error){
    console.log("An error occured:" , error.message)
}