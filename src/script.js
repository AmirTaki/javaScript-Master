console.log('javaScript Master');
// Primary types (Primitives)


//1- primitve (vlaue) types

// string
// number
// boolean
// undefined
// null
// 2- reference types

let name = "amir"
let age = 28;
let admin = true;
let lastName ;
let tall = null;

console.log(typeof(name))  // string
console.log(typeof(age))   // number
console.log(typeof(admin)) // boolean
console.log(typeof(lastName))       // undefined
console.log(typeof(tall))           // null

tall = "amir"
console.log(tall, typeof(tall)) 

tall = 170;
console.log(tall, typeof(tall))


document.getElementById("text").innerHTML = " primitve (vlaue) types";