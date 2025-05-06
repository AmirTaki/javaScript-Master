console.log('javaScript Master');
document.getElementById("text").innerHTML = "- object string";


// -object string



//ما در اسکریپت دو نوع آبجکت داریم 

// 1-string primive

const message = "javaScript cooding is cool"

// 2- string object
const another = new String(message)


console.log(typeof(message))

console.log(typeof(another))

console.log(message)
// message. => convert primive to object

console.log(message.length)

console.log(message[3]);

console.log(message.includes('is'));

console.log(message.startsWith('co'));

console.log(message.endsWith('cool'));

console.log(message.indexOf("coo"));

console.log(message.indexOf("m"));

console.log(message.replace("cooding","code"));

console.log(message.toLowerCase());

console.log(message.toUpperCase());

const mess = "  javaScript cooding is cool   " 

console.log(mess.trim())

console.log(mess.trimLeft())

console.log(mess.trimRight())


const text = 'javaScript cooding\n is \"cool\" alpha   '
console.log(text)

console.log(mess.split(' '))

console.log(mess.split('a'))

console.log('java-Script-cooding-is-cool-'.split('-'))