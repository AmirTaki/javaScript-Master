
// - Inheritance in classes object-oriented programming

class Shape{
    constructor(color){
        this.color = color;
    }
    move() {
        console.log("move")
    }

}

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius
    }
    draw(){
        console.log('draw')
    }
}


const c = new Circle("red", 1000);

console.log(c)

c.draw();
c.move();
console.log(c.color)
console.log(c.radius)
document.getElementById("text").innerHTML =  " --Inheritance in classes oop"
