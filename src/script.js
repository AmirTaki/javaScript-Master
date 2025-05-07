console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Array concatenation and slicing";

// -- Array concatenation and slicing

const first = [1, 2, 3, 4, 5]
const second = [6, 7, 8, 9, 10]

const combined = first.concat(second)

console.log(`combined : ${combined}`)

// silice

const slice = combined.slice(2, 5)

console.log(`slice : ${slice}`)

console.log(`slice : ${combined.slice(2)}`)

console.log(`slice : ${combined.slice()}`)


// نکته :درباره اسلایس و کامبکت 
// اگر عناصر ارایه پرمتیو باشند به وسیله ی مقدار ان کپی میشوند 
//  ولی اکر عناصر آبجکت باشند خود عناصر کپی نمی شوند بلمع رفرنس آن کپی میشود

// Example 

const ListNumbers = [1, 2, 3, 4, 5]
console.log(`LintNumbers : ${ListNumbers}` )

const sliceNumbers = ListNumbers.slice();
console.log(`sliceNumbers : ${sliceNumbers}` )

ListNumbers.pop()
console.log(`LintNumbers : ${ListNumbers}` )
console.log(`sliceNumbers : ${sliceNumbers}` )


console.log("--------------------------------")

const listNumbers = [{id : 1, value : "name"}]

const comb = listNumbers.concat(second)


for (let i in listNumbers )console.log(listNumbers[i])

console.log(comb)

listNumbers[0].value  = "new name"

for (let i in listNumbers )console.log(listNumbers[i])

console.log(comb)

