console.log('javaScript Master');
document.getElementById("text").innerHTML = "- object math";


// -object math

console.log(Math.PI)

console.log(Math.random())


function getRandomArbitray(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

console.log(getRandomArbitray(1, 1000))

console.log(Math.round(1.5))

console.log(Math.round(2.9))

console.log(Math.max(2, 9, 4, 645))

console.log(Math.min(2, 9, 4, -645))

console.log(Math.abs(-5))

