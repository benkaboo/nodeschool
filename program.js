

var sum = 0;
var argsCount = process.argv.length

for(i=2;i<argsCount;i++){
  sum = sum + (argToNum(process.argv[i]));
}

console.log(sum);



function argToNum(argument){

  var returnValue =  Number(argument);
  return returnValue;

}
