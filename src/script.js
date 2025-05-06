console.log('javaScript Master');
document.getElementById("text").innerHTML = "- - Difference between primitive and reference types";

//  1- value types (primitive)
// Number
// String 
// Boolean
// Symbol
// undifined
// null

// 2- Reference Types 
// object
// function
// array


// نکته در جاوااسکریپت دونوع تایپ داریم
// 1 - primtive   2- reference


// - Difference between primitive and reference types

// رفتار پرایمتیو تایپ
let x = 10;
let y = x;

console.log("x :" ,x)

x = 20 

console.log("x :" ,x)
console.log("y :", y)


// x , y از همدیگر مستقل اند
// ما وقتی ازانواع پریمرتی استفاده میکنیم مقدار مد نظر در ان کپی میشود و همین طور مجدد 

// رفتار رفرنس تایپ

let t = {vlaue : 10};
let tC = t

console.log ("t:value: ",t.vlaue)
console.log ("tC:value: ",tC.vlaue)

t.vlaue = 11;
console.log ("t:value: ",t.vlaue)
console.log ("tC:value: ",tC.vlaue)

// چون آبجکت درون آن دخیره نمیشود
// و فقط آدرس آن در آن ذخیره میشود

// نکته : در پرامیتس تایپ ها به وسیله مقدار  آن کپی میشود
// اما در رفرنس تایپ ها به وسیله آدرس آن کپی میشوند.


// primitive
let number = 10;

function increase (number){
    number++;
}

increase(number);
console.log(number)

// reference
let numberObj = {value : 10}

function increaseObj (object) {
    object.value++;
}
increaseObj(numberObj)
console.log(numberObj)