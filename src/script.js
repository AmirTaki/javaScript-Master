const _radius = new WeakMap();
const _move = new WeakMap();

// - - Hide members with WeakMap  object-oriented programming
class Circle {
    constructor(radius){
        _radius.set(this, radius) // property private
       
        // method private
        _move.set(this, ()=>{
            console.log("move", this)
        })
    };
    draw(){
        console.log(_radius.get(this))
        _move.get(this)();
    }
    

}

const c = new Circle(1)
c.radius    
c.draw()

// c._move()


document.getElementById("text").innerHTML =  " -- Hide members with WeakMap oop"
