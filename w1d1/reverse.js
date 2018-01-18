var args = process.argv.slice(2);

for (var i = 0; i < args.length; i++) {
  for (var i = 1; i < word.length; i++) {
    word += word[0];
    console.log(word);
    word = word.substr(1);
    console.log(word);
  }
}