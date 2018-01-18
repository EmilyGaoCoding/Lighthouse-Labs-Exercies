var num = 2;

var anotherFunction = function(num) {
  console.log(num);
  anotherFunction(num);
}

anotherFunction(1);

