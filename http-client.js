var http = require("http");

const path = process.argv[2]; //"http://jsonplaceholder.typicode.com/users/"

callback = function (response) {
  var str = "";
  response.setEncoding("utf8");

  //another chunk of data has been received, so append it to `str`
  response.on("data", function (chunk) {
    str += "\n" + chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on("end", function () {
    console.log(str.toString().trim());
  });
};

http.request(path, callback).end();
