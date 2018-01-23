function luhnAlgorithmTest(num) {
  var numArr = num.toString().split('');
  var sum = 0;

  for (var i = numArr.length - 1; i >= 0; i--) {
    numArr[i] = Number(numArr[i]);

    if (((numArr.length - i) % 2) === 0) {
      numArr[i] *= 2;
      if (numArr[i] > 9) {
        var strNew = numArr[i].toString();
        numArr[i] = Number(strNew[0])+ Number(strNew[1]);
      }
    }

    sum += numArr[i];
  }

  return (sum % 10) === 0;
}

module.exports = luhnAlgorithmTest;