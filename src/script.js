console.log('javaScript Master');
document.getElementById("text").innerHTML =  "Implementing your own inheritance oop"

//  Implementing your own inheritance Prototypobject-oriented programming


function Sahpe() {

}
Sahpe.prototype.duplicate = function(){
    console.log('duplicate')
}


// Constractor function
function Circle(radius){

    // 1- Instance members
    this.radius = radius
 
 
};

// 2-prototype members
Circle.prototype.draw = function () {
    console.log('draw')
}

Circle.prototype.duplicate = function() {
    console.log('duplicate')
}

// object => constarctor function
const  c1 = new Circle (1)



// یک آبچکت برای ما بر میکرداند که که پروتوتایپ آن 
// shapeBase
// است
Object.create(Sahpe.prototype);  // ارث بری میکند از ShapeBase


Circle.prototype = Object.create(Sahpe.prototype)
// Circle(inhertance) => Shape

const s = new Sahpe()
// c (inheritance) => CircleBase , CircleBase (inheritance) =>  ObjectBase
const c = new Circle(1)

console.log(Circle)
console.log(c)

