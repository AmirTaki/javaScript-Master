console.log('javaScript Master');
document.getElementById("text").innerHTML = "-Multilevel inheritance oop"

//  Multilevel inheritance object-oriented programming
let myArray = []
console.log([])

function Circle(radius){
    this.radius = radius,
    this.draw =()=> {
        console.log('draw')
    }
}

const circle = new Circle(10)

console.log(circle)


const circle2 = new Circle(12)


console.log(circle2)


/*
آبجکت پرتوتایپ ویژه همه ابجکت هایی که به وسیله ی این 
canstarctor Function circle
ایجادشدند

اسم این بخش بگذاریم  سرکل بیس :Circle base


Circle {radius: 10, draw: ƒ}
script.js:17
draw =
()=> {\r\n        console.log('draw')\r\n    }
radius =
10
[[Prototype]] =
Object
constructor =
ƒ Circle(radius){\r\n    this.radius = radius,\r\n    this.draw =()=> {\r\n        console.log('draw')\r\n    }\r\n}
arguments =
null
caller =
null
length =
1
name =
'Circle'
prototype =
{}
[[FunctionLocation]] =
@ c:\Users\ASUS\Desktop\backup _ toturial\Js-master\src\script.js:8
[[Prototype]] =
ƒ ()
[[Scopes]] =
Scopes[2]
[[Prototype]] =
Object
  
*/

/*
یعنی هر موقع که ما یک 
constractor
که یک ابجکت صدا میزنیم 
 */

/*  
همه ابجکت های که کانستراکتور  یکسانی دارند 
پرتوتایپ یکسانی دارند
*/

let array2 = [2]
let array3 = [2]

console.log(array2)
console.log(array3)

// کانسکتور جفت آرایه یکسان است
