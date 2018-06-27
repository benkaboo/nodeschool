var fs = require('fs')

var fileBuffer = fs.readFileSync(process.argv[2]);

var fileAsString = fileBuffer.toString();

var splitArray = fileAsString.split('\n');



console.log(splitArray.length - 1);
