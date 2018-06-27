var fs = require('fs');
var fileBuffer = undefined;

fs.readFile(process.argv[2], function doneReading(err, fileBuffer){

  var fileAsString = fileBuffer.toString();
  var splitArray = fileAsString.split('\n');
  console.log(splitArray.length - 1);

});
