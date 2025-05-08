console.log('javaScript Master');
document.getElementById("text").innerHTML =  "Property description oop"

//  - Property description object-oriented programming
let person = {name : "amir"}
console.log(person)


// new Object()

console.log(person.toString())

for (let key in person) console.log(key, person[key])

console.log(Object.keys(person))

//ابجکت ما یک سری پراپرتی دارد و هر پراپرتی یک سری اتربیوت دارد  که به ان ملحق شدند

let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)


Object.defineProperty(person,'name',{
    writable: false ,   //   // تغییر ندادن مقدار پراپرتی
    
    enumerable  : false  // پیمایش نکردن
});

person.name = "mani"
console.log(person)

console.log(Object.keys(person))