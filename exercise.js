var request = require("request");
var fs = require("fs");

request
  .get("https://sytantris.github.io/http-examples/future.jpg")

  .on("error", function(err) {
    throw err;
  })
  .on("response", function(response) {
    var code = response.statusCode;
    var message = response.statusMessage;
    var header = response.headers["content-type"];
    console.log("Response Status Code: " + code);
    console.log("Response Message: " + message);
    console.log("Headers" + header);
  })

  .pipe(fs.createWriteStream("./future.jpg"));
