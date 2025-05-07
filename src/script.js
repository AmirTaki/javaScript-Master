console.log('javaScript Master');
document.getElementById("text").innerHTML = " - - Variable definition with VAR"

// - - VAR
var y = 0;

console.log(y)

function start(){
    for(let i = 0; i < 5; i++){
        console.log(i)
    }
    // console.log(i) warning
}
start()

function stop(){
    for (var i = 5 ; i > 0 ; i--){
        console.log(i)
    }

    console.log(i)
}
stop()

// console.log(i) // warning

/*
وقتی متغیر با کلید واژه 
var 
استفاده میکنیم اسکوپ آن به بلاکی در آن تعریف شده محدود نمیشود

بلکه به فانکشنی که در آن تعریف شده محدود میشود

*/


/*
var => function-scoped
let, const => block-scoped
*/


var color = 'red'   // global
let age = 20;       // global

console.log(window.color)
console.log(window.age)  // undifined



function sayHi(){
    console.log("hi")
}
console.log(window.sayHi)