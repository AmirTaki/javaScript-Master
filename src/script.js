console.log('javaScript Master');
document.getElementById("text").innerHTML =  " - Method Redefinition oop"

// - Method Redefinition Prototypobject-oriented programming

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
    // Shape.prototype.duplicate()
    Shape.prototype.duplicate.call(this,)
    console.log("duplicate circle")
}

const c = new Circle();

c.duplicate()

