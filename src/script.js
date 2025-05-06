console.log('javaScript Master');
document.getElementById("text").innerHTML = "  - Comparison operators";


//-  Comparison operators
// < > = <= >=   : relational
let x = 1;

console.log(x > 1)  // false

console.log(x >= 1) // true

console.log(x <= 1) // true

// equality

// 1- lose equality
// == !=

console.log(x == 1) // true

console.log(x != 1) // false

console.log(true == 1)  // true => boolean (true) == int (1:ture)

console.log(false == 1)  // false => boolean (false) != int (1:true)

console.log(false == 0)  // true => boolean (false) != int (0:false)

console.log(false != 1) // true => boolean(false) != (1:ture)

console.log("script equality")

// 2- script equality
// ===  !==

console.log(1 === 1) // true  => type (int) === type (int)

console.log('1' === 1) // false => type(string) !== type(int)

console.log('1' == 1) // true => 1 == 1 : notImportant type

console.log(true === 1) // false =>  type (bollan) !== type(int)

console.log(false === true) // flase => type (false:boolean) === (true:boolean) & flase !== true => false

console.log("word" === true) //false =>type(string:true) === type(string:true) & string != true => true & false => false

console.log("" == false) // ture =>  string != boolean

console.log("" === false) //false => type (string) !== boolean & string != boolean => false & false

