document.getElementById("text").innerHTML =  "- Managing errors in callbacks in JS";

/*
Asyncronous : Managing errors in callbacks in JavaScript :
*/



/*
function ball1(ball2){
    setTimeout(()=>{
        try{
            if (true){
                console.log("the ball one reached the end of the hill");
                ball2(ball3);
            }
            else {
                throw new Eror ("the ball one failed")
            }

        }
        catch(error){
            console.log(error)
        }
    },2000)
  
}
function ball2(callback){
    setTimeout(()=>{
       try{
            if (false){
                console.log("the ball two reached the end of the hill");
                callback();
            }
            else {
                throw new Eror ("the ball two failed")
            }

        }
        catch(error){
            console.log(error)
        }
    },1000)
  
}
function ball3(){
    setTimeout(()=>{
          console.log("the ball three reached the end of the hill");
    },3000)
  
}

ball1(ball2)

*/

function ball1(callback){
    setTimeout(()=>{
    callback(true)  
    },2000)
}


function ball2(callback){
    setTimeout(()=>{
        callback(true)
    },1000)
}


function ball3(callback){
    setTimeout(()=>{
        callback(true)
    },3000)
}



ball1((res)=>{
    try{
        if(res){
            console.log('the ball one reached the end of the hill');
            ball2((res)=>{
                try{
                    if(res){
                    console.log('the ball two reached the end of the hill');
                    ball3((res)=>{
                        try{
                            if (res){
                            console.log('the ball three reached the end of the hill');
                            }
                            else {
                                throw new Error("the ball three failed");
                            }   
                        }
                        catch(erorr){
                            console.log(erorr)
                        }
                    })
            }
            else{
                throw new Error("the ball two failed");
            }}
                catch(erorr){
                    console.log(erorr)
                } 
        });
    }
    else{   
        throw new Error("the ball one failed");
    }
    }
    catch (error){
        console.log(error)
    }
   
})

