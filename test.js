∏function time() {
  console.log(typeof arguments);
  var array = [];
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    array.push(arguments[i]);
  }
 console.log(array);
}

time(3, 5);