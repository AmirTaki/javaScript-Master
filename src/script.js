console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Loop while";

// Loop 
// while
let i = 0; 
while(i < 100){

    console.log(((i%5) == 0) ? i : -1)
    i++;
}