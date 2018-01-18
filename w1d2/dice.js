// initialize input as a variable
var num = process.argv[2];

// initialize a random number variable
function  rollDice(times) {
  var output = "Rolled " + times + " dice: ";

  for (var i = 0; i < times; i++) {
    var dice = Math.random() * 6;
    dice = Math.ceil(dice);
    output += dice + ", ";
  }

  return output.substr(0, output.length -2);
}

console.log(rollDice(num));