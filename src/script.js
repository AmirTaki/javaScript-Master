console.log('javaScript Master');


// Refernce Types
// 2- Array type

let users = ["amir", "mani"]
console.log(users)
console.log(typeof(users))

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

users[2] = "javaScript";

console.log(users[2]);

users[3] = 123;

users[4] = false;

console.log(users[3])

console.log(users[4])



console.log(typeof(users))
console.log(typeof users)
// نکته در واقع آرایه ها نوعی آبجکت هستند
//  ['amir', 'mani']
// 0: "amir"
// 1: "mani"
// 2: "javaScript"
// 3: 123
// 4: falselength: 
// 5[[Prototype]]: Array(0)

console.log(users.length)

document.getElementById("text").innerHTML = " Refernce Types : 2- Array type";