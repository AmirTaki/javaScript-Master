console.log('javaScript Master');
document.getElementById("text").innerHTML = "Testing array elements"


// - Testing array elements

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const allPositive = numbers.every((value)=>{
    return value >= 0
})

console.log(allPositive)

const atLeastOnePosive = numbers.some((value)=>{
    return value >= 20
})

console.log(atLeastOnePosive)