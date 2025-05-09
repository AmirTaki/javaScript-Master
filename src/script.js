
// - Redefining the method object-oriented programming
class Shape {
    move(){
        console.log("move")
    }
}

class Circle extends Shape{
    move(){
        super.move();
        console.log("move-circle")
    }
}


const c = new Circle();

c.move()

document.getElementById("text").innerHTML =  "- Redefining the method oop"
