console.log('javaScript Master');
document.getElementById("text").innerHTML = "- Clone an object";


// - Clone an object

const circle = {
    radius : 1, 
    draw() {
        console.log("draw")
    }
}

const another = circle;

// راه حل اول
const anotherOne = {}

for (let key in circle){
    anotherOne[key] = circle[key]
    
}
console.log(anotherOne)

// راه حل دوم
const anotherTwo = Object.assign({color: "black"}, circle)

console.log(anotherTwo)

// راه حل سوم
const anotherThree = {location : "usa",color:"red", ...circle}
console.log(anotherThree)