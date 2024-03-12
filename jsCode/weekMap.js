let obj = {
    obj1: "objval1",
    obj2: "objval2"
}

let weekmap = new WeakMap();

weekmap.set(obj, "4");

console.log(weekmap.get(obj));  //output  4

obj = null ;

console.log(weekmap.get(obj));  //output  undefined