console.log('javaScript Master');
document.getElementById("text").innerHTML = "- Prototype Inheritance- oop"

//  Prototype Inheritance object-oriented programming
/*
نکته هر آبجکتی در جاوا اسکریپت یک 
Prototype 
پدر دارد 
و تمام متد و پراپرتی های ان را به ارث میبرد
به جز یک مورد
__proto__

*/

let x = {}
console.log(x)
console.log(x.toString())

let y = {}
console.log(y)

Object.getPrototypeOf(y)
Object.getPrototypeOf(x)

console.log(Object.getPrototypeOf(x))

Object.getPrototypeOf(x) === Object.getPrototypeOf(y)

x.__proto__ === y.__proto__


/*
تمام آبجکت ها در جاوا اسکریپت مستقیما یا غیر مستقیم از 
__proto__
پروتایپ ارث ببری میکند
__proto__ =
null
__defineGetter__ =
ƒ __defineGetter__()
__defineSetter__ =
ƒ __defineSetter__()
__lookupGetter__ =
ƒ __lookupGetter__()
__lookupSetter__ =
ƒ __lookupSetter__()
constructor =
ƒ Object()
hasOwnProperty =
ƒ hasOwnProperty()
isPrototypeOf =
ƒ isPrototypeOf()
propertyIsEnumerable =
ƒ propertyIsEnumerable()
toLocaleString =
ƒ toLocaleString()
toString =
ƒ toString()
valueOf =
ƒ valueOf()
*/


/* 
به نوعی ابجکت بیس یا پروتاپ  پدر ههه ابجکت ها در جاوا اسکریپت است
*/
/*
ابجکت بیس یا پروتایپ هیچ پدری ندارد
*/

/*
وقتی از متد یک ابجکت استفاده میکنیم موتور جاوا اسکریپت ابتدا دننبال اون پراپرتی یا متد 
درون ابجکت میگردد اگر پیدا نکرد به پروتو تایپ خود نگاه میکند
*/

