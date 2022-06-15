// "TODO: Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console (stdout),"

// import the fs module from the Node core library
var fs = require("fs");

// The full path to the file
const path = process.argv[2];
// Asynchronous read
fs.readFile(path, function (err, data) {
  if (err) {
    return console.error(err);
  }
  // converte the Buffer-objects to strings
  const str = data.toString();
  // count the number of newlines in the string
  console.log(str.split("\n").length - 1);
});
