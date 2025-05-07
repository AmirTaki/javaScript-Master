console.log('javaScript Master');
document.getElementById("text").innerHTML = "- Sorting arrays"

/// - - Sorting arrays

const numbers = [6, 1, 16, 2, 19, 3, 4, -4]

numbers.sort();

console.log(numbers)

numbers.reverse();

console.log(numbers)

const obj = [
    {   id : 1, name : 'html'},
    {   id : 2, name : 'css'},
    {   id : 3, name : 'javaScript'},
    {   id : 4, name : 'react'},
    {   id : 4, name : 'nextjs'},
]

obj.sort(function(a, b){
    let nameA = a.name.toLocaleLowerCase()
    let nameB = b.name.toLocaleLowerCase()
    if (nameA < nameB) return -1;
    if (nameB > nameA) return 1;
    return 0
})

console.log(obj)