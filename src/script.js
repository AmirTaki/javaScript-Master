console.log('javaScript Master');
document.getElementById("text").innerHTML = "-Arguments in JS"

// - Arguments

function sum(a, b){
    // console.log(arguments)
    let total = 0;
    for (let value of arguments){
        total += value;
    }
    return total
}

console.log(sum(1, 3))
console.log(sum())
console.log(sum(1, ))
console.log(sum(1, 2, 3, 4 ))


// اگرایتریتور نداشته باشد نمینوان استفاده کرد

