console.log('javaScript Master');
document.getElementById("text").innerHTML = "-Object-oriented programming concepts"

// object-oriented programming
/*
یک الگوی برنامه نویسی است که  به جای فانکشن ها  حول آبجکت ها  میچرخد
*/

// مجموعه ای از متغییر ها و فانکشن ها ی به هم مرتبط در یک گروه یا آبجکت قرار میدهیم


// practical programming

let baseSalary  = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate)
{
    return baseSalary + (overtime * rate)
}

// encapsulation programming

let employee = {
    baseSalary : 3000,
    overtime : 10,
    rate : 20,
    gatwage(){
        return this.baseSalary + (this.overtime * this.rate)
    }
}

// abstraction programming
