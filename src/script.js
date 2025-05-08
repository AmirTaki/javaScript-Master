const _radius = Symbol();
const _draw = Symbol();

// - - Hide members with symbols  object-oriented programming

class Circle {
    constructor(radius){
        this[_radius] = radius  // property private
    };
    [_draw]() {                 // method private
        
    }
}


const c = new Circle(1);
console.log(c._radius)

console.log(Object.getOwnPropertyNames(c))

console.log(Object.getOwnPropertySymbols(c))




Circle.radius;
// Circle.draw()
/*
const key = Object.getOwnPropertySymbols(c)[0]
console.log(c[key])
console.log(c[Object.getOwnPropertySymbols(c)[0]])
*/







document.getElementById("text").innerHTML =  " -- Hide members with symbols oop"
