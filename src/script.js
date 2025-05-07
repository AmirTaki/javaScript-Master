console.log('javaScript Master');
document.getElementById("text").innerHTML = "-Abstraction- oop"

// Abstraction object-oriented programming

function Circle (radius){

    this.radius = radius;

    let defaultLocation = {x : 0, y : 0};

    let computerOptimumLocation = function (factor) {
        // ....
    }
    this.draw = function () {
        computerOptimumLocation();
        console.log('draw')
    }
}

const circle = new Circle(10)

console.log(circle.draw())

/*

function Circle (radius){

    this.radius = radius;

    this.defaultLocation = {x : 0, y : 0};

    this.computerOptimumLocation = function (factor) {
        // ....
    }
    this.draw = function () {
        this.computerOptimumLocation();
        console.log('draw')
    }
}



const circle = new Circle(10)

circle.computerOptimumLocation()

*/