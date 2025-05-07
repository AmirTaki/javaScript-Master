console.log('javaScript Master');
document.getElementById("text").innerHTML = "- Array join";

/// - Array join

const numbers = [1, 2, 3, 4, 5, 6, 7] 

const joined = numbers.join();

console.log(joined)

const joinedNew = numbers.join('-')

console.log(joinedNew)

console.log(typeof(joinedNew))


const message = "Array Join in JavaScript";

const parts = message.split(" ")
console.log(parts)

const combiend = parts.join('-')

console.log(combiend)


