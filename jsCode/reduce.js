const num = [ 1,2,3];

//one way to write
// let curVal = 0;
// let addNum = num.reduce ( (acc , curVal )=> acc += curVal );
// console.log(addNum);

// Second way to write

addNum = num.reduce (function (accumulator , currentVal) { 
   return  accumulator = accumulator + currentVal ;
   
},0 )
console.log(addNum);