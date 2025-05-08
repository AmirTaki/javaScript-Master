console.log('javaScript Master');
document.getElementById("text").innerHTML =  " - Polymorphism oop"

// - Polymorphism object-oriented programming

// Shape
function Shape() {}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

// Circle
function Circle( ){
    Shape.apply(this, [])
};

// extend
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}
extend(Circle, Shape)

// over ride
Circle.prototype.duplicate = function (){
    console.log("duplicate circle")
}

function Square() {}
extend(Square, Shape)

Square.prototype.duplicate = function () {
    console.log("duplicate Square")
}

const shapes = [
    new Circle(), 
    new Square()
]

for (let shape of shapes ){
    shape.duplicate()
}


const c = new Circle();


