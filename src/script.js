console.log('javaScript Master');
document.getElementById("text").innerHTML =  " - static methods oop"

// - static methods  in class object-oriented programming


class Circle {
    constructor(radius){
        this.radius = radius
    }
    // Instance method
    draw(){
    }

    // Static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = new Circle(1)
console.log(circle)

// console.log(Circle.parse())
// console.log(circle.parse())

const circleParse = Circle.parse('{"radius" : 12}')
console.log(circleParse)


// Math.min() static method

/*
معمولا از استاتیک متد برای ساخت یوتیلیتی استفاده میشود 
*/