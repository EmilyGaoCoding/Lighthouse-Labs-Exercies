function maxProfit(arr) {
  arr.sort(function(a, b) {
    return a - b;
  })

  console.log(arr);
}

maxProfit([45, 24, 35, 31, 40, 38, 11]);