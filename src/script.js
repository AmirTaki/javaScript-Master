console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Objects are dynamic";




// - Objects are dynamic

const cirlce = {
    radius : 1   
}

cirlce.color = "red";
cirlce.draw = function (){}

console.log(cirlce)

delete cirlce.radius;

delete cirlce.draw;

console.log(cirlce)


