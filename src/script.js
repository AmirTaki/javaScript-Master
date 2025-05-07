console.log('javaScript Master');
document.getElementById("text").innerHTML = "Parameter initialization"

// - Parameter initialization

function interest (prinicpal  , rate = 3.5 , years = 5   ){
    // rate = rate || 3.5
    return ((prinicpal * rate) / 100) * years 
}

console.log(interest(100000, 3.5, 1 ))
console.log(interest(100000,  ))
console.log(interest(100000, undefined, 1 ))