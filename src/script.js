console.log('javaScript Master');
document.getElementById("text").innerHTML = "- - Array map in JavaScript"

// - Array mapping

const numbers = [1, 10, 12, 4, -8, -9, -18, 22, 39]


const list = []
for (let i = 0 ; i < numbers.length; i++){
    list.push( numbers[i] * 2)
}

console.log(numbers)

console.log('--------------')

const result = numbers.map(value => value * 10)
console.log(result)

console.log('--------------')

const products = ["html", 'css', 'js']

const items = products.map(product => {
    return `<li> ${product} </li>`
})
console.log(items)

console.log('--------------')
const html = `<ul> ${items.join('')} </ul>`
console.log(html)

document.getElementById("view").innerHTML = html;

console.log('--------------')
const objects = products.map( prodect => ({value : prodect}) ) ;
console.log(objects)

console.log('--------------')

const tall = [170, 190, 172, 180, 167, 159, 182, 178]


const views = tall.filter(tall => tall >= 170).map(tall => ({man : tall}))

console.log(views)
