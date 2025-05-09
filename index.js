document.getElementById("text").innerHTML =  "- Asyncronous : async and await   in JS";

/*
Asyncronous : async and await in JavaScript :
*/

async function ball1(){

        if(true){
            return("the ball one reached the end of the hill");
        }
        else {
            throw new Error("the ball one failed");
        }
}

async function ball2(){

        if(true){
            return("the ball two reached the end of the hill");
        }
        else {
            throw new Error("the ball two failed");
        }
}

async function ball3(){

        if(true){
            return("the ball three reached the end of the hill");
        }
        else {
            throw new Error("the ball three failed");
        }
}

// console.log(ball1())

async function execute() {
    try {
        console.log(await ball1())
        console.log(await ball2())
        console.log(await ball3())
    }catch(e){
        console.log(e);
    }
   
}
execute()