// "TODO: Write a program that uses a single synchronous filesystem operation to
//  read a file and print the number of newlines (\n) it contains to the console (stdout)"

// import the fs module from the Node core library
const fs = require("fs");

// The full path to the file
const path = process.argv[2];
// Synchronous read of the file input.txt
var buf = fs.readFileSync(path);
// converte the Buffer-objects to strings
const str = buf.toString();
// count the number of newlines in the string
console.log(str.split("\n").length - 1);
