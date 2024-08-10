function asciiToBytes(asciiString){
    var arr = [];
    for(let i=0; i<asciiString.length; i++){
        arr.push(asciiString.charCodeAt(i));
    }
    return arr;
}



const asciiString = "jahangir";
var arr  = new Uint8Array(asciiToBytes(asciiString));
console.log(arr);


