// "TODO: Create a program that prints a list of files in a given directory,
//  filtered by the extension of the files."

var fs = require("fs");
var path = require("path");

var dirPath = process.argv[2]; //"C:/Users/thamer_belgacem/Desktop/tuto/Nouveau dossier/"
var extension = "." + process.argv[3];

fs.readdir(dirPath, function (err, files) {
  if (err) return console.log(err);
  files.forEach(function (file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
