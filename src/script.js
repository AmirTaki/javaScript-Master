console.log('javaScript Master');
document.getElementById("text").innerHTML =  "Constructor Prototype oop"

//  - Constructor Prototypobject-oriented programming

function Circle(randis){
    this.randis = randis
};

const circle = new Circle (1);

// برگرداندن پروتوتایپ یک آبچکت
Object.getPrototypeOf(circle)
circle.__proto__


//  prototype هر کانسکترتور یک پراپرتی پرتوتایپ دارد

Circle.prototype;  
/*
prototype 
ذاتا یک آبجکت است و
Circle
یک کانستراکتور است و کانستراکتور یک ابجکت به وجود می اورد
و هر آبجکت هم یک پروتوتایپ () دارد
*/

console.log(Circle.prototype === circle.__proto__)


/*
prototype
وظیفه پروتوتایپ :
هر کانستراکتور یک ابحکت به وحود اورد پروتوتایپ ان ابجکتی که میخواد به وجود بیاورد مقدار آن را
 مقدار پروتوتایپ قرار میدهد
*/

let obj = {};
console.log(obj.__proto__)
/*
OBJECT BASE
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

Object.prototype

/*
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
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
arguments =
ƒ ()
caller =
ƒ ()
length =
0
name =
'toString'
[[Prototype]] =
ƒ ()
[[Scopes]] =
Scopes[0]
valueOf =
ƒ valueOf()
*/

let array = []

array.__proto__ ;

new Array();

console.log(array.__proto__ === Array.prototype)