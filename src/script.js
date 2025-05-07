console.log('javaScript Master');
document.getElementById("text").innerHTML = " Operator Rest"

// - Operator Rest

function sum () {
    let total = 0;
    for (let number of arguments){
        total += number;
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6))


// Operator Rest ... 


function Operator (...args) {
   return args.reduce((a, b)=> a + b) 
}

console.log(Operator(1, 2, 3, 4, 5, 6))


// قبل 
// rest
// میتوان پارامتر داشته باشیم اما بعد آن  نمیتوان
function OperatorTwo (discount, ...args) {
   const total =  args.reduce((a, b)=> a + b) 
   return total * (1 - discount)
}

console.log(OperatorTwo(0.5 ,1, 2, 3, 4, 5, 17))
