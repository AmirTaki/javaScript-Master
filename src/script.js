console.log('javaScript Master');
document.getElementById("text").innerHTML = " - - Spread operator in votes";

// -- - Spread operator in votes

// primative
const first = [1, 2, 3, 4]
const second = [5, 6, 7, 8]

const combied = ['a',...first,'b', ...second,'c']

console.log(`combied : ${combied}`)

const slice = [...combied]

console.log(`slice : ${slice}`)

console.log(first.pop())


console.log(`combied : ${combied}`)

console.log(`slice : ${slice}`)


/// refrence

const one = [{id : 1}]
const comb = [...one, ...second]


for (let i in comb) console.log(comb[i])


one[0].id = 30

for (let i in comb) console.log(comb[i])

console.log(one[0].id)