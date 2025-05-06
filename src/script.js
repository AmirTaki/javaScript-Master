console.log('javaScript Master');
document.getElementById("text").innerHTML = "Navigating the properties of an object";


// Navigating the properties of an object

const circle = {
    radius : 1, 
    draw() {
        console.log("draw")
    }
}

for (let key in circle){
    console.log(key , " : " , circle[key])
}

// warning : Uncaught TypeError: circle is not iterable
// Uncaught TypeError: دایره قابل تکرار نیست

// for (let key of circle){
//     console.log(key , " : " , circle[key])
// }


// نکته آبجکت ها ایتریبل (قابل تکرار)نیستند

let circleKeys = Object.keys(circle);
console.log(circleKeys)



for(let key of circleKeys){
    console.log(key)
}

console.log('----------')

let circlevalues = Object.values(circle)

for (let i = 0; i < circleKeys.length; i++){
    console.log(circleKeys[i] ,":",circlevalues[i])
}


console.log('----------')


const x = {value : 1}  // => const x = new Object()

let circleEntries = Object.entries(circle)
console.log(circleEntries)

console.log('----------')

for(let  entry of circleEntries){
    console.log(entry)
}


console.log('----------')

if ('radius' in circle){
    console.log('yes')
}
console.log('draw' in circle)

