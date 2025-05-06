console.log('javaScript Master');
document.getElementById("text").innerHTML = "  - Logical operators";


// -  Logical operators

// Logical AND
// && 

console.log(true && true)  // (opreate && operate) // true && true => true

console.log(true && false)  // (opreate && operate) // true && false => false

console.log(true && false && true)  // (opreate && operate && operate) // true && false && true => false

let ProductCount = 3;
let ProductPrice = 1000;
let Creadit = 1200;;

let buy = ProductCount > 0  && Creadit > ProductPrice 
console.log(buy)

// Logical OR
// ||
console.log("Logical OR")

console.log(true || true)  // (opreate || operate) // true && true => true

console.log(true || false)  // (opreate || operate) // true && false => true



ProductCount = 0;
ProductPrice = 1000;
Creadit = 1200;;

buy = ProductCount > 0  || Creadit > ProductPrice // false || true => true
console.log(buy)

// Logical NOT
// !
console.log("Lodical NOT")


let Check = true;
console.log(Check)
console.log(!Check)

