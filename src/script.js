console.log('javaScript Master');
document.getElementById("text").innerHTML = "-Hosting in JS"

// - Hosting


// FUNCTION Declaration
walk()
function walk () {
        console.log("walk")        
    }


// FUNCTION  Expression

// run ()
//  Error : Warning Uncaught ReferenceError ReferenceError: Cannot access 'run' before initialization

let run = function () {
    console.log("run")
};
walk()
run()


// تفاوت کلیدی 
// FUNCTION Declaration در
// میتوان قبل از تعریف شدن آن آن را صدا زد
//امابا  FUNCTION  Expression
// نمیتوان آن را صدا زد


// دلیل اجرا این است موتور جاوااسکریپت قبل از اجرا 
// function declaration
// به بالا تر از بقیه اجرا میکند
// و به این عملکرد 
//  hoistiog
// میگویند

let move = run;
move();
