var input = process.argv.slice(2);

function  pigLatin(arr) {
  var output = '';

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substr(1) + arr[i].substr(0, 1) + 'ay' + ' ';
    output += arr[i];
  }

  console.log(output.substr(0, output.length - 1));
}

pigLatin(input);