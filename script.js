// const Circle = require('./circle.js')

import { Circle } from "./circle"


// به هر فایل یک ماژول می گویند
// - - Modules in JavaScript

const c = new Circle(10)
c.draw()

document.getElementById("text").innerHTML =  "- Modules in JS"
