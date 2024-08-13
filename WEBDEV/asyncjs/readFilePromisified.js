const fs = require('fs');


function readFileHere(resolve){
    fs.readFile('a.txt', 'utf-8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            resolve(data);
        }
    })
}


function callBack(contents){
    console.log(contents);
}

function readFilePromisified(){
    return new Promise(readFileHere);
}

const p = readFilePromisified();
p.then(callBack);
