console.log('javaScript Master');
document.getElementById("text").innerHTML = " -Try and Catch"


// try & catch

const person = {
    fname:'amir',
    lname : 'taki',
    get fullName(){return `${person.fname} : ${person.lname}`},
    set fullName(value){
        if(typeof value !== 'string')return;
        
            const parts = value.split(' ')
            this.fname =  parts[0]
            this.lname =  parts[1]
     
    }
}

console.log(person.fullName)
person.fullName = true

console.log(person.fullName)

console.log(person)
// Try Catch


const personal = {
    fname:'amir',
    lname : 'taki',
    get fullName(){return `${person.fname} : ${person.lname}`},
    set fullName(value){
    
        const parts = value.split(' ')
        if(typeof value !== 'string') throw new Error("value is not a string ");
    
        if (parts.length !== 2) throw new Error("Enter a first an last name");
        
            this.fname =  parts[0]
            this.lname =  parts[1]
        
    }
}
try{
    // personal.fullName = false;
    personal.fullName = "amir"
}
catch(e){
    alert(e)
    console.log(e)
}  


