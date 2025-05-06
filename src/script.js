console.log('javaScript Master');
document.getElementById("text").innerHTML = " - break and continue";
// break & continue


// break
let i = 0; 
while (i < 100){
    console.log(i++)
    if (i == 50) break;
}
console.log("---------------------------------")

// continue
let j = 0; 
while (j < 100){
    console.log(j++)
    if (j == 50) continue;
}

