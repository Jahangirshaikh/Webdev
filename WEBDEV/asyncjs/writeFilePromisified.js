const fs = require('fs');

var data = "Hello World!"

function writeFileHere(resolve){
    fs.writeFile('a.txt', data, function(err){
        if(err){
            console.log(err);
        }
        else{
            resolve();
        }
    })
}


function writeFilePromisified(){
    return new Promise(writeFileHere);
}


function callBack(){
    console.log('File Written');
}

const p = writeFilePromisified();

p.then(callBack);