// asynchronous code
var fs = require("fs");

function readFile(err, data){
    console.log(data);
}

function say(){
    console.log("beep...")
}

console.log("hi");
fs.readFile("a.txt", "utf-8", readFile); //asynchronous
setTimeout(say, 10000); //asynchronous

