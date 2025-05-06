console.log('javaScript Master');
document.getElementById("text").innerHTML = " constructor function";




// Factory Function

function createCircle (radius, location, isVisibble){
    return {
        radius, 
        location, 
        isVisibble,
        draw() {console.log("create-draw")}
    }
}

const myCircle = createCircle(1, {x : 12, y : 13}, true)

// constructor function

function Circle(radius, location, isVisibble){
    this.radius  = radius,
    this.location = location,
    this.isVisibble = isVisibble;
    this.draw = function(){
        console.log ("draw")
    }
    //return this;  // نیازی نیست اینو بنوسیبم توسط اپریتور نیو انجام میشود
}

const circle = new Circle(3, {x : 4,  y: 2 }, false)  ;

console.log(circle)




// اپریتور new :
// یک آبجکت خالی ایجاد میکند

// اپریتور یا کلمه this
// به آبجکت خالی اشاره میکند

// آبجکت مقدار دهی شده برمیگرداند


// camel notation : oneTwoThree
// pascal notaion : OneTwoThree


//  تفاوت بین factory function & constarctor function
// در فکتوری فانکشن ما یک متغیر میساختیم واسم آبجکت میدادیم و  اتفاقی که می افتد آبجکت برای ما بر میگرداند

// اما در conastractor function
// اپریتور نیو میساختیم ویک آبجکت میسازیم و چیزی درون آبجکت
// return
// نمیکنیم
// و از کلمه کلیدی
// this
// استفاده میکنیم