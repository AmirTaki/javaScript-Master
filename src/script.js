console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Loop do-while";

// Loop 
// do-while

let x = 0;
do{
    console.log(x--)
}
while(x > -10)

console.log('-----------')

let n = 100;
do {
    console.log(n++)
}
while(n > 200)

console.log('-----------')

let counter = 0;
let bool = true;
do {
    console.log(++counter)
    bool = counter === 100 ? false : true
}
while (bool)