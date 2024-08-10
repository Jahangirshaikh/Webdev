const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
    return bs58.encode(uint8Array);
}

const uint8Array = new Uint8Array([104, 101, 108, 108, 111]);  // "hello" in UTF-8
const base58 = uint8ArrayToBase58(uint8Array);
console.log(base58);  // Outputs the base58 representation of "hello"
