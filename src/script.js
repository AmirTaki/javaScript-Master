console.log('javaScript Master');
document.getElementById("text").innerHTML =  "prototype vs instance member oop"

//  - prototype vs instance member Prototypobject-oriented programming


// Constractor function
function Circle(radius){

    // 1- Instance members
    this.radius = radius
    this.move = function() {
        console.log("move")
    }
 
    /* this.draw = ()=>{
        console.log('draw')
    }*/
};

// object => constarctor function
const  c1 = new Circle (1)
const  c2 = new Circle (2)
/*
 هر 
 constranctor 
یک پروتایپ دارد 
که مقدار آن با
__proto__
هر ابجکت برابر است
*/


//به طریق زیر میتوان هر متد یا پراپرتی داخل پروتایپ هر کانیستراکتور فانکشن قرار داد
// 2- prototype members

Circle.prototype.draw =function(){
    this.move();
    console.log("draw")
}

console.log(c1)
c1.draw()
c2.draw()

console.log(c1.__proto__) 

/*
در جاوا اسکریپتت به طور کلی دو نوع پراپرتی و متد داریم
1- Instance members
2- prototype members
*/




Circle.prototype.toString = function(){
    return "circle with radius :" + this.radius;
}

console.log(c1.toString())


console.log('------------------------------------------------')

function Circle2(radius) {
    // instace members 
    this.radius = radius;
    this.move = function () {
        this.draw();
        console.log("move")
    }
}


// prototype members
Circle2.prototype.draw = function() {
    console.log("draw");
}


const objC1 = new Circle2(12)

console.log(objC1)

objC1.move()


/* 
هم در 
instance members 
میتوان 
protototype members
صدا زد و 
هم در 
prototype members
میتوان 
instance members
صدا زد

*/