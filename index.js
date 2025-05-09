document.getElementById("text").innerHTML =  "- Asyncronous CallBack in JS";

/*
Asyncronous CallBack in JavaScript :
*/

function ball1(callback){
    setTimeout(()=>{
          console.log("the ball one reached the end of the hill");
          callback(ball3);
    },2000)
  
}
function ball2(callback){
    setTimeout(()=>{
          console.log("the ball two reached the end of the hill");
          callback();
    },1000)
  
}
function ball3(){
    setTimeout(()=>{
          console.log("the ball three reached the end of the hill");
    },3000)
  
}

// ball1();
// ball2();
// ball3();


ball1(ball2)

