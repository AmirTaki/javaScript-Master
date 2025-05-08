console.log('javaScript Master');
document.getElementById("text").innerHTML =  " Member Itrate prototype vs instance member oop"

//  -Member navigation prototype vs instance member Prototypobject-oriented programming


// Constractor function
function Circle(radius){

    // 1- Instance members
    this.radius = radius
    this.move = function() {
        console.log("move")
    }
 
};


// object => constarctor function
const  c1 = new Circle (1)


// 2-prototype members
Circle.prototype.draw = function () {
    console.log('draw')
}


c1.draw()
c1.move()


//  returns instance members
console.log(Object.keys(c1))


// returns all memebers => instance members & prototype members
for(let key in c1){
    console.log(key)
}

console.log(c1.hasOwnProperty('radius')) // true => instance members

console.log(c1.hasOwnProperty('draw'))  // false => property members

