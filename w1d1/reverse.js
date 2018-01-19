var args = process.argv.slice(2);

for (var i = 0; i < args.length; i++) {
  var word = args[i];

  var word = word.split('').reverse().join('');

  console.log(word);
}