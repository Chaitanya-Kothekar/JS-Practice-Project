// Lexical scoping

function outerFunction (){
    let var1 = 5;
    function innerFunction(){
        console.log(var1)
    }
    innerFunction();


}

outerFunction();