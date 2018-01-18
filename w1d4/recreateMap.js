var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(input, callback) {
  var output = [];
  input.forEach(function(i) {
    output.push(callback(i));
  })
  console.log(output);
}
