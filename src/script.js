console.log('javaScript Master');
document.getElementById("text").innerHTML = "- Functions are objects";



// - Functions are objects

function Circle (radius, ){
    this.radius = radius;
    this.draw = function(){
        console.log("Constractor function")
    }
}

const another = new Circle(2);

console.log(Circle)
console.log(Circle.name)
console.log(Circle.length)  // property
console.log(Circle.constructor) // function ->

// function = new function ('parametr' , 'cood function') 
const circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function(){
    console.log("Constractor function")
    }
 `
) 

const circle = new circle1(5);
console.log(circle)


// Circle.call({}, property)
Circle.call({}, 1)  //  == const another = new Circle(2);


// Circle.apply({}, [property])
Circle.apply({}, [1]) // == const another = new Circle(2);