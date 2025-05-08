console.log('javaScript Master');
document.getElementById("text").innerHTML =  " - Calling the parent constructor oop"

// - Calling the parent constructor Prototypobject-oriented programming


function Sahpe(color) {
    this.color = color

}
Sahpe.prototype.duplicate = function(){
    console.log('duplicate')
}


function Circle(radius, color){
    // call the parent constructor  warning :// Sahpe(this.color);
    Sahpe.call(this, color);
    // Sahpe.apply(this, [color]);
    this.radius = radius;
 
};


Circle.prototype = Object.create(Sahpe.prototype)
Circle.prototype.constructor = Circle


Circle.prototype.draw = function () {
    console.log('draw')
}

const s = new Sahpe("brown")
const c = new Circle(2, "silver")

// window.color => silver

console.log(c.color)