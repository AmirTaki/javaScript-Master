console.log('javaScript Master');
document.getElementById("text").innerHTML = "- - - What 'this' does"

// - this

// function in object => method
// method in object => this

// functiion normall => this : global object
// global object in browser ---> window
// global object in node  -----> global


// this in function -> global (browser : windonw, node : global)

//-----------------------------------   -------------------------------

// OBJECT
const video = {
    title : "a",
    play() {
        console.log(this)
    },
    stop() {
        console.log(this)
    }
}

video.play()

// this
//   درون یک متد هست و آبجکت ما درون فانکشن است بنابراین 
// this
// به آبجکتی که آن متد در آن قرار دارد اشاره میکند

video.stop()

//-----------------------------------   -------------------------------
// FUNCTION

function playVideo() {
    console.log(this);
}

playVideo() // window
// یک فانکشن است باید کلوبال برای ما نمایش دهد

//-----------------------------------   -------------------------------
// CONSTRANCTOR FUNCTION

function Videos (title) {
    this.title = title;
    console.log(this)

    // return this
}

const V = new Videos('practice')

// ویندو برای ما لاگ نمیگیرد چرا ؟

// وقتی از کلمه
// new 
// استفاده میکنیم 3 کار انجام میدهد
// 1)
// ابتدا یک آبجکت خالی جدید میسازد
// 2)
//this
// به آبجکت خالی جدید اشاره مبکند
// 3)
// در نهایت کلمه 
//  this 
// برای ما بر میگرداند

//-----------------------------------   -------------------------------

const film = {
    title: 'film:',
    tags : ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(e => {
            console.log(this.title, e)
        })
    },
    
    showTagsF(){
        this.tags.forEach(function(e)  {
            console.log(this.title, e)
        },this)
    }
}


film.showTags()
console.log("----------------")
film.showTagsF()

console.log('a', 'b')