var myArgs = process.argv;
var sum = 0;
for (var i = 2; i < myArgs.length; i++) {
  sum += Number(myArgs[i]);
}
console.log(sum);