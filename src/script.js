console.log('javaScript Master');
document.getElementById("text").innerHTML =  " - Classes oop"

// - Classes object-oriented programming
/*
در واقع کلاس ها سینتکس راحت تر برای همان پروتوکیت اینهریتنس
آبجکت های وراثت و ...
*/

/*
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw")
    }
}
*/

class Circle {
    constructor(radius){
        this.radius = radius;
        this.move = function () {
            console.log("move")
        }
    }
    draw(){
        console.log('draw')
    }
}

const c = new Circle (1)

console.log(c)

console.log(typeof Circle)  // در واقع کلاس ها در جاوا اسکریپت یه نوع فانکشن هستند