var fs = require('fs');
var rPath = require('path');

if(process.argv.length <= 3){
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

var path = process.argv[2];
var filter = process.argv[3];

listOfFiles(path,filter);

function listOfFiles(path, extension){

    fs.readdir(path, function(err, items){

      for(var i=0; i<items.length;i++){

         extMatch(err, items[i], filter);
       }
    })
}


function extMatch(err, item, filter){

    var fileExt = rPath.extname(item);

    if(fileExt === ('.'+ filter)){
      console.log(item);
    }
  }
