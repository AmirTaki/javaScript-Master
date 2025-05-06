console.log('javaScript Master');
document.getElementById("text").innerHTML = "object Date";

// object Date
const now = new Date();
console.log(now)

const dateOne = new Date("May 11 2018 09:00");
console.log(dateOne)

const dateTwo = new Date(2018,0,11, 9,0);  // year, month, day, hours, min
console.log(dateTwo)


console.log(now.toDateString());

console.log(dateOne.toDateString());

console.log(dateTwo.toDateString());

console.log(now.toISOString());

console.log(now.getDate());

console.log(now.getDay());

console.log(now.getMonth());

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getFullYear());


// convert 
console.log(now.setFullYear(2030))

console.log(now)

dateOne.setFullYear(2040)
console.log(dateOne)

dateTwo.setHours(22)
console.log(dateTwo)