console.log('javaScript Master');
document.getElementById("text").innerHTML = "Reduce method in array"

// -Reduce method in array

const numbers = [1, -1, 5, 18, 54]
let sum = 0;

for(let n of numbers) sum+= n
console.log(sum)

let Reduce = numbers.reduce((accumulator, currentValue )=>{
    // console.log(accumulator, currentValue)
    return accumulator + currentValue;
}, 0)

console.log(Reduce)
/*
 accumulator = 0 , currentValue = 1 : 1
 accumulator = 1, currentValue = -1 : 0
 accumulator = 0, currentValue = 5 : 5
 accumulator = 5, currentValue = 18 : 24
 accumulator = 24, currentValue = 54 : 77
 accumulator = 77 : 77
*/