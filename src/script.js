console.log('javaScript Master');
document.getElementById("text").innerHTML = " -- Delete all array elementsy";

// - Delete all array elements

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] warning


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let another = numbers;

console.log(`numbers : ${numbers}`)

console.log(`another : ${another}`)

console.log("------ [] ----------")

numbers = []

console.log(`numbers : ${numbers}`)

console.log(`another : ${another}`)

// length

console.log("------ length ----------")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

another = numbers;

numbers.length = 0


console.log(`numbers : ${numbers}`)

console.log(`another : ${another}`)

// splice 

console.log("------ splice ----------")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

another = numbers;

numbers.splice(0 , numbers.length)

console.log(`numbers : ${numbers}`)

console.log(`another : ${another}`)

