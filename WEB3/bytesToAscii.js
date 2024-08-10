function bytesToAscii(arr){
    var string = "";
    for(let i=0;i<arr.length;i++){
        string = string+String.fromCharCode(arr[i]);
    }
    return string;
}



const bytes = [72, 101, 108, 108, 111];
const asciiString = bytesToAscii(bytes);
console.log(asciiString);
