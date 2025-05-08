console.log('javaScript Master');
document.getElementById("text").innerHTML =  " Reset Constructor oop"

//  Reset Constructore Prototypobject-oriented programming


function Sahpe() {

}
Sahpe.prototype.duplicate = function(){
    console.log('duplicate')
}



function Circle(radius){
    this.radius = radius
 
};

Circle.prototype.draw = function () {
    console.log('draw')
}

Circle.prototype.duplicate = function() {
    console.log('duplicate')
}


const  c1 = new Circle (1)  // new Circle.prototype.constructor(1)


Object.create(Sahpe.prototype);  


Circle.prototype = Object.create(Sahpe.prototype)
// ما در این کار پروتوتایپ سرکل ریست کردیم بهتر است از این دستور اجرا کنیم
Circle.prototype.constractor = Circle

const s = new Sahpe()
const c = new Circle(1)



// c.draw() warning : reset Constructor (Cricle)

c.duplicate()