console.log('javaScript Master');
document.getElementById("text").innerHTML = "Getters and Setters"

// - Getters and Setters

const person = {    
    fname : "amir", 
    lname : 'taki',
    get fullName(){ 
        return `${person.fname} : ${person.lname}`
    },
    set fullName(value){
        const parts = value.split(" ");
        this.fname = parts[0]
        this.lname = parts[1]
    }
};

// console.log(person.fullName())


// getters => access properties
console.log(person.fullName)


// setters => change (mutate)
person.fullName = "mani javid"
console.log(person.fullName)
