/**
 * The btoa() function creates a Base64-encoded ASCII string from a string. Each character in the string is treated as a byte (8 bits: eight 0 and 1s).
 */

const encode = (str) => {
    return btoa(str)
}

const decode = (str) => {
    return atob(str);
}

//test
// let encoded = encode("Hello World")
// console.log("Encoded: ",encoded);
// console.log("Decoded: ",decode(encoded));
console.log(Math.ceil(5%2));

