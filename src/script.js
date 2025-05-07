console.log('javaScript Master');
document.getElementById("text").innerHTML = " - scoops"

// - - Scoops

{
    const message = "scope"
    let messageLet = "let "
}

// console.log(message)   //warning
//  console.log(messageLet) //warning

//اسکوپ یک متغیر یا یک ثابت مشخص میکند که کجا در دسترس باشد


function start(){
    const message = "scope function"
    if (true){
        const anoter = "hi"
    }
    // console.log(anoter) // warning 
    for (let i = 0 ; i < 5; i++){
        console.log(i)
    }
    // console.log(i)  // warning

}
// console.log(message)// warning
start()


const color = 'red'


function stop() {
    const anoter = "hello World!"
    //  console.log(color)
    const color = 'blue'
    console.log(color)
}

stop()
console.log(color)

/*
local
به
global 
الویت دارد

local 
{
    global
}

*/


function shop (){
    let age = 18
    
    if (true){
        console.log(age)
        age = 20  //
        console.log(age)
    }
    console.log(age)
}

shop()