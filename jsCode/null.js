// function getVowels(str) {
//     const m = str.match(/[aeiou]/gi);
//     if (m === null) {
//       return 0;
//     }
//     return m.length;
//   }
  
//   console.log(getVowels('sky'));
//   // Expected output: 0
  

  function getVowels(str) {
    const m = str.match("aeiou");
    if (m === null){
        return 0
    }
    return m.length;
  }
  console.log(getVowels('sky')); //output 0

//   typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true