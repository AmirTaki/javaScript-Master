console.log('javaScript Master');
document.getElementById("text").innerHTML = " - switch-case";

// - switch-case
let role = "admin";

switch(role){
    case "guest":
        console.log("gest User");
        break;

    case "admin":
        console.log("admin User");
        break;
    
    default :
        console.log("unknown User");
}

if (role == "guest"){
    console.log("gest User");
}

else if (role == "admin"){
    console.log("admin User");
}
else {
    console.log("unknown User")
}