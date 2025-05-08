console.log('javaScript Master');
document.getElementById("text").innerHTML =  " - Creating inheritance functions oop"

// - Creating inheritance functions Prototypobject-oriented programming


function Shape(color) {
    this.color = color

}
Shape.prototype.duplicate = function(){
    console.log('duplicate')
}


function Circle(radius, color){
    Shape.call(this, color)
    this.radius = radius;
 
};


function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle
extend(Circle, Shape);

Circle.prototype.draw = function () {
    console.log('draw')
}

function Squre(size, color){
    Shape.apply(this, [color])
    this.size = size;
}

extend(Squre, Shape)

const s = new Shape("brown")
const c = new Circle(2, "silver")
console.log(c.color)

const sq = new Squre(12, 'blue')

console.log(sq.color)