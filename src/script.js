console.log('javaScript Master');


// Refernce Types
// 1 - Object type  همانند اشیا در دنیای واقعی

let name = "amir";
let age = 28;
let admin = true;

// let nameObject = {
//     key : value
// }


let person = {
    name : "amir",
    age : 28,
    admin: true
}

console.log(person)
console.log(typeof(person))


console.log(person.name)
console.log(person.age)
console.log(person.admin)


console.log(person["name"])
console.log(person["age"])
console.log(person["admin"])



document.getElementById("text").innerHTML = " Refernce Types : 1- Object type";