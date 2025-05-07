console.log('javaScript Master');
document.getElementById("text").innerHTML = " -- to change this"


//To Change THIS

/* 
method -> obj
function -> global(window, global)
*/

const video = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((element) => {
            console.log(this.title, element)
        });
    }
}

video.showTags()

console.log("-----------------")

const videoSelf = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach(function(element){
            console.log(self.title, element)
        })
    }
}

videoSelf.showTags()


console.log("-----------------")

//فانکشن ها در اصل آبجکت هستندوآبجکت ها یه سری پراپتی دارد و یک سری متد

function playVideo() {
    console.log(this)
}
// playVideo()

playVideo.call({name : 'amir'})

playVideo.apply({name : 'mani'})

/*
 یک فانکشن جدید برمیگرداند و 
this 
در فانکشن جدید به صورت داعمی به آبجکت که به عنوان ورودی به ان شاره کند
*/

const fn = playVideo.bind({name : "samin"})

console.log(fn())
fn()


console.log('-------------')


// arrow function
// this
// از بلاکی در بوده به ارث میرد

const videos = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((element) => {
            console.log(this.title, element)
        });
    }
}
videos.showTags()