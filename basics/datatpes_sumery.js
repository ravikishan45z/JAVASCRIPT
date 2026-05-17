// //! DataType Summary ==>
// /* types of datatype
// 1. Premitive ==>  
//     7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt
// Eg. 
// */
// const price  = 199 
// const name = "ravi"
// let isAlive = true
// let address = undefined
// let MobileNo = null
// let bigNumber = 4789n //"n" is for bigint

// // Symbol ==>
// const id = Symbol("1234")
// const anotherId = Symbol("1234")
// console.log(id === anotherId);


// // 2. Reference type (non-premitive) -> allocates the directe memory locations.
// // Arrays, Object, Functions
// let heros = ["IronMan", "SpiderMan", "doga"]
// console.log("ARRAY : ",heros);

// // Object =>
// let data = {
//     "name" : "ravi",
//     "Age" : 19,
//     "Gender ": "Male" 
// }
// console.log("Objects is : ",data);
// //! Function =>
// const namefunction = function(){
//     console.log("Hello world!");
// }

// console.log(typeof bigNumber);
// namefunction() // calling of the function.
// console.log(typeof namefunction);



// // +++++++++++++++++++  Memory +++++++++++++++
// /*
// Stack(premitive) -
// Heap(non-premitive) -
// */

// let myInstaName = "Ravi Kishan Gaur"
// let anotherName = myInstaName
// anotherName = "this is name"
// console.log(anotherName);
// console.log(myInstaName);

let user1 = {
    "Email" : "1234@gmail.com",
    "Upi" : "123@ybl.com"
}

let user2 = user1
// user2.Email = "this@gmail.com" -->this will make changes in both users.

console.log(user1);
console.log(user2);