const _radius = new WeakMap();


// - getters and setters for private members object-oriented programming
class Circle {
    constructor(radius){
        _radius.set(this, radius) // property private
    };
    get radius(){
        return _radius.get(this)
    }
    set radius(value){
        if (value <= 0) throw new Error("invlaid radius");
        _radius.set(this, value);
    }

    

}

const c = new Circle(1)
// console.log(c.radius())
console.log(c.radius)

c.radius = 12;
console.log(c.radius)

document.getElementById("text").innerHTML =  " --getters and setters for private members oop"
