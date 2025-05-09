document.getElementById("text").innerHTML =  "- Asyncronous : Promise   in JS";

/*
Asyncronous : Promise in callbacks in JavaScript :
*/

function ball1(){
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("the ball one reached the end of the hill");
        }
        else {
            reject("the ball one failed");
        }
    } )
}
function ball2(){
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("the ball two reached the end of the hill");
        }
        else {
            reject("the ball two failed");
        }
    } )
}
function ball3(){
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("the ball three reached the end of the hill");
        }
        else {
            reject("the ball three failed");
        }
    } )
}
ball1().then((mes)=>{
    console.log(mes)
    return ball2();
}).then((mes)=>{
    console.log(mes)
    return ball3()
}).then((mes)=>{
    console.log(mes)
}).catch((error)=>{
    console.log(error)
})
