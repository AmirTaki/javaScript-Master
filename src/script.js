console.log('javaScript Master');
document.getElementById("text").innerHTML = " Add element to array";

// - Add element to array
const numbers = [3, 4];
console.log(numbers)

numbers.push(5, 6)
console.log(numbers)

numbers.unshift(0, 1, 2)
console.log(numbers)

numbers.splice(2, 0, "javaScript", "practice", -100)
console.log(numbers)

