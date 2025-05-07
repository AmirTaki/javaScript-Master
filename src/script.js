console.log('javaScript Master');
document.getElementById("text").innerHTML = "- Filtering an array"

// - Filtering an array

const numbers = [1, 10, 12, 4, -8, -9, -18, 22, 39]


const array = numbers.filter((value)=>{
    return value >= 0
})

console.log(array)


const users = [
    {name : "amir", age : 28},
    {name : "mani", age : 20},
    {name : "nia", age :  25 },
    {name : "kia", age : 14},
    {name : "reza", age : 16},
]
const result =  users.filter(user => user.age >= 18) 

console.log(result)