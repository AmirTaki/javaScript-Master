console.log('javaScript Master');
document.getElementById("text").innerHTML = " Constructor Property";



// Construcotr Litral
// - Constructor Property

// Factory Function 

function createCircle (radius){
    return {
        radius, 
        draw() {console.log("Factory Function")}
    }
}

const circle = createCircle(1);

// Constaructor Fucntion
function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Constractor function")
    }
}

const another = new Circle(2);

console.log(circle.constructor)
console.log(another.constructor)

//  وقتی برای ساختن آبجکت از کانسترکتور خودمان بسازیم اگر نسازیم خود جاوااسکریپت داخل خودش از کانسکتراکتور درونی خودش استفاده مبکند.

let x = {};
console.log(x.constructor)


// let x = new Object() ;


// new String(); => new String ("javaScript")

let name = "JavaScript";
console.log(name.constructor)

// new Boolean(); => new Boolean (true)
let bool = true;
console.log(bool.constructor)

// new number(); => new number (1)
let number = 1;
console.log(number.constructor)


// هر آبجکت  یک پراپرتی کانستراکتور دارد که به فانکشنی اشاره میکند که اون آبجکت به وجود آورده است
