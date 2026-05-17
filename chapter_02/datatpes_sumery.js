//! DataType Summary ==>
/* types of datatype
1. Premitive ==>  
    7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt
Eg. 
*/
const price  = 199 
const name = "ravi"
let isAlive = true
let address = undefined
let MobileNo = null
let bigNumber =  132687647238432849n

// Symbol ==>
const id = Symbol("1234")
const anotherId = Symbol("1234")
console.log(id === anotherId);


// 2. Reference type (non-premitive) -> allocates the directe memory locations.
// Arrays, Object, Functions
let heros = ["IronMan", "SpiderMan", "doga"]
console.log("ARRAY : ",heros);

// Object =>
let data = {
    "name" : "ravi",
    "Age" : 19,
    "Gender ": "Male" 
}
console.log("Objects is : ",data);
//? JAVASCRIPT is a 