console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Array traversal";

// -- -- Array traversal

const numbers = [1, 2, 3, 4, 5, 6]

for (let number of numbers){
    console.log(number)
}


console.log("------------")

numbers.forEach(number => {
    console.log(number) 
});

console.log("------------")

numbers.forEach((number,i) => {
    console.log(`${i} : ${number}`) 
});


console.log("------------")

const arrayObj = [{id : 1, value : "value"}, 2 , 3, 4, 5, 6]

for (let number of arrayObj){
    console.log(number)
}


console.log("------------")


arrayObj.forEach(element => {
    console.log(element)
});


console.log("------------")

