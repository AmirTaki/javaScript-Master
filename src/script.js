console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Arrow Function";

// Arrow Function

const course = [
    {id : 1, name : "a"},
    {id : 2, name : "b"}
];

// const result = course.find(function(course){
//     return course.name === "a";
// })    
// console.log(result)


const result = course.find((course)=>course.name === "a")

console.log(result)

