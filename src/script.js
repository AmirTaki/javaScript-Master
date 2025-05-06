console.log('javaScript Master');
document.getElementById("text").innerHTML = " - Conditional if-els statement";

// - Conditional if-els statement

// 6am - 12pm -> good morning

// 12pm - 6px -> good afternoon

// otherwise  -> good evening


let hour = 15;
if (6 <= hour  && hour < 12) 
{
    console.log("good morning")
}
else if(13 <= hour && hour <18)
{
    console.log("good afternoon")
}
else 
{
    console.log("good evening")
}
