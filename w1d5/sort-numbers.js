var list = [];

function addToList(num) {
  list.push(num);
}

// var arr = [2, 7, 6, 123, 76];

function sortList() {
  list.sort(function(a, b) {
    return a - b;
  });
  return list;
}

// sortList(arr);
// console.log(arr);

module.exports.addToList = addToList;
module.exports.listOutput = function() {
  return sortList();
};

