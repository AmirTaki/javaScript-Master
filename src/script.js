console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Finding an element within an array";

// - Finding an element within an array

// 1- primitve
const numbers = [1, 2, 3, 4, 5, 1]

console.log(numbers.indexOf(1))

console.log(numbers.lastIndexOf(1))

if(numbers.indexOf(7) !== -1){
    console.log('found')
}

console.log(numbers.includes(8))

console.log(numbers.indexOf(1, 4))


// 2- reference

const numbersObj = [
    {id : 1, name :"a"},
    {id : 2, name : "b"}
];

console.log(numbersObj.includes({id : 1, name: 'a'}))  // false

// console.log(numbersObj.find())

const result = numbersObj.find(function(number){
    return number.name === "b"
})

console.log(result)

const resutlIndex = numbersObj.findIndex(function(number){
    return number.name === "b"
})

console.log(resutlIndex)