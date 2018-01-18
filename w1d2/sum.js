
// returns the sum of the numeric values of those strings
function sumList(listOfStrings) {
  // 1. initialize a new variable to a default value
  var sum = 0;
  // 2. loop over each value of the input
  for (var i = 0; i < listOfStrings.length; i++) {
    var str = listOfStrings[i];
    var num = Number(str);

    // if the string can be converted to a number
    if (!Number.isNaN(num)) {
      // add it to the sum
      sum += num;
    }
  }
  // 3. modify the variable
  return sum;
}

console.log(sumList([]));

console.log(typeof Infinity);

console.log(0.1 + 0.2);