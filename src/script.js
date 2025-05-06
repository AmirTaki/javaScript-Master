console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Loop for in & for out";
// Loop 
// برای پیمایش کردن روی آرایه استفاده میشود
// for in 

const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0 ; i < numbers.length; i++){
    console.log(i)
}

const person = {
    name : "amir",
    lastName : "taki",
    age : "28"
}

//warning : for not object

// for (let i = 0 ; i < person.length; i++){
//     console.log(i)
// }


for (let key in person){
    console.log(key +  "  -->  " + person[key])
}

// -------------------------------------
for (let index in numbers){
    console.log(index + " : " + numbers[index])
}

console.log("---------------------- FOR OUT --------------------------------")


// for out
const colors = ["black", "blue", "brown", "green", "red", "white", "yellow"]

for (let color of colors ){
    console.log(color)
}


// warning  : not abject
// for (let key of person){
//     console.log(key)
// }