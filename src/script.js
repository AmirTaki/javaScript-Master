console.log('javaScript Master');
document.getElementById("text").innerHTML = " factory function";

// factory function


let cirle = {
    radius : 2,
    location : {
        x : 2, 
        y : 2,
    },
    isVisibble : true,
    draw : function() {console.log("draw")}
}

// Factory function
function createCircle (randius, location, check ){
    return {
        
            radius : randius,
            location : location,
            isVisibble : check,
            draw : function() {console.log("draw")}
        
    }
}

let obj = createCircle(1, {x : 1, y : 3}, true);
console.log(obj)
console.log(obj.draw())


// syntax new
// اکر نوشتاری کلید و مقدار یکی باشد مینوانیم یک بار بنویسیم
//  همچنین برای متد هم میتوان از نوشتن کلمه فانکشن خودداری کرد

function createCircle2 (radius, location, isVisibble){
    return {
        radius, 
        location, 
        isVisibble,
        draw() {console.log("create-draw")}
    }
}


let objectCircle  = createCircle2(1, {x : 12, y :15}, false)
console.log(objectCircle)
console.log(objectCircle.draw())

let objectCircle2 = createCircle2(2, {x : 15 ,y: 20},true)
console.log(objectCircle2)
console.log(objectCircle2.draw())