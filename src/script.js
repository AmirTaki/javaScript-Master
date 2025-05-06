console.log('javaScript Master');
document.getElementById("text").innerHTML = "  -Logical operators on non-Booleans";


//-Logical operators on non-Booleans"

// false => false, undifind,, null, 0 , "", NaN

// ture => true, 0, -1, 1, "string", ......

console.log(false || true)

console.log(false || "test")

console.log(false || 0 || true)

console.log(false || 1 || false) // => (false || true || false) => true


console.log(false && true)

console.log(false && "test")

console.log(true && 0 && "test") // => (ture && false && true) => false:0

console.log(true && 1 && "7" || false && "test")
// true && true &&  true => True(7)
// false && true(7) => false
// true(7) || false => True(7)
