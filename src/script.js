console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Remove element from array";

// - Remove element from array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const last = numbers.pop();

console.log(last) 
console.log(numbers) 

const first = numbers.shift();
console.log(first)
console.log(numbers)

const result = numbers.splice(3, 2);
console.log(result)
console.log(numbers)